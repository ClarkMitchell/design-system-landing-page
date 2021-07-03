import { gql } from "@apollo/client";
import Testimonial from "./Testimonial";

export default function Testimonials({ heading, testimonials }) {
  return (
    <section>
      <h2>{heading}</h2>
      <ul>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial._key} {...testimonial} />
        ))}
      </ul>
    </section>
  );
}

Testimonials.fragment = gql`
  fragment Testimonials on Testimonials {
    _key
    heading
    testimonials {
      ...Testimonial
    }
  }
  ${Testimonial.fragment}
`;
