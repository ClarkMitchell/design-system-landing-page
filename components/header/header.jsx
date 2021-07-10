import { gql } from "@apollo/client";
import MobileNav from "components/MobileNav";
import Image from "next/image";
import React from "react";
import Nav from "../Nav";

export default function Header({ logo, nav = [], inverted = false }) {
  return (
    <header className={`cluster${inverted ? " inverted" : ""}`}>
      {logo?.asset?.url && (
        <a className="logo" href="#">
          <Image
            src={logo.asset.url}
            alt={logo.altText}
            height="30"
            width="170"
          />
        </a>
      )}
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
        inHero
        nav {
          text
          url
        }
      }
    }
  }
`;
