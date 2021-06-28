import { gql } from "@apollo/client";
import Nav from "../Nav";
import MobileNav from "../Nav/MobileNav";

export default function Header({ logo, nav }) {
  return (
    <header>
      <a className="logo" href="#">
        <img src={logo.asset.url} alt={logo.asset.altText} />
      </a>
      <Nav nav={nav} />
      <MobileNav>
        <Nav nav={nav} />
      </MobileNav>
    </header>
  );
}

Header.query = gql`
  query Header {
    allNavigation(where: { name: { eq: "Header" } }) {
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
