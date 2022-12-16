import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Footy Store</title>
        <meta name="description" content="Footy Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-red-500'>
        This is Arush's Footy Store
      </div>

    </>
  )
}
