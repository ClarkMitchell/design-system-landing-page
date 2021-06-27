/* eslint-disable @next/next/no-img-element */
import gql from "graphql-tag";
import Image from "next/image";
import "./hero.scoped.css";

export default function Hero({ headline, subheadline, image }) {
  return (
    <section className="hero full-bleed">
      <div className="hero__container">
        <img
          className="hero__image"
          src={image.asset.url}
          alt={image.asset.altText}
        ></img>
        <div className="hero__text">
          <hr />
          <h1>{headline}</h1>
          <p>{subheadline}</p>
          <div>
            <a className="plans" href="#">
              View Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.fragment = gql`
  fragment Hero on Hero {
    _key
    headline
    subheadline
    image {
      asset {
        url
        altText
      }
    }
  }
`;
