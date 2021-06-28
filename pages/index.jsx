import PropTypes from "prop-types";
import { getPageBlockMap, getPropsForSlug } from "../utils";
import BlockBuilder from "../components/BlockBuilder";

export default function Home({ pageBlocks }) {
  const blockMap = getPageBlockMap();
  return (
    <main>
      <BlockBuilder blockMap={blockMap} blocks={pageBlocks} />
    </main>
  );
}

export async function getStaticProps() {
  const pageProps = await getPropsForSlug("home");

  return {
    props: {
      data: pageProps,
    },
  };
}

Home.propTypes = {
  pageBlocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
