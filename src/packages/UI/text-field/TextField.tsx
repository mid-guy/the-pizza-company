import { useState } from "react";
import TextFieldRoot from "./text-field-root";

export default function TextField(props: any) {
  const { onFocus, onBlur, ...rest } = props;
  const [isFocused, setFocused] = useState<boolean>(false);
  function onFocusInput(onFocus?: Function) {
    setFocused(true);
    onFocus && onFocus();
  }
  function onBlurInput(onBlur?: Function) {
    setFocused(false);
    onBlur && onBlur();
  }
  return (
    <TextFieldRoot
      isFocused={isFocused}
      onFocus={() => onFocusInput()}
      onBlur={() => onBlurInput()}
      {...rest}
    />
  );
}
