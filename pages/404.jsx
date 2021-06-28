import PropTypes from "prop-types";
import { getHeader, getFooter } from "../utils";

export default function Custom404({ message }) {
  return <h1>{message}</h1>;
}

export async function getStaticProps() {
  return {
    props: {
      data: {
        header: await getHeader(),
        component: { message: "404 | Page Not Found" },
        footer: await getFooter(),
      },
    },
  };
}

Custom404.propTypes = {
  message: PropTypes.string.isRequired,
};
