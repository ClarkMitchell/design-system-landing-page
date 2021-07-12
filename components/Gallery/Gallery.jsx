import { gql } from "@apollo/client";
import Image from "next/image";

export default function Gallery({ name, images }) {
  console.log({ images });
  return (
    <section className="gallery">
      {images.map((image) => (
        <Image
          src={image.asset.url}
          alt={image.altText}
          height={image.asset.metadata.dimensions.height}
          width={image.asset.metadata.dimensions.width}
          key={image._key}
        />
      ))}
    </section>
  );
}

Gallery.fragment = gql`
  fragment Gallery on Gallery {
    _key
    name
    images {
      ... on Img {
        _key
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
  }
`;
