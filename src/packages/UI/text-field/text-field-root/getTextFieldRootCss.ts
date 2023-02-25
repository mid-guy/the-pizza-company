import { ThemeProps } from "@/packages/core/theme/themeProvider/themeProvider";
import { css, SerializedStyles } from "@emotion/react";
import { TextFieldRootProps } from "./TextFieldRoot";

export const RUI_TEXT_FIELD_ROOT = "RuiTextFieldRoot";

export const mergeNameTargetComponent = (chain: string): string => {
  return `${RUI_TEXT_FIELD_ROOT}${chain}`;
};

const getTextFieldRootCss = (
  theme: any,
  props: TextFieldRootProps
): SerializedStyles => css`
  &.${classNames.formControlRoot as string} {
    box-sizing: border-box;
    display: inline-flex;
    color: rgba(0, 0, 0, 0.87);
    &.${classNames.error as string } {
      &.${classNames.focused as string } {
        border-color: ${theme.palette.error.main};
      }
      border-color: ${theme.palette.error.main};
      > .${classNames.textFieldRoot as string} {
        color: ${theme.palette.error.main};
      }
      color: ${theme.palette.error.contrastText};
      &:hover {
        border-color: ${theme.palette.error.main};
      }
    }
    &.${classNames.fullWidth as string} {
      width: 100%;
    }
    &.${classNames.disabled as string} {
      pointer-events: none;
      > .${classNames.textFieldRoot as string}: {
        color: ${theme.palette.text.disabled};
      }
    }
    &.${classNames.textFieldRoot as string} {
      > input {
        flex: 1;
        background: inherit;
        border: none;
        outline: none;
        padding: 0;
      }
    }
    transition: all ${theme.transitions.duration.shortest}ms ease-in;
  }
  &.${classNames.size(props.size as string)} {
    ${sizes[props.size as NonNullable<
      keyof typeof sizes
     >](theme)}
  }
  ${props.nestedCSS}
  ${props.outerCSS}
`;

type ClassNamesType = { formControlRoot: string,
  textFieldRoot: string,
  focused: string,
  fullWidth: string
  disabled: string
  error: string
  size: (value: string) => string
 }

export const classNames: ClassNamesType = {
  formControlRoot: "RuiFormControlRoot",
  textFieldRoot: "RuiTextFieldRoot",
  focused: "RuiTextFieldFocused",
  fullWidth: "RuiTextFieldFullWidth",
  disabled: "RuiTextFieldDisabled",
  error: "RuiTextFieldError",
  size: (value: string): string => mergeNameTargetComponent(`Size${value.toUpperCase()}`),
};

export const sizes = {
  sm: (theme: ThemeProps) => `
    padding: ${theme.spacing(0.75)} ${theme.spacing(1.5)};
    font-size: 14px;
    height: 30px;
  `,
  md: (theme: ThemeProps) => `
    font-size: 16px;
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
    height: 36px;
  `,
  lg: (theme: ThemeProps) => `
    font-size: 16px;
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
    height: 42px;
  `,
};

export function getClasses(props: any) {
  let classes: string[] = [];
  Object.keys(props).forEach((key: string)=> {
    const currentValue = classNames[key as keyof ClassNamesType]
    if ( currentValue ) {
      if ( typeof currentValue === "function" ) {
        const method = currentValue as (value: string) => string
        classes.push(method(props[key]))
        return 
      }
      if ( props[key] ) {
        classes.push(currentValue as string)
      }
      return
    }
    return
  })
  return classes.join(" ")
}


export default getTextFieldRootCss;
