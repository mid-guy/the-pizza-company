import { forwardRef, ReactNode } from "react";
import { StylesOrCreatorType } from "../../types/type";
import makeStyles from "../makeStyles/makeStyles";

const withStyles = function (
  stylesOrCreator: StylesOrCreatorType,
  prefixProps?: any
) {
  return function <T>(Component: React.ComponentType<T>) {
    const WithStyles = forwardRef(function WithStyles<
      P extends {
        children?: ReactNode;
        nestedCSS?: string;
        nestedClasses?: string;
      } & T
    >(props: P, ref: React.Ref<HTMLElement>) {
      if (process.env.NODE_ENV !== "production") {
        if (Component === undefined) {
          throw new Error(
            [
              "You are calling withStyles(styles)(Component) with an undefined component.",
              "You may have forgotten to import it.",
            ].join("\n")
          );
        }
      }
      const useStyles = makeStyles(stylesOrCreator);
      const outerCSS = useStyles() as string;
      const { nestedClasses: nestedClassesPrefixProps, ...restPrefixProps } =
        prefixProps;
      return (
        <Component
          {...restPrefixProps}
          {...props}
          nestedClasses={[nestedClassesPrefixProps, props?.nestedClasses].join(
            " "
          )}
          nestedCSS={[outerCSS, props?.nestedCSS].join(" ")}
          ref={ref}
        />
      );
    });
    return WithStyles;
  };
};
export default withStyles;
