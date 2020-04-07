import { Link } from "gatsby";
import React from "react";
import BlogPostPreview from "./blog-post-preview";

function BlogPostPreviewGrid({ nodes }) {
  return (
    <div className="flex flex-wrap -mx-2 overflow-hidden md:-mx-2 lg:-mx-2 xl:-mx-2">
      <div className="my-2 px-2 w-full overflow-hidden md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/4">
        <ul>
          {nodes &&
            nodes.map(node => (
              <li key={node.id}>
                <BlogPostPreview {...node} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default BlogPostPreviewGrid;
