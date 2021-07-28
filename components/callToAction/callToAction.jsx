import { gql } from "@apollo/client";
import PropTypes from "prop-types";
import "parse-prop-types";

export default function CallToAction({ heading, link }) {
  return (
    <section className="cta">
      <h2>{heading}</h2>
      <a href={link.url}>{link.text}</a>
    </section>
  );
}

CallToAction.propTypes = {
  heading: PropTypes.string.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

CallToAction.fragment = gql`
  fragment CallToAction on CallToAction {
    _key
    heading
    link {
      text
      url
    }
  }
`;
