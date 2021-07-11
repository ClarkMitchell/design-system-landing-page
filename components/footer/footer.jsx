import { gql } from "@apollo/client";
import Link from "next/link";
import Nav from "../Nav";
import Logo from "components/Logo";
import Socials from "components/Socials";

export default function Footer({ logo, nav }) {
  return (
    <footer className="stack">
      <section className="center">
        <Link href="#">
          <a className="logo-link">
            <Logo height="30" width="170" dark />
          </a>
        </Link>
        <Nav nav={nav} />
        <Socials />
      </section>
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
