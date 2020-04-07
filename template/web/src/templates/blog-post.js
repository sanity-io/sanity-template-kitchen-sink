import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import BlogPost from "../components/blog-post";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { toPlainText } from "../lib/helpers";
import Errors from "../components/errors";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`;

const BlogPostTemplate = props => {
  const { data, errors } = props;
  const post = data && data.post;
  if (errors) {
    return <Errors errors={errors} />;
  }
  return (
    <Layout navMenuItems={[]} textWhite={false}>
      <SEO
        title={post.title}
        image={post.mainImage}
        description={toPlainText(post._rawExcerpt)}
        bodyAttr={{
          class: "bg-white font-sans leading-normal tracking-normal"
        }}
      />

      {post && <BlogPost {...post} />}
    </Layout>
  );
};

export default BlogPostTemplate;
