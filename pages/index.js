import Head from "next/head";
import Banner from "../components/Banner";
import About from "../components/About";
import Cover from "../components/Cover";
import MapContainer from "../components/MapContainer";
import Reasons from "../components/Reasons";
import Footer from "../components/Footer";
import GlobalStyle from "../styles/globalStyles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Мелодром - Школа клавира и солфеђа</title>
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
      </Head>
      <GlobalStyle />

      <Banner />
      <About />
      <Cover />
      <Reasons />
      <MapContainer />
      <Footer />
    </>
  );
}
