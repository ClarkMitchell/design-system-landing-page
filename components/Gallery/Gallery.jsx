import { gql } from "@apollo/client";
import Image from 'next/image';

export default function Gallery({ images }) {
  return (
    <div className="grid">
      {images.map(image => {
        <Image src={image.asset.url} alt={image.altText} key={image._key}/>
      })}
    </div>
  );
}

Gallery.fragment = gql`
  fragment Gallery on Gallery {
    _key
    images {
      ... on Img {
        _key
        altText
        asset {
          url
        }
      }
    }
  }
`;
