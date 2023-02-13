import { ThemeProps } from "@/packages/core/theme/themeProvider/themeProvider";
import capitalizeFirstLetter from "@/packages/core/utils/capitalizeFirstLetter";
import { css, SerializedStyles } from "@emotion/react";
import { ButtonPropsAnimationFrame, ButtonPropsSize } from "../button-base/ButtonBase";

export const RUI_BUTTON_ROOT = "RuiButtonRoot";

export const mergeNameTargetComponent = (chain: string): string => {
  return `${RUI_BUTTON_ROOT}${chain}`;
};

const getButtonRootCss = (theme: ThemeProps): SerializedStyles => css`
  &.${RUI_BUTTON_ROOT} {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    user-select: none;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-family: inherit;
    transition: ${theme.transitions.duration.standard}ms ease;
    box-sizing: border-box;
    &.${classNames.disabled} {
      color: ${theme.palette.text.disabled};
      pointer-events: none;
      box-shadow: none;
      background-color: ${theme.palette.action.disabledBackground};
    }
    > * {
      pointer-events: none;
    }
  }
`;

const classNames: { [key: string]: string | any } = {
  root: mergeNameTargetComponent("Root"),
  disabled: mergeNameTargetComponent("Disabled"),
  disableElevation: mergeNameTargetComponent("DisableElevation"),
  animationframe: (value: ButtonPropsAnimationFrame): string =>
    mergeNameTargetComponent(`Animationframe${capitalizeFirstLetter(value)}`),
};

export const generateButtonBaseClassNames = (props: {
  fullWidth?: boolean;
  disabled?: boolean;
  disableElevation?: boolean;
  visible?: boolean;
  invisible?: boolean;
}) => {
  const _props: { [key: string]: boolean | string } = props;
  return Object.keys(props)
    .reduce((prevClasses: any, key: any) => {
      if (_props[key]) {
        if (
          ( key === "size" ||
          key === "animationframe" ) &&  typeof classNames[key] === "function"
        ) {
          return [...prevClasses, classNames[key](_props[key])];
        }
        return [...prevClasses, classNames[key]];
      }
      return prevClasses;
    }, [])
    .join(" ");
};


export default getButtonRootCss;
