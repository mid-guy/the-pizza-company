/** @jsxImportSource @emotion/react */
"use client";
import withStyles from "@/packages/core/styles/withStyles";
import { ThemeProps } from "@/packages/core/theme/themeProvider/themeProvider";
import { css } from "@emotion/react";
import { forwardRef } from "react";
import ButtonOutlined from "../ButtonOutlined";

const BUTTON_OUTLINED_SECONDARY = "RuiButtonOutlinedSecondary";

const useStyles = (theme: ThemeProps) => css`
  &.${BUTTON_OUTLINED_SECONDARY} {
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.contrastText};
  }
`;

const ButtonOutlinedSecondary = forwardRef<HTMLButtonElement, any>(function (
  props,
  ref
) {
  return (
    <ButtonOutlined
      ref={ref}
      nestedClasses={BUTTON_OUTLINED_SECONDARY}
      {...(props as any)}
    />
  );
});

ButtonOutlinedSecondary.displayName = BUTTON_OUTLINED_SECONDARY;

export default withStyles(useStyles)(ButtonOutlinedSecondary);
