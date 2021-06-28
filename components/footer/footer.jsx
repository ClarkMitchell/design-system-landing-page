import { gql } from "@apollo/client";
import Nav from "../Nav";

export default function Footer({ logo, nav }) {
  return (
    <footer>
      <a className="logo" href="#">
        <img src={logo?.asset?.url} alt={logo?.asset?.altText} />
      </a>
      <Nav nav={nav} />
    </footer>
  );
}

Footer.query = gql`
  query Footer {
    allNavigation(where: { name: { eq: "Footer" } }) {
      ... on Navigation {
        logo {
          asset {
            url
            altText
          }
        }
        nav
      }
    }
  }
`;
