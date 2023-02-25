"use client";
import withStyles from "@/packages/core/styles/withStyles";
import { ThemeProps } from "@/packages/core/theme/themeProvider/themeProvider";
import { classNames } from "../../text-field-root/getTextFieldRootCss";
import TextFieldOutlined from "../TextFieldOutlined";

const TEXT_FIELD_OUTLINED_PRIMARY = "TextFieldOutlinedPrimary";

const useStyles = (theme: ThemeProps) => `
  &.${TEXT_FIELD_OUTLINED_PRIMARY} {
    &.${classNames.focused} {
      border-color: ${theme.palette.primary.main};
    }
  }
`;

export default withStyles(useStyles, {
  nestedClasses: TEXT_FIELD_OUTLINED_PRIMARY,
})(TextFieldOutlined);
