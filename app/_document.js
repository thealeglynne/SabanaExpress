// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';
import "./globals.css"
export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lastica&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
