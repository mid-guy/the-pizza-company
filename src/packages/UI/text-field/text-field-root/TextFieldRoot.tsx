/** @jsxImportSource @emotion/react */
import { useTheme } from "@/packages/core/theme/themeProvider/themeProvider";
import {
  OverridableMapType,
  OverridableStringUnion,
} from "@/packages/core/types/type";
import { forwardRef, InputHTMLAttributes } from "react";
import getTextFieldRootCss, { getClasses } from "./getTextFieldRootCss";

const TextFieldRoot = forwardRef<HTMLInputElement, OverallTextFieldRootProps>(
  function (props, ref) {
    const {
      size = "md",
      error,
      disabled,
      isFocused,
      fullWidth,
      nestedCSS,
      outerCSS,
      nestedClasses,
      ...rest
    } = props;
    const theme = useTheme();
    const scopeTextFieldRootCss = getTextFieldRootCss(theme, {
      size: size,
      error: error,
      disabled: disabled,
      nestedCSS: nestedCSS,
      outerCSS: outerCSS,
    });
    const scopeClasses = getClasses({
      formControlRoot: true,
      textFieldRoot: true,
      focused: isFocused,
      fullWidth: fullWidth,
      disabled: disabled,
      error: error,
      size: size,
    });
    return (
      <div
        css={scopeTextFieldRootCss}
        className={[scopeClasses, nestedClasses].join(" ")}
      >
        <input ref={ref} disabled={disabled} {...rest} />
      </div>
    );
  }
);

TextFieldRoot.defaultProps = {
  size: "md",
  error: false,
  isFocused: false,
  fullWidth: false,
  disabled: false,
};

export interface TextFieldPropsSizeOverrides {}

export type OverallTextFieldRootProps = OverridableMapType<
  Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "disabled">,
  TextFieldRootProps
>;

export type TextFieldPropsSize = OverridableStringUnion<
  "sm" | "md" | "lg",
  TextFieldPropsSizeOverrides
>;

export type TextFieldRootProps = {
  disabled?: boolean;
  fullWidth?: boolean;
  size?: TextFieldPropsSize;
  error?: boolean;
  isFocused?: boolean;
  nestedClasses?: string;
  nestedCSS?: string;
  outerCSS?: string;
};

TextFieldRoot.displayName = "TextFieldRoot";

export default TextFieldRoot;
