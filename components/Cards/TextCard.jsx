import { gql } from "@apollo/client";

export default function TextCard({ heading, content, link }) {
  return <><h2>{heading}</h2></>;
}

TextCard.fragment = gql`
  fragment TextCard on TextCard {
    _key
    heading
    content
    link {
      text
      url
    }
  }
`;
