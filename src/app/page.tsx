"use client";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import ThemeProvider from "@/packages/core/theme/themeProvider/themeProvider";
import createTheme from "@/packages/core/theme/createTheme";
import { useState } from "react";
import TextFieldOutlinedPrimary from "@/packages/UI/text-field/text-field-outlined/text-field-outlined-primary";
import TextFieldOutlinedSecondary from "@/packages/UI/text-field/text-field-outlined/text-field-outlined-secondary";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const theme = createTheme();
  const [state, setState] = useState<string>("");
  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
        {/* <ButtonContainedPrimary>
          Button Contained Primary
        </ButtonContainedPrimary> */}
        {/* <TextFieldOutlined /> */}
        <TextFieldOutlinedPrimary />
      </main>
    </ThemeProvider>
  );
}
