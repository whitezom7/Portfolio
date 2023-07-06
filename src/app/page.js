//import Image from 'next/image'
import About from "../components/about";
import Head from 'next/head'
import MostPlayed from "../components/steam"

export default function Home() {
  return (
    <>
    <Head>
    <meta name="viewport" content="viewport-fit=cover" />
  </Head>
    <About/>
    <MostPlayed/>
   </> 
    )
}
