import Head from "next/head";
import Banner from "../components/Banner";
import About from "../components/About";
import Cover from "../components/Cover";
import MapContainer from "../components/MapContainer";
import CoverDown from "../components/CoverDown";
import Offer from "../components/Offer";
import Reasons from "../components/Reasons";
import Footer from "../components/Footer";
import GlobalStyle from "../styles/globalStyles";
import { NextSeo } from 'next-seo';


export default function Home() {
  return (
    <>
        <NextSeo
      title="Melodrom"
      description="Melodrom - muzička radionica klavira, solfeđa, kao i rada sa pevačkim društvima."
      canonical="https://www.melodrom.rs/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: '/preview.png',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: '/preview.png',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
        ],
        site_name: 'Melodrom',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
      <Head>
        <title>Мелодром - Радионица клавира и солфеђа</title>
        <link rel="icon" href="/piano.png" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
         <meta property="og:title" content="Melodrom" key="title" />
        <meta property="og:image" content="/cover-min.jpg" />
      </Head>
      <GlobalStyle />
      <Banner />
      <About />
      <Cover />
      <Reasons />
      <Offer />
      <CoverDown />
      <MapContainer />
      <Footer />
    </>
  );
}
