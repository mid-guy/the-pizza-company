"use client";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import ThemeProvider from "@/packages/core/theme/themeProvider/themeProvider";
import createTheme from "@/packages/core/theme/createTheme";
import ButtonContainedPrimary from "@/packages/UI/button/button-contained/button-contained-primary/ButtonContainedPrimary";
import ButtonRoot from "@/packages/UI/button/button-root/ButtonRoot";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
const myCache = createCache({
  key: "the-pizza-company",
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const theme = createTheme();
  return (
    <CacheProvider value={myCache}>
      <ThemeProvider theme={theme}>
        <main className={styles.main}>
          <ButtonContainedPrimary>
            Button Contained Primary
          </ButtonContainedPrimary>
        </main>
      </ThemeProvider>
    </CacheProvider>
  );
}
