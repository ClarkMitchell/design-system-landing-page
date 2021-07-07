import PropTypes from "prop-types";
import { createContext } from "react";
import Header from "components/Header";
import HeaderContext from "components/Header/HeaderContext";
import Footer from "components/Footer";
import "styles/main.css";

export default function App({ Component, pageProps: { data } }) {
  const headerNavInHero = data?.header?.inHero;

  return (
    <>
      {headerNavInHero ? (
        <HeaderContext.Provider value={data.header}>
          <Component {...data.component} />
        </HeaderContext.Provider>
      ) : (
        <>
          <Header {...data.header}></Header>
          <Component {...data.component} />
        </>
      )}
      <Footer {...data.footer}></Footer>
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
