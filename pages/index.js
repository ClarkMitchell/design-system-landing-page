import { getBlocks, getPropsForSlug } from "../utils";

export default function Home({ pageBuilder }) {
  const blocks = getBlocks();
  return (
    <main>
      {pageBuilder.map((block) => {
        const Block = blocks[block.__typename];
        return <Block {...block} key={block._key} />;
      })}
    </main>
  );
}

export async function getStaticProps() {
  const pageProps = await getPropsForSlug("/");

  return {
    props: {
      data: pageProps
    },
  };
}