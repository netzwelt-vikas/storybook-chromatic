import React from "react";
import { ThemeProvider, theme } from "@chakra-ui/core";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { Header } from "./components/Header/Header.stories";
import { PrimarySubscription } from "./components/Subscription/Subscription.stories";
import {
  ChakraButtonSuccess,
  ChakraButtonDanger,
  ChakraLoginButton,
  Knobs,
} from "./components/ChakraButton/ChakraButton.stories";
import {
  ChakraCheckboxSuccess,
  ChakraCheckboxRemember,
} from "./components/ChakraCheckbox/ChakraCheckbox.stories";
import { ChakraHeading } from "./components/ChakraHeading/ChakraHeading.stories";
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <div className="login-box">
          <ChakraHeading />
          <div className="input-item">
            <Input size="medium" placeholder="First Name" />
          </div>
          <div className="input-item">
            <Input size="medium" placeholder="Last Name" />
          </div>
          <div className="input-item checkbox-item">
            <ChakraCheckboxRemember />
          </div>
          <div className="input-item">
            <ChakraLoginButton />
          </div>
        </div>
        {/* <br />
        <br />
        <PrimarySubscription />
        <br />
        <br />
        <Button variant="success">Primary</Button>
        <br />
        <br />
        <ChakraButtonSuccess />
        <br />
        <br />
        <ChakraButtonDanger />
        <br />
        <br />
        <ChakraCheckboxSuccess /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
