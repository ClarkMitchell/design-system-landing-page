import PropTypes from "prop-types";

export default function Nav({ nav }) {
  return (
    <nav className="cluster">
      {nav.map((link) => (
        <a href={`/${link.url}`} key={link.text}>
          {link.text}
        </a>
      ))}
    </nav>
  );
}

Nav.propTypes = {
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
};
