import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

export default ({ node }) => {
  if (!node || !node.asset || !node.asset._id) {
    return null;
  }
  const imageDate = getGatsbyImageData(node, { maxWidth: 675 }, clientConfig.sanity);
  return (
    <figure>
      <GatsbyImage image={imageDate} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  );
};
