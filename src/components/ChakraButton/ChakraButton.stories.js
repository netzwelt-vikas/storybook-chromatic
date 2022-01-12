import React from "react";
import { Button } from "@chakra-ui/core";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const ChakraButtonSuccess = Template.bind(null, {
  variantColor: "green",
  children: "Success",
  variant: "solid",
  size: "md",
});

export const ChakraButtonDanger = Template.bind(null, {
  variantColor: "red",
  children: "Danger",
  variant: "outline",
  size: "lg",
});

export const ChakraLoginButton = Template.bind(null, {
  variantColor: "grey",
  children: "Login",
  variant: "outline",
  size: "lg",
});

export const Knobs = () => (
  <Button variantColor="purple" disabled={boolean("Disabled", false)}>
    {text("Label", "Button Label")}
  </Button>
);
