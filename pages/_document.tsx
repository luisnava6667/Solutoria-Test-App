import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Solutoria Test" />
        <link rel="icon" href="/icon.png" />
        <meta name="author" content="Luis Rodolfo Navarro" />
      </Head>
      <body className='bg-gray-200'>
        <title>Solutoria Test</title>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
