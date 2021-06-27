import { getBlocks, getPaths, getPropsForSlug } from "../utils";

export default function Page({ data, preview }) {
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

export async function getStaticProps({ params, preview = false }) {
  const pageProps = await getPropsForSlug(params.slug);

  return {
    props: {
      preview,
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
