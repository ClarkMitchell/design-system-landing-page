import { gql } from "@apollo/client";
import Image from "next/image";

export default function ImageCard({ name, image }) {
  return (
    <div className={name}>
      <Image
        className={name}
        src={image.asset.url}
        alt={image.alt}
        height="600"
        width="720"
        layout="responsive"
      />
    </div>
  );
}

ImageCard.fragment = gql`
  fragment ImageCard on ImageCard {
    _key
    name
    image {
      altText
      asset {
        url
      }
    }
  }
`;
