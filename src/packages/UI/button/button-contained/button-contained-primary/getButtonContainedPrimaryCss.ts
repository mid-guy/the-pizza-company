import { ThemeProps } from "@/packages/core/theme/themeProvider/themeProvider";
import capitalizeFirstLetter from "@/packages/core/utils/capitalizeFirstLetter";
import { css, SerializedStyles } from "@emotion/react";
import { RUI_BUTTON_CONTAINED } from "../getButtonContainedCss";

export const RUI_BUTTON_CONTAINED_PRIMARY = "RuiButtonContainedPrimary";

const mergeNameTargetComponent = (chain: string): string => {
  return `${RUI_BUTTON_CONTAINED}${chain}`;
};

export const generateButtonContainedPrimaryClassNames = (props: {
  background: "primary";
}) => {
  const _props: { [key: string]: boolean | string } = props;
  return Object.keys(props)
    .reduce((prevClasses: any, key: any) => {
      if (_props[key]) {
        if (
          key === "background"
        ) {
          return [...prevClasses, classNames[key](_props[key])];
        }
        return [...prevClasses, classNames[key]];
      }
      return prevClasses;
    }, [])
    .join(" ");
};

const classNames: { [key: string]: string | any } = {
  background: (value: "primary"): string =>
    value &&
    mergeNameTargetComponent(`Background${capitalizeFirstLetter(value)}`),
};

const getButtonContainedPrimaryCss = (
  theme: ThemeProps,
  props: any
): SerializedStyles => css`
  &.${classNames.background(props.background)} {
    ${theme.components.button.backgrounds[
      props.background as NonNullable<
        keyof typeof theme.components.button.backgrounds
      >
    ](theme)};
  }
`;

export default getButtonContainedPrimaryCss;
