import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Design maestro by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0e0f11" />
        <meta name="application-name" content="Design maestro" />
        <meta name="apple-mobile-web-app-title" content="Design maestro mobile" />
        <meta name="msapplication-starturl" content="/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}