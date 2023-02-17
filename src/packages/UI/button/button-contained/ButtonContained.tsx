"use client";
import { forwardRef } from "react";
import ButtonBase, {
  ButtonBaseProps,
  OverallButtonBaseProps,
} from "../button-base/ButtonBase";

const BUTTON_CONTAINED = "RuiButtonContained";

const ButtonContained = forwardRef<HTMLButtonElement, OverallButtonBaseProps>(
  function (props, ref) {
    return (
      <ButtonBase
        ref={ref}
        nestedClasses={BUTTON_CONTAINED}
        {...(props as ButtonBaseProps)}
      />
    );
  }
);

ButtonContained.displayName = BUTTON_CONTAINED;

export default ButtonContained;
