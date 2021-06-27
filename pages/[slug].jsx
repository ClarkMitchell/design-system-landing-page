import { gql } from "@apollo/client";
import { client } from "./_app";
import Hero from "../components/hero";
import Services from "../components/services";
import TextWithIllustration from "../components/textWithIllustration";
import CallToAction from "../components/callToAction";

const blocks = {
  Hero,
  Services,
  TextWithIllustration,
  CallToAction,
};

export default function Page({ data, preview }) {
  return (
    <main>
      {data.pageBuilder.map((block) => {
        const Block = blocks[block.__typename];
        return <Block {...block} key={block._key} />;
      })}
    </main>
  );
}

export async function getStaticProps({ params, preview = false }) {
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
    variables: { slug: params.slug },
  });
  const [pageProps] = data.allPage;

  return {
    props: {
      preview,
      data: pageProps,
    },
  };
}

export async function getStaticPaths() {
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

  return {
    paths,
    fallback: false,
  };
}
