import { gql } from "@apollo/client";
import Image from 'next/image';

export default function ImageTextCard({ heading, content, image }) {
return (
  <Image
    src={image.asset.url}
    alt={image.alt}
    height="600"
    width="720"
    layout="responsive"
  />
);
}

ImageTextCard.fragment = gql`
  fragment ImageTextCard on ImageTextCard {
    _key
    heading
    content
    image {
      altText
      asset {
        url
      }
    }
  }
`;
