"use client";
import { forwardRef } from "react";
import ButtonBase, {
  ButtonBaseProps,
  OverallButtonBaseProps,
} from "../button-base/ButtonBase";

const BUTTON_OUTLINED = "RuiButtonOutlined";

const ButtonOutlined = forwardRef<HTMLButtonElement, OverallButtonBaseProps>(
  function (props, ref) {
    return (
      <ButtonBase
        ref={ref}
        nestedClasses={BUTTON_OUTLINED}
        {...(props as ButtonBaseProps)}
      />
    );
  }
);

ButtonOutlined.displayName = BUTTON_OUTLINED;

export default ButtonOutlined;
