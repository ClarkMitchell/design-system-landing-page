import PropTypes from "prop-types";
import { getHeader, getFooter } from "../utils";

export default function Custom500({ message }) {
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

Custom500.propTypes = {
  message: PropTypes.string.isRequired,
};
