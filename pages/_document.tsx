import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta name="description" content="Nextjs Boilerplate" />
        <link rel="icon" href="./sigma.png" />       
      </Head>
      <body className='bg-gray-200'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
