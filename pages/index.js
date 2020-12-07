import Head from "next/head";
import Banner from "../components/Banner";
import About from "../components/About";
import Cover from "../components/Cover";
import GlobalStyle from "../styles/globalStyles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <Banner />
      {/* <About /> */}
      <Cover />
    </>
  );
}
