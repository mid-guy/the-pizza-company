/** @jsxImportSource @emotion/react */
"use client";
import { useTheme } from "@/packages/core/theme/themeProvider/themeProvider";
import { OverridableMapType } from "@/packages/core/types/type";
import { ButtonHTMLAttributes, forwardRef } from "react";
import getButtonRootCss, {
  mergeNameTargetComponent,
  RUI_BUTTON_ROOT,
} from "./getButtonRootCss";

const ButtonRoot = forwardRef<HTMLButtonElement, OverallButtonRootProps>(
  function (props, ref) {
    const theme = useTheme();
    const { nestedClasses, outerCSS, nestedCSS, children, ...more } = props;
    const scopeButtonRootCSS = getButtonRootCss(theme as any, {
      nestedCSS: nestedCSS,
      outerCSS: outerCSS,
    });
    return (
      <button
        ref={ref}
        className={[nestedClasses, RUI_BUTTON_ROOT].join(" ")}
        data-testid={mergeNameTargetComponent("Test")}
        css={scopeButtonRootCSS}
        {...more}
      >
        {children}
      </button>
    );
  }
);

export type OverallButtonRootProps = OverridableMapType<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size">,
  ButtonRootProps
>;

export type ButtonRootProps = {
  nestedClasses?: string;
  nestedCSS?: string;
  outerCSS?: string;
};

ButtonRoot.displayName = "ButtonRoot";

export default ButtonRoot;
