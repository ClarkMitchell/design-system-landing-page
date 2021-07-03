import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

import Header from 'components/Header';
import Footer from 'components/Footer';
import Hero from "components/Hero";
import Services from "components/Services";
import TextWithIllustration from "components/TextWithIllustration";
import CallToAction from "components/CallToAction";
import Grid from 'components/Grid';
import Testimonials from "components/Testimonials";
import Gallery from "components/Gallery";
import { ImageCard, TextCard, ImageTextCard } from "components/Cards";

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

export function getPageBlockMap() {
  return {
    Hero,
    Services,
    TextWithIllustration,
    CallToAction,
    Grid,
    Testimonials,
    Gallery,
  };
}

export function getCardMap() {
  return {
    ImageCard,
    TextCard,
    ImageTextCard,
  }
}

export async function getHeader() {
  const query = Header.query;
  const { data } = await client.query({ query });
  const [header] = data.allNavigation;

  return header;
}

export async function getFooter() {
  const query = Footer.query;
  const { data } = await client.query({ query });
  const [footer] = data.allNavigation;

  return footer;
}

export async function getNavigation() {
  return {
    header: await getHeader(),
    footer: await getFooter()
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
        pageBlocks {
          __typename
          ...Hero
          ...Services
          ...TextWithIllustration
          ...CallToAction
          ...Grid
          ...Testimonials
          ...Gallery
        }
      }
    }
    ${Hero.fragment}
    ${Services.fragment}
    ${TextWithIllustration.fragment}
    ${CallToAction.fragment}
    ${Grid.fragment}
    ${Testimonials.fragment}
    ${Gallery.fragment}
  `;

  const { data } = await client.query({
    query: GET_DATA,
    variables: { slug },
  });

  const [component] = data.allPage;

  return {
    component,
    ... (await getNavigation())
  }
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

  return data.allPage.map(({ slug }) => {
    return {
      params: { slug: slug.current },
    };
  });
}
