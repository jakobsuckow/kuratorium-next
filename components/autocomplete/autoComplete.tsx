import React, { useState, useEffect, Dispatch, ReducerAction } from "react";
import { countryList } from "../../services/countryList";
import PlacesAutocomplete, { geocodeByAddress } from "react-places-autocomplete";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "../forminput/formInput";
import FormSelect from "../forminput/formSelect";
import Button from "../button/button";
import Flex from "../flex/flex";
import Item from "../flex/item";
import Loading from "../loading/loading";

interface Props {
  userInput: any;
  setUserInput: Dispatch<ReducerAction<any>>;
}

const AutoComplete = (props: Props) => {
  const { userInput, setUserInput } = props;
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleSelect = async (value: any) => {
    const [result] = await geocodeByAddress(value);
    const components = result.address_components;
    components.forEach((component: any) => {
      if (component.types[0] === "route") {
        setAddress(component.long_name);
        setValue("streetName", component.long_name);
      }
      if (component.types.includes("street_number")) {
        const streetNumber = component.long_name;
        setValue("streetNumber", streetNumber);
      }
      if (component.types[0] === "locality") {
        setUserInput({ ["city"]: component.long_name });
      }
      if (component.types[0] === "postal_code") {
        setUserInput({ ["postal"]: component.long_name });
      }
      if (component.types[0] === "country") {
        setUserInput({ ["country"]: component.long_name });
      }
    });
  };
  const searchOptions = {
    types: ["address"],
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    function getShippingQuote(country: any) {
      countryList.map((c: any) => {
        if (c.name === country) {
          setUserInput({ ["shippingCost"]: c.cost });
        } else {
          return;
        }
      });
    }

    getShippingQuote(userInput.country);
  }, [userInput.country]);

  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      streetName: "",
      streetNumber: "",
      city: "",
      postal: "",
      country: "",
      shippingCost: 0,
      paymentMethod: "",
    },
  });

  const { handleSubmit, setValue } = methods;

  return (
    <FormProvider {...methods}>
      <h3>Personal Details:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          <Item>
            <FormInput required type="text" name="firstName" label={`First name`} />
          </Item>
          <Item>
            <FormInput required type="text" name="lastName" label={`Last name`} />
          </Item>
        </Flex>
        <FormInput required type="text" name="emailAddress" label={`Email address`} />

        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
          searchOptions={searchOptions}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <>
              <FormInput
                required
                label={`Street name`}
                value={userInput.streetName}
                {...getInputProps({
                  name: "streetName",
                })}
              />
              {loading && <Loading />}
              {suggestions.map((suggestion: any) => (
                <div {...getSuggestionItemProps(suggestion)}>{suggestion.description}</div>
              ))}
            </>
          )}
        </PlacesAutocomplete>

        <FormInput required type="text" name="streetNumber" label={`Street number`} />

        <FormInput required type="text" name="postal" label={`Postal Code`} />
        <FormInput required type="text" name="city" label={`City`} />

        <FormSelect
          required
          name="country"
          options={countryList.map((country: any) => country.name)}
          label={`Select your country`}
        />

        <FormSelect
          required
          name="paymentMethod"
          options={["credit cart", "paypal"]}
          label={`Select payment method`}
        />
        <Flex>
          <Item>
            <Button
              onClick={e => {
                e.preventDefault();
                router.push("/");
              }}>
              Go back to Shop
            </Button>
          </Item>
          <Item>
            <Button type="submit">Go to Payment</Button>
          </Item>
        </Flex>
      </form>
    </FormProvider>
  );
};

export default AutoComplete;
