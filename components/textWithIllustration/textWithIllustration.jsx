import { gql } from "@apollo/client";
import Image from 'next/image';

export default function TextWithIllustration({
  heading,
  subheading,
  excerpt,
  image,
}) {
  return (
    <section>
      <div>
        <h2>{heading}</h2>
        <p>{subheading}</p>
        <p>{excerpt}</p>
      </div>
      <Image
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
      altText
      asset {
        url
      }
    }
  }
`;
