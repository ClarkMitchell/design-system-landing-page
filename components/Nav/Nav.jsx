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
