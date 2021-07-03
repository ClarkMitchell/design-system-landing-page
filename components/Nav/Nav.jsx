import PropTypes from "prop-types";

export default function Nav({ nav }) {
  return (
    <nav>
      <ul>
        {nav.map((link) => (
          <li key={link.text}>
            <a href={`/${link.url}`}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  })).isRequired
};
