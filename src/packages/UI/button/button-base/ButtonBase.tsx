"use client";
import getButtonBaseCss, {
  generateButtonBaseClassNames,
} from "./getButtonBaseCss";
import { forwardRef, ReactNode, useRef } from "react";
import ButtonRoot, { OverallButtonRootProps } from "../button-root/ButtonRoot";
import TouchRipple, { TouchRippleRefs } from "../TouchRipple/TouchRipple";
import { useTheme } from "@/packages/core/theme/themeProvider/themeProvider";
import {
  OverridableMapType,
  OverridableStringUnion,
} from "@/packages/core/types/type";

const ButtonBase = forwardRef<HTMLButtonElement, OverallButtonBaseProps>(
  function (props, ref) {
    const theme = useTheme() as any;
    const touchRippleRef = useRef<TouchRippleRefs | null>(null);
    const {
      onClick,
      size,
      disableElevation,
      nestedClasses,
      nestedCSS,
      fullWidth,
      outerCSS,
      children,
      startIcon,
      endIcon,
      ...rest
    } = props;

    const scopeButtonBaseClasses = generateButtonBaseClassNames({
      root: true,
      size: size,
      disableElevation,
      animationRipple: true,
      fullWidth,
    });

    const scopeButtonBaseCSS = getButtonBaseCss(theme, props);
    return (
      <ButtonRoot
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          touchRippleRef.current?.onCreateAnimation(e);
          onClick && onClick(e);
        }}
        nestedClasses={[nestedClasses, scopeButtonBaseClasses].join(" ")}
        nestedCSS={[scopeButtonBaseCSS, nestedCSS].join(" ")}
        ref={ref}
        {...rest}
      >
        {startIcon && <StartIcon content={startIcon} />}
        {children}
        {endIcon && <EndIcon content={endIcon} />}
        <TouchRipple theme={theme} ref={touchRippleRef} />
      </ButtonRoot>
    );
  }
);
export interface IconPropsType {
  content?: ReactNode;
}

const StartIcon = (props: IconPropsType & { startIconClasses?: string }) => {
  const { content } = props;
  return <div className="RuiButtonStartIcon">{content}</div>;
};

const EndIcon = (props: IconPropsType & { endIconClasses?: string }) => {
  const { content } = props;
  return <div className="RuiButtonEndIcon">{content}</div>;
};

ButtonBase.defaultProps = {
  size: "sm",
  fullWidth: false,
  disableElevation: false,
  type: "button",
};

export type OverallButtonBaseProps = OverridableMapType<
  OverallButtonRootProps,
  ButtonBaseProps
>;

export interface ButtonPropsSizeOverrides {}

export type ButtonPropsSize = OverridableStringUnion<
  "sm" | "md" | "lg",
  ButtonPropsSizeOverrides
>;

export type ButtonBaseProps = {
  /**
   * The size to use.
   * @default primary
   */
  size?: ButtonPropsSize;
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
   * The disableElevation to use that component should be
   *  disable box-shadow
   * @default boolean
   */
  disableElevation?: boolean;
};

ButtonBase.displayName = "ButtonBase";

export default ButtonBase;
