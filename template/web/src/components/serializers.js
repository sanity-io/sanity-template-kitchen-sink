import React from "react";
import Figure from "./Figure";
import ReactPlayer from "react-player";
import InstagramEmbed from "react-instagram-embed";
import LatexRenderer from "./Latex";

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    videoEmbed: ({ node }) => <ReactPlayer className="mt-6 mb-6" url={node.url} controls />,
    instagram: ({ node }) => {
      if (!node.url) return null;
      return <InstagramEmbed url={node.url} className="container mx-auto mt-6 mb-6" />;
    },
    math: ({ node, isInline = false }) => <LatexRenderer isInline={isInline} latex={node.latex} />
  }
};

export default serializers;
