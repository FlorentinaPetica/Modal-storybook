import React from "react";
import PropTypes from "prop-types";
import "./modal.css";
import { Button } from "../stories/Button";

export const ModalView = ({
  paragraph,
  backgroundColor,
  color,
  fontSize,
  width,
  height,
  visible,
  onClose,
  opacity,
  display,
}) => (
  <>
    <div
      className='bg-general'
      style={{ backgroundColor: `${backgroundColor}`,  opacity: `${opacity}`, display: `${display}` }}
    ><p>This is a background</p></div>

    {visible ? (
      <div
        className={"storybook-modal"}
        style={{ width: `${width}`, height: `${height}` }}
      >
        <Button size='small' secondary='true' onClose={onClose} label='X' />
        <p style={{ color: `${color}`, fontSize: `${fontSize}` }}>
          {paragraph}
        </p>
        <Button size='large' onClose={onClose} primary='true' label='Close' />
      </div>
    ) : null}
  </>
);

ModalView.propTypes = {
  paragraph: PropTypes.string,
  onClose: PropTypes.func,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  width: PropTypes.string,
  // visible: PropTypes.bool,
};

ModalView.defaultProps = {
  paragraph:
    "Aute ut magna cupidatat ea do cillum reprehenderit ullamco excepteur magna cupidatat id.",
  backgroundColor: null,
  color: null,
  fontSize: "16px",
  width: "250px",
  height: "250px",
  visible: true,
  onClose: undefined,
};
