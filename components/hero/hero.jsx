/* eslint-disable @next/next/no-img-element */
import gql from "graphql-tag";
import Image from "next/image";
import { useContext } from 'react';
import HeaderContext from "components/Header/HeaderContext";
import Header from "components/Header";

export default function Hero({ headline, image }) {
  const headerProps = useContext(HeaderContext)

  return (
    <section className="cover">
      <Header {...headerProps}></Header>
      <Image
        src={image.asset.url}
        alt={image.altText}
        layout="fill"
        objectFit="cover"
      />
      <h1>{headline}</h1>
      <div className="center">
        <Image
          src="/images/icon-arrow-down.svg"
          width="30"
          height="108"
          layout="fixed"
          alt="down arrow"
        />
      </div>
    </section>
  );
}

Hero.fragment = gql`
  fragment Hero on Hero {
    _key
    headline
    image {
      altText
      asset {
        url
      }
    }
  }
`;
