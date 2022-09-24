import { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

const Document = () => {
  return (
    <Html className='bg-slate-900 p-0 m-0'>
      <Head>
      </Head>
      <body className='hola'>
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>

  )
}

export default Document;
