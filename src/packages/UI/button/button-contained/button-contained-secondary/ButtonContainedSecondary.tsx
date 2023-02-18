"use client";
import withStyles from "@/packages/core/styles/withStyles";
import { ThemeProps } from "@/packages/core/theme/themeProvider/themeProvider";
import ButtonContained from "../ButtonContained";

const BUTTON_CONTAINED_SECONDARY = "RuiButtonContainedSecondary";

const useStyles = (theme: ThemeProps) => `
  &.${BUTTON_CONTAINED_SECONDARY} {
    background-color: ${theme.palette.secondary.main};
    color: ${theme.palette.secondary.contrastText};
  }
`;

export default withStyles(useStyles, {
  nestedClasses: BUTTON_CONTAINED_SECONDARY,
})(ButtonContained);
