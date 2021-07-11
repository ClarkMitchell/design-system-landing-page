import { gql } from "@apollo/client";
import Logo from "components/Logo";
import MobileNav from "components/MobileNav";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "../Nav";

export default function Header({ nav = [], inverted = false }) {
  return (
    <header className={`cluster${inverted ? " inverted" : ""}`}>
      <Link href="#">
        <a className="logo-link">
          <Logo height="30" width="170" />
        </a>
      </Link>
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
        inHero
        nav {
          text
          url
        }
      }
    }
  }
`;
