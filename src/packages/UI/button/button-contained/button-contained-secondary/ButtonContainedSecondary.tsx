/** @jsxImportSource @emotion/react */
"use client";
import withStyles from "@/packages/core/styles/withStyles";
import { ThemeProps } from "@/packages/core/theme/themeProvider/themeProvider";
import { css } from "@emotion/react";
import { forwardRef } from "react";
import ButtonContained from "../ButtonContained";

const BUTTON_CONTAINED_SECONDARY = "RuiButtonContainedSecondary";

const useStyles = (theme: ThemeProps) => css`
  &.${BUTTON_CONTAINED_SECONDARY} {
    background-color: ${theme.palette.secondary.main};
    color: ${theme.palette.secondary.contrastText};
  }
`;

const ButtonContainedSecondary = forwardRef<HTMLButtonElement, any>(function (
  props,
  ref
) {
  return (
    <ButtonContained
      ref={ref}
      nestedClasses={BUTTON_CONTAINED_SECONDARY}
      {...(props as any)}
    />
  );
});

ButtonContainedSecondary.displayName = BUTTON_CONTAINED_SECONDARY;

export default withStyles(useStyles)(ButtonContainedSecondary);
