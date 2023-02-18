"use client";
import withStyles from "@/packages/core/styles/withStyles";
import { ThemeProps } from "@/packages/core/theme/themeProvider/themeProvider";
import ButtonBase from "../button-base/ButtonBase";

const BUTTON_CONTAINED = "RuiButtonContained";

const useStyles = (theme: ThemeProps) => `
  &.${BUTTON_CONTAINED} {}
`;

export default withStyles(useStyles, {
  nestedClasses: BUTTON_CONTAINED,
})(ButtonBase);
