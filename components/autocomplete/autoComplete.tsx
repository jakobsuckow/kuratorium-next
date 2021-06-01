import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import PlacesAutocomplete, { geocodeByAddress } from "react-places-autocomplete";
import { countryList } from "../../services/countryList";
import { GlobalDataContext } from "../../services/globalDataProvider";
import Button from "../button/button";
import Flex from "../flex/flex";
import Item from "../flex/item";
import FormInput from "../forminput/formInput";
import FormRadio from "../forminput/formRadio";
import Loading from "../loading/loading";
import Underline from "../text/underline";

interface Props {
  autoComp: boolean;
  setAutoComp: Dispatch<SetStateAction<boolean>>;
}

const AutoComplete = (props: Props) => {
  const { autoComp, setAutoComp } = props;
  const { userInput, setUserInput } = React.useContext(GlobalDataContext);
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
        setValue("city", component.long_name);
      }
      if (component.types[0] === "postal_code") {
        setValue("postal", component.long_name);
      }
      if (component.types[0] === "country") {
        setValue("country", component.long_name);
      }
    });
  };
  const searchOptions = {
    types: ["address"],
  };

  const onSubmit = (data: any) => {
    setUserInput(data);
    router.push("/payment");
  };

  useEffect(() => {
    function getShippingQuote(country: any) {
      countryList.map((c: any) => {
        if (c.name === country) {
          setValue("shippingCost", c.cost);
        } else {
          return;
        }
      });
    }

    getShippingQuote(userInput.country);
  }, [userInput.country]);

  const methods = useForm({
    reValidateMode: "onSubmit",
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

  const submit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
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
        {autoComp ? (
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
                  <Underline {...getSuggestionItemProps(suggestion)}>
                    {suggestion.description}
                  </Underline>
                ))}
              </>
            )}
          </PlacesAutocomplete>
        ) : (
          <FormInput required label={`Street name`} name="streetName" type="text" />
        )}
        <FormInput required type="text" name="streetNumber" label={`Street number`} />
        <FormInput required type="text" name="postal" label={`Postal Code`} />
        <FormInput required type="text" name="city" label={`City`} />
        <FormRadio
          name="paymentMethod"
          value="creditCard"
          required
          label={`Credit card`}
          labelText={`
            Pay with Credit Card. We are using Stripe as a payment Provider
          `}
        />
        <FormRadio
          name="paymentMethod"
          required
          value="paypal"
          label={`Paypal`}
          labelText={`
            Pay with Paypal. We are using Stripe as a payment Provider
          `}
        />
        <Flex>
          <Button
            onClick={e => {
              e.preventDefault();
              router.push("/");
            }}>
            Go back to Shop
          </Button>

          <Button type="submit">Go to Payment</Button>
        </Flex>
      </form>
    </FormProvider>
  );
};

export default AutoComplete;
