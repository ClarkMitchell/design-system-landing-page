import { getBlocks, getPropsForSlug } from "../utils";

export default function Home({ data, preview }) {
  const blocks = getBlocks();
  return (
    <main>
      {data.pageBuilder.map((block) => {
        const Block = blocks[block.__typename];
        return <Block {...block} key={block._key} />;
      })}
    </main>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageProps = await getPropsForSlug("/");

  return {
    props: {
      preview,
      data: pageProps,
    },
  };
}