import React from "react";
import { Heading } from "@chakra-ui/core";

export default {
  title: "Chakra/Checkbox",
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const ChakraHeading = Template.bind(null, {
  size: "md",
  children: "Register",
});
