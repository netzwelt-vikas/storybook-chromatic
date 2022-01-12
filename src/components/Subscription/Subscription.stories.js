import React from "react";
import { Primary } from "../Button/Button.stories";
import { Medium } from "../Input/Input.stories";

export default {
  title: "Multiple-Story/Subscription",
};

export const StoryWithInStory = () => (
  <>
    <Medium />
    <br />
    <Primary />
  </>
);
