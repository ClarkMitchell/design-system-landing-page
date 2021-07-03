/* eslint-disable @next/next/no-img-element */
import gql from "graphql-tag";

export default function Hero({ headline, subheadline, image }) {
  return (
    <section>
      <div>
        <img
          src={image.asset.url}
          alt={image.altText}
        ></img>
        <div>
          <hr />
          <h1>{headline}</h1>
          {subheadline && <p>{subheadline}</p>}
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
      altText
      asset {
        url
      }
    }
  }
`;
