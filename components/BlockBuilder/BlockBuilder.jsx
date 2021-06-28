import PropTypes from "prop-types";

export default function BlockBuilder({ blockMap, blocks }) {
  return (
    <>
      {blocks.map((block) => {
        const Block = blockMap[block.__typename];
        return <Block {...block} key={block._key} />;
      })}
    </>
  );
}

BlockBuilder.propTypes = {
  blockMap: PropTypes.objectOf(PropTypes.elementType).isRequired,
  blocks: PropTypes.arrayOf(PropTypes.object).isRequired
};
