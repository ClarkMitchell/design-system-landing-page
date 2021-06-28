import { getBlocks, getPaths, getPropsForSlug } from "../utils";

export default function Page({ pageBuilder }) {
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

export async function getStaticProps({ params }) {
  const pageProps = await getPropsForSlug(params.slug);

  return {
    props: {
      data: pageProps,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getPaths();

  return {
    paths,
    fallback: false,
  };
}
