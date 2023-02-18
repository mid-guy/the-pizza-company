/** @jsxImportSource @emotion/react */
"use client";
import withStyles from "@/packages/core/styles/withStyles";
import { ThemeProps } from "@/packages/core/theme/themeProvider/themeProvider";
import ButtonContained from "../ButtonContained";

const BUTTON_CONTAINED_PRIMARY = "RuiButtonContainedPrimary";

const useStyles = (theme: ThemeProps) => `
  &.${BUTTON_CONTAINED_PRIMARY} {
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.contrastText};
  }
`;

export default withStyles(useStyles, {
  nestedClasses: BUTTON_CONTAINED_PRIMARY,
})(ButtonContained);
