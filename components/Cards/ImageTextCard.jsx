import { gql } from "@apollo/client";

export default function ImageTextCard({ heading, content, image }) {
  return <><h2>{heading}</h2></>;
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
