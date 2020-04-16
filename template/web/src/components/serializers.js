import React from "react";
import Figure from "./Figure";
import MainImage from "./MainImage";
import ReactPlayer from "react-player";
import InstagramEmbed from "react-instagram-embed";
import LatexRenderer from "./Latex";

const AuthorReference = ({ node }) => {
  if (node && node.author && node.author.name) {
    return <span>{node.author.name}</span>;
  }
  return <></>;
};

const serializers = {
  types: {
    authorReference: AuthorReference,
    mainImage: ({ node }) => <MainImage mainImage={node} />,
    videoEmbed: ({ node }) => <ReactPlayer className="mt-6 mb-6" url={node.url} controls />,
    instagram: ({ node }) => {
      if (!node.url) return null;
      return <InstagramEmbed url={node.url} className="container mx-auto mt-6 mb-6" />;
    },
    math: ({ node, isInline = false }) => <LatexRenderer isInline={isInline} latex={node.latex} />,
  },
};

export default serializers;
