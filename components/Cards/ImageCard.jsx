import { gql } from "@apollo/client";

export default function ImageCard({ name, image }) {
  return <><h2>{name}</h2></>;
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
