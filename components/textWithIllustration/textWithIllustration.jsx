import { gql } from "@apollo/client";

export default function TextWithIllustration({
  heading,
  subheading,
  excerpt,
  image,
}) {
  return (
    <section className="illustration">
      <div className="illustration__text">
        <h2>{heading}</h2>
        <p>{subheading}</p>
        <p>{excerpt}</p>
      </div>
      <img
        className="illustration__image"
        src={image.asset.url}
        alt={image.asset.altText}
      />
    </section>
  );
}

TextWithIllustration.fragment = gql`
  fragment TextWithIllustration on TextWithIllustration {
    _key
    heading
    subheading
    excerpt
    image {
      asset {
        url
        altText
      }
    }
  }
`;
