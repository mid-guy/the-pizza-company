"use client";
import withStyles from "@/packages/core/styles/withStyles";
import { ThemeProps } from "@/packages/core/theme/themeProvider/themeProvider";
import { classNames } from "../../text-field-root/getTextFieldRootCss";
import TextFieldOutlined from "../TextFieldOutlined";

const TEXT_FIELD_OUTLINED_SECONDARY = "TextFieldOutlinedSecondary";

const useStyles = (theme: ThemeProps) => `
  &.${TEXT_FIELD_OUTLINED_SECONDARY} {
    &.${classNames.focused} {
      border-color: ${theme.palette.secondary.main};
    }
  }
`;

export default withStyles(useStyles, {
  nestedClasses: TEXT_FIELD_OUTLINED_SECONDARY,
})(TextFieldOutlined);
