import { gql } from "@apollo/client";
import Image from "next/image";
import React from "react";
import Nav from "../Nav";

export default function Header({ logo, nav }) {
  return (
    <header className="cluster">
      <a className="logo" href="#">
        <Image
          src={logo.asset.url}
          alt={logo.altText}
          height="30"
          width="170"
        />
      </a>
      <Nav nav={nav} />
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
