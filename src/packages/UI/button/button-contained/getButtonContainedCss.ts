import { ThemeProps } from "@/packages/core/theme/themeProvider/themeProvider";
import { css, SerializedStyles } from "@emotion/react";

export const RUI_BUTTON_CONTAINED = "RuiButtonContained";

const mergeNameTargetComponent = (chain: string): string => {
  return `${RUI_BUTTON_CONTAINED}${chain}`;
};

export const generateButtonContainedPrimaryClassNames = (props: {
  root: boolean;
}) => {
  const _props: { [key: string]: boolean | string } = props;
  return Object.keys(props)
    .reduce((prevClasses: any, key: any) => {
      if (_props[key]) {
        if (
          key === "size"
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
};

const getButtonContainedCss = (
  theme: ThemeProps,
  props: any
): SerializedStyles => css`
  &.${classNames.root} {
    min-width: 64px;
  }
`;

export default getButtonContainedCss;
