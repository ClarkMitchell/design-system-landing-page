import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

import Hero from "../components/hero";
import Services from "../components/services";
import TextWithIllustration from "../components/textWithIllustration";
import CallToAction from "../components/callToAction";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

export function getBlocks() {
  return {
    Hero,
    Services,
    TextWithIllustration,
    CallToAction,
  };
}

export async function getPropsForSlug(slug) {
  const GET_DATA = gql`
    query getPageBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        pageName
        slug {
          current
        }
        pageBuilder {
          __typename
          ...Hero
          ...Services
          ...TextWithIllustration
          ...CallToAction
        }
      }
    }
    ${Hero.fragment}
    ${Services.fragment}
    ${TextWithIllustration.fragment}
    ${CallToAction.fragment}
  `;

  const { data } = await client.query({
    query: GET_DATA,
    variables: { slug },
  });

  const [props] = data.allPage;

  return props;
}

export async function getPaths() {
  const GET_PATHS = gql`
    query getAllPageSlugs {
      allPage {
        _id
        pageName
        slug {
          current
        }
      }
    }
  `;

  const { data } = await client.query({ query: GET_PATHS });

  const paths = data.allPage.map(({ slug }) => {
    return {
      params: { slug: slug.current },
    };
  });

  return paths;
}
