import React from "react";
import MainImage from "./MainImage";
import ReactPlayer from "react-player";
import LatexRenderer from "./Latex";
import {Tweet} from "react-twitter-widgets";

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
    instagram: ({ node }) => null,
    latex: ({ node, isInline = false }) => <LatexRenderer isInline={isInline} latex={node.body} />,
    tweetEmbed: ({node}) => <Tweet tweetId={node.tweetId}/>,
    math: ({ node, isInline = false }) => <LatexRenderer isInline={isInline} latex={node.latex} />
  }
};

export default serializers;
