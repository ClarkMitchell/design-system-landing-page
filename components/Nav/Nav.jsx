import PropTypes from "prop-types";

export default function Nav({ nav }) {
  return (
    <nav>
      <ul>
        {nav.map((link) => (
          <li key={link}>
            <a className="nav-link" href={`/${link}`}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.string).isRequired
};
