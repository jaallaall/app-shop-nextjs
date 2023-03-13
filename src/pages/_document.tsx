import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head />
      <body>
        <Main />
        <div id="overlay" />
        <div id="sidebar" />
        <NextScript />
      </body>
    </Html>
  );
}
