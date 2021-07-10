import PropTypes from "prop-types";
import { createContext } from "react";
import Header from "components/Header";
import HeaderContext from "components/Header/HeaderContext";
import Footer from "components/Footer";
import "styles/main.css";

export default function App({ Component, pageProps: { data } }) {
  const navInHero = data?.header?.inHero;

  return (
    <>
      {navInHero ? (
        <HeaderContext.Provider value={data.header}>
          <Component {...data.component} />
        </HeaderContext.Provider>
      ) : (
        <>
          {!navInHero && <Header {...data.header} />}
          <Component {...data.component} />
        </>
      )}
      <Footer {...data.footer} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({
    data: PropTypes.shape({
      header: PropTypes.object,
      component: PropTypes.object,
      footer: PropTypes.object,
    }),
  }),
};
