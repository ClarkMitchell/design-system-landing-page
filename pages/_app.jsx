import PropTypes from "prop-types";
import Header from "components/Header";
import Footer from 'components/Footer';
import "styles/main.css";

export default function App({ Component, pageProps: { data } }) {
  return (
    <>
      <Header {...data.header}></Header>
      <Component {...data.component} />
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