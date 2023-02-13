/** @jsxImportSource @emotion/react */
"use client";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { SerializedStyles } from "@emotion/react";
import {
  ThemeProps,
  useTheme,
} from "@/packages/core/theme/themeProvider/themeProvider";
import {
  OverridableMapType,
  OverridableStringUnion,
} from "@/packages/core/types/type";
import {
  generateButtonContainedPrimaryClassNames,
  RUI_BUTTON_CONTAINED_PRIMARY,
} from "./getButtonContainedPrimaryCss";
import getButtonContainedPrimaryCss from "./getButtonContainedPrimaryCss";
import ButtonContained from "../ButtonContained";

const ButtonContainedPrimary = forwardRef<
  HTMLButtonElement,
  OverallButtonBaseProps
>(function (props, ref) {
  const theme = useTheme() as any;
  const { children, ...rest } = props;
  const scopeButtonContainedClasses = generateButtonContainedPrimaryClassNames({
    background: "primary",
  });
  const scopeButtonContainedCSS = getButtonContainedPrimaryCss(theme, {
    background: "primary",
  });
  return (
    <ButtonContained
      scopeButtonBaseClasses={scopeButtonContainedClasses}
      scopeButtonContainedCSS={scopeButtonContainedCSS}
      ref={ref}
      {...rest}
    >
      {children}
    </ButtonContained>
  );
});

ButtonContainedPrimary.defaultProps = {
  size: "sm",
  fullWidth: false,
  disableElevation: false,
  type: "button",
};

export type OverallButtonBaseProps = OverridableMapType<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size">,
  ButtonBaseProps
>;

export interface ButtonPropsVariantOverrides {}
export interface ButtonPropsSizeOverrides {}
export interface ButtonPropsTextColorOverrides {}
export interface ButtonPropsBackgroundOverrides {}
export interface ButtonPropsOutlinedThemeOverrides {}
export interface ButtonPropsAnimationFrameOverrides {}

export type ButtonPropsVariant = OverridableStringUnion<
  "container" | "text" | "outlined",
  ButtonPropsVariantOverrides
>;

export type ButtonPropsSize = OverridableStringUnion<
  "sm" | "md" | "lg",
  ButtonPropsSizeOverrides
>;

export type ButtonPropsTextColor = OverridableStringUnion<
  "primary" | "secondary" | "ternary",
  ButtonPropsTextColorOverrides
>;

export type ButtonPropsBackground = OverridableStringUnion<
  "primary" | "secondary" | "ternary",
  ButtonPropsBackgroundOverrides
>;

export type ButtonPropsOutlinedTheme = OverridableStringUnion<
  "primary" | "secondary" | "ternary",
  ButtonPropsOutlinedThemeOverrides
>;

export type ButtonPropsAnimationFrame = OverridableStringUnion<
  "ripple" | "scale",
  ButtonPropsAnimationFrameOverrides
>;

export type ButtonBaseProps = {
  scopeButtonBaseClasses?: string;
  scopeButtonContainedCSS?: SerializedStyles;
  /**
   * The variant to use.
   * @default container
   */
  variant?: ButtonPropsVariant;
  /**
   * The size to use.
   * @default primary
   */
  size?: ButtonPropsSize;
  /**
   * the color to use for variant="text"
   * @default primary
   */
  color?: ButtonPropsTextColor;
  /**
   * the background to use for variant="container"
   * @default false
   */
  background?: ButtonPropsBackground;
  /**
   * The size to use.
   * @default sm
   */
  outlinedTheme?: ButtonPropsOutlinedTheme;
  /**
   * The size to use.
   * @default sm
   */
  fullWidth?: boolean;
  /**
   * the startIcon to add icon component
   * @default {}
   */
  startIcon?: ReactNode;
  /**
   * the endIcon to add icon component
   * @default {}
   */
  endIcon?: ReactNode;
  /**
   * The disable to disable button.
   * @default false
   */
  disabled?: boolean;
  /**
   * The visible to use that component should be visible
   * @default boolean
   */
  isVisible?: boolean;
  /**
   * The disableElevation to use that component should be
   *  disable box-shadow
   * @default boolean
   */
  disableElevation?: boolean;
  /**
   * The animation perform to use when user touch on button.
   * @default ripple
   */
  animationframe?: ButtonPropsAnimationFrame;
  /**
   * Children to use
   * @default {}
   */
  outerCSS?: SerializedStyles;
};

ButtonContainedPrimary.displayName = RUI_BUTTON_CONTAINED_PRIMARY;

export default ButtonContainedPrimary;
