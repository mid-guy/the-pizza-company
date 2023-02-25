"use client";
import withStyles from "@/packages/core/styles/withStyles";
import { ThemeProps } from "@/packages/core/theme/themeProvider/themeProvider";
import TextField from "../TextField";

const TEXT_FIELD_OUTLINED = "RuiTextFieldOutlined";

const useStyles = (theme: ThemeProps) => `
  &.${TEXT_FIELD_OUTLINED} {
    background: inherit;
    border-radius: ${theme.palette.shape.borderRadius}px;
    border-color: ${theme.palette.shape.borderColor.default};
    border-width: ${theme.palette.shape.borderWidth}px;
    border-style: ${theme.palette.shape.borderStyle.solid};
    &:hover {
      border-color: ${theme.palette.shape.borderColor.hover};
    }
  }
`;

export default withStyles(useStyles, {
  nestedClasses: TEXT_FIELD_OUTLINED,
})(TextField);
