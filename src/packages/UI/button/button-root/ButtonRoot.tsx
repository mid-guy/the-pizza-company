/** @jsxImportSource @emotion/react */
"use client";
import { useTheme } from "@/packages/core/theme/themeProvider/themeProvider";
import { SerializedStyles } from "@emotion/react";
import { forwardRef } from "react";
import { OverallButtonBaseProps } from "../button-base/ButtonBase";
import getButtonRootCss, {
  mergeNameTargetComponent,
  RUI_BUTTON_ROOT,
} from "./getButtonRootCss";

const ButtonRoot = forwardRef<
  HTMLButtonElement,
  OverallButtonBaseProps & {
    scopeButtonBaseClasses?: string;
    scopeButtonBaseCSS?: SerializedStyles;
  }
>(function (props, ref) {
  const theme = useTheme();
  const {
    className,
    scopeButtonBaseClasses,
    scopeButtonBaseCSS,
    outerCSS,
    children,
    ...more
  } = props;
  const scopeButtonRootCSS = getButtonRootCss(theme as any);
  return (
    <button
      ref={ref}
      className={[scopeButtonBaseClasses, RUI_BUTTON_ROOT, , className].join(
        " "
      )}
      data-testid={mergeNameTargetComponent("Test")}
      css={[scopeButtonRootCSS, scopeButtonBaseCSS, outerCSS]}
      {...more}
    >
      {children}
    </button>
  );
});

ButtonRoot.displayName = "ButtonRoot";

export default ButtonRoot;
