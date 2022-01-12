import React from "react";
import { Checkbox } from "@chakra-ui/core";

export default {
  title: "Chakra/Checkbox",
  component: Checkbox,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Checkbox {...args} />;

export const ChakraCheckboxSuccess = Template.bind(null, {
  variantColor: "green",
  children: "Success",
  size: "sm",
});

export const ChakraCheckboxDanger = Template.bind(null, {
  variantColor: "red",
  children: "Danger",
  size: "md",
});

export const ChakraCheckboxRemember = Template.bind(null, {
  variantColor: "green",
  children: "Remember Me",
  size: "md",
});
