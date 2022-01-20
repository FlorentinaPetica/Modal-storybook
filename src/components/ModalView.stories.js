import React from "react";
import { ModalView } from "./ModalView";

export default {
  component: ModalView,
  title: "Modal/Modal",
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const Template = (args) => <ModalView {...args} />;

export const VisibleShort = Template.bind({});
VisibleShort.args = {
  backgroundColor: "rgba(202, 90, 90, 0.2)",
  fontSize: "14px",
  width: "75%",
  height: "fit-content",
  opacity: 0.2,
};

export const VisibleTall = Template.bind({});
VisibleTall.args = {
  ...VisibleShort.args,
  fontSize: "32px",
};

export const NotVisible = Template.bind({});
NotVisible.args = {
  backgroundColor: "rgb(202, 90, 90)",
  visible: false,
  opacity: 1,
};

export const Blank = Template.bind({});
Blank.args = {
  display: "none",
};
