import React from 'react';
import {Container, Text, InputField, Button, SelectField} from '@dathaplus/storybook';
import { Formik } from "formik";
import {containerForm, containerState, inputForm, selectForm} from "@components/form/style";
import useMobile from "../../hooks/useMobile";

export const Form = () => {
  const {mobile} = useMobile();

  return (
    <Formik initialValues={{
      full_name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      itinerary: ""
    }} onSubmit={(values) => {
      console.log("submit values: ", values);
    }}>
      {
        ({handleSubmit, values, handleChange}) => (
          <Container {...containerForm}>
            <Text fontSize="2rem" paddingBottom="0.8rem" entranceAnimate="fadeIn">Complete the form</Text>
            <form onSubmit={handleSubmit}>
              <InputField {...inputForm} placeholder="Full Name" name="full_name" value={values.full_name} onChange={handleChange}  />
              <InputField {...inputForm} placeholder="Email" name="email" value={values.email} onChange={handleChange}/>
              <InputField {...inputForm} placeholder="Phone" name="phone" value={values.phone} onChange={handleChange}/>
              <InputField {...inputForm} placeholder="Address" name="address" value={values.address} onChange={handleChange}/>
              <Container {...containerState}>
                <InputField {...inputForm} margin="0" placeholder="City" name="city" value={values.city} onChange={handleChange}/>
                <SelectField {...selectForm} margin={mobile? "1rem 0" : "0 1rem"} name="state" defaultValue={values.state} onChange={handleChange}>
                  <option value="" disabled>State</option>
                  <option value="State1">State 1</option>
                  <option value="State2">State 2</option>
                  <option value="State3">State 3</option>
                </SelectField>
                <InputField {...inputForm} margin="0" placeholder="Zip Code" name="zip_code" value={values.zip_code} onChange={handleChange}/>
              </Container>
              <InputField {...inputForm} placeholder="Your Itinerary" name="itinerary" value={values.itinerary} onChange={handleChange}/>
              <Button actions={{type: "submit"}} styles={{borderRadius: "0" }}><b>Submit</b></Button>
            </form>
          </Container>
        )
      }
    </Formik>
  );
};

export default Form;
