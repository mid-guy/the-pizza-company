/** @jsxImportSource @emotion/react */
"use client";
import withStyles from "@/packages/core/styles/withStyles";
import { ThemeProps } from "@/packages/core/theme/themeProvider/themeProvider";
import { css } from "@emotion/react";
import { forwardRef } from "react";
import ButtonOutlined from "../ButtonOutlined";

const BUTTON_OUTLINED_PRIMARY = "RuiButtonOutlinedPrimary";

const useStyles = (theme: ThemeProps) => css`
  &.${BUTTON_OUTLINED_PRIMARY} {
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.contrastText};
  }
`;

const ButtonOutlinedPrimary = forwardRef<HTMLButtonElement, any>(function (
  props,
  ref
) {
  return (
    <ButtonOutlined
      ref={ref}
      nestedClasses={BUTTON_OUTLINED_PRIMARY}
      {...(props as any)}
    />
  );
});

ButtonOutlinedPrimary.displayName = BUTTON_OUTLINED_PRIMARY;

export default withStyles(useStyles)(ButtonOutlinedPrimary);
