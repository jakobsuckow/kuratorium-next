import React, { useState, useEffect, ReducerState, Dispatch, ReducerAction } from "react";
import { countryList } from "../../services/countryList";
import PlacesAutocomplete, { geocodeByAddress } from "react-places-autocomplete";
import { useRouter } from "next/router";
import { Order } from "../../@types";
import { FormProvider, useForm, UseFormMethods } from "react-hook-form";
import FormInput from "../forminput/formInput";

interface Props {
  userInput: any;
  setUserInput: Dispatch<ReducerAction<any>>;
}

const AutoComplete = (props: Props) => {
  const { userInput, setUserInput } = props;
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleUser = (e: any) => {
    const name = e.target.name;
    const newValue = e.target.value;

    setUserInput({ [name]: newValue });
  };

  const handleSelect = async (value: any) => {
    const [result] = await geocodeByAddress(value);
    const components = result.address_components;
    components.forEach((component: any) => {
      if (component.types[0] === "route") {
        setAddress(component.long_name);
        setUserInput({ ["streetName"]: component.long_name });
      }
      if (component.types.includes("street_number")) {
        const streetNumber = component.long_name;
        setUserInput({
          ["streetNumber"]: streetNumber,
        });
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

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <h3>Personal Details:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-2">
          <div className="inner left mr-2">
            <label htmlFor="fistName">Fist Name*</label>
            <FormInput required type="text" name="firstName" />
          </div>
          <div className="inner ml-2">
            <label htmlFor="lastName">Last Name*</label>
            <FormInput required type="text" name="lastName" />
          </div>
        </div>
        <label htmlFor="emailAddress">Email Address*</label>
        <FormInput required type="text" name="emailAddress" />
        <div className="flex-2-1-3">
          <div className="inner mr-2">
            <label htmlFor="streetName">Street*</label>
            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
              searchOptions={searchOptions}>
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <>
                  <input
                    value={userInput.streetName}
                    {...getInputProps({
                      name: "streetName",
                    })}
                  />
                  <div>
                    {loading && <div className="loading">Loading... &nbsp;</div>}
                    {suggestions.map((suggestion: any) => (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className: "cursor mb-1 suggestion",
                        })}>
                        {suggestion.description}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </PlacesAutocomplete>
          </div>
          <div className="inner ml-2">
            <label htmlFor="">Street number</label>
            <input
              type="text"
              name="streetNumber"
              autoComplete="off"
              value={userInput.streetNumber}
              onChange={handleUser}
            />
          </div>
        </div>

        <label htmlFor="">Postal Code*</label>
        <input
          required
          type="text"
          name="postal"
          autoComplete="off"
          value={userInput.postal}
          onChange={handleUser}
        />
        <label htmlFor="">City*</label>
        <input
          required
          type="text"
          name="city"
          id="city"
          autoComplete="off"
          value={userInput.city}
          onChange={handleUser}
        />

        <label htmlFor="country">Select your country*</label>
        <select
          defaultValue=""
          required
          name="country"
          onChange={handleUser}
          value={userInput.country}
          className="mb-1">
          <option value="">---</option>
          {countryList.map((country, i) => (
            <option key={i} value={country.name}>
              {country.name}
            </option>
          ))}
          <option value="germany">Germany</option>
          <option value="france">France</option>
        </select>
        <label htmlFor="country">
          Select payment method*
          <select
            required
            name="paymentMethod"
            onChange={handleUser}
            value={userInput.paymentMethod}>
            <option value="">---</option>
            <option value="paypal">Paypal</option>
            <option value="creditCard">Credit Card</option>
          </select>
        </label>

        <br />
        <br />
        <div className="flex-2">
          <div className="inner">
            <button
              onClick={e => {
                e.preventDefault();
                router.push("/");
              }}>
              Go back to Shop
            </button>
          </div>
          <div className="inner right">
            <input type="submit" value="Go to Payment" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default AutoComplete;
