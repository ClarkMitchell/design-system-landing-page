/* eslint-disable @next/next/no-img-element */
import { gql } from "@apollo/client";

export default function Testimonial({ name, position, quote, image }) {
  return (
    <li>
      <section>
        <img src={image.asset.url} alt={image.altText} />
        <h3>{name}</h3>
        <h4>{position}</h4>
        <p>{quote}</p>
      </section>
    </li>
  );
}

Testimonial.fragment = gql`
  fragment Testimonial on Testimonial {
    _key
    name
    position
    quote
    image {
      altText
      asset {
        url
      }
    }
  }
`;
