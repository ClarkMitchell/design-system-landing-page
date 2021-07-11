/* eslint-disable @next/next/no-img-element */
import gql from "graphql-tag";
import Image from "next/image";
import Script from "next/script";
import { useContext } from "react";
import HeaderContext from "components/Header/HeaderContext";
import Header from "components/Header";

export default function Hero({ headline, image }) {
  const headerProps = useContext(HeaderContext);
  const fullHeightHero = !!headerProps;
  const imageProps = fullHeightHero
    ? { layout: "fill", objectFit: "cover" }
    : {
        layout: "responsive",
        height: image.asset.metadata.dimensions.height,
        width: image.asset.metadata.dimensions.width,
      };

  return (
    <>
      {fullHeightHero && (
        <Script src="/scripts/resize.js" strategy="beforeInteractive" />
      )}
      <section className={fullHeightHero ? "cover" : ""}>
        {fullHeightHero && <Header {...headerProps} inverted />}
        <Image {...imageProps} src={image.asset.url} alt={image.altText} />
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
    </>
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
        metadata {
          dimensions {
            width
            height
          }
        }
      }
    }
  }
`;
