import { gql } from "@apollo/client";
import Image from 'next/image';
import Nav from "../Nav";

export default function Footer({ logo, nav }) {
  return (
    <footer>
      <a className="logo" href="#">
        <Image src={logo.asset.url} alt={logo.altText} layout="fill" />
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
