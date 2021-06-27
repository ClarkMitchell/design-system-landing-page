import { gql } from "@apollo/client";

export default function CallToAction({ heading, linkText, url }) {
  return (
    <section className="cta">
      <h2>{heading}</h2>
      <a href={url}>{linkText}</a>
    </section>
  );
}

CallToAction.fragment = gql`
  fragment CallToAction on CallToAction {
    _key
    heading
    linkText
    url
  }
`;
