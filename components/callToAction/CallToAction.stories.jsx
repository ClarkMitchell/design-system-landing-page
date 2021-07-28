import React from "react";
import CallToAction from "./CallToAction";
import generateProps from "fake-props";

const story = {
  title: "Call To Action",
  component: CallToAction,
};

export const Primary = () => <CallToAction {...generateProps(CallToAction)} />;

export default story;
