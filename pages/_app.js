import "../styles/reset.css";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header {...pageProps.data.header}></Header>
      <Component {...pageProps.data} />
      <Footer {...pageProps.data.footer}></Footer>
    </>
  );
}

export default MyApp;
