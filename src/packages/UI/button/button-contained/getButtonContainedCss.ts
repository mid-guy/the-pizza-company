import { ThemeProps } from "@/packages/core/theme/themeProvider/themeProvider";
import capitalizeFirstLetter from "@/packages/core/utils/capitalizeFirstLetter";
import { css, SerializedStyles } from "@emotion/react";

export const RUI_BUTTON_CONTAINED = "RuiButtonContained";

const mergeNameTargetComponent = (chain: string): string => {
  return `${RUI_BUTTON_CONTAINED}${chain}`;
};

export const generateButtonContainedClassNames = (props: {
  variant: "container"
}) => {
  const _props: { [key: string]: boolean | string } = props;
  return Object.keys(props)
    .reduce((prevClasses: any, key: any) => {
      if (_props[key]) {
        if (
          key === "container"
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
  root: mergeNameTargetComponent("Root"),
  variant: (value: any): string =>
    value && mergeNameTargetComponent(capitalizeFirstLetter(value)),
};

const getButtonContainedCss = (
  theme: ThemeProps,
  props: any
): SerializedStyles => css`
  &.${classNames.variant(props.variant)} { 
    ${theme.components.button.variants[
      props.variant as NonNullable<
        keyof typeof theme.components.button.variants
      >
    ](theme)};
  }
`;

export default getButtonContainedCss;
