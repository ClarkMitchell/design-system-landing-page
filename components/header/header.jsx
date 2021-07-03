import { gql } from "@apollo/client";
import Image from "next/image";
import Nav from "../Nav";
import MobileNav from "../Nav/MobileNav";

export default function Header({ logo, nav }) {
  return (
    <header>
      <a className="logo" href="#">
        <Image src={logo.asset.url} alt={logo.altText} layout="fill" />
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
          altText
          asset {
            url
          }
        }
        nav {
          text
          url
        }
      }
    }
  }
`;
