import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { mapEdgesToNodes } from "../lib/helpers";
/*
import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Container from "../components/container";
*/
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../client-config";
import PortableText from "../components/portableText";
import Errors from "../components/errors";
import { imageUrlFor } from "../lib/image-url";
import { buildImageObj } from "../lib/helpers";

export const query = graphql`
  query BlogPageQuery {
    cover: file(relativePath: { eq: "cover.jpg" }) {
      childImageSharp {
        fixed(width: 2048) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, isPublished: { eq: true } }
    ) {
      edges {
        node {
          id
          categories {
            title
          }
          publishedAt
          mainImage {
            ...SanityImage
          }
          title
          _rawExcerpt
          slug {
            current
          }
          authors {
            author {
              name
              image {
                ...SanityImage
              }
            }
          }
        }
      }
    }
  }
`;

const blogNodeToPresentation = node => {
  return {
    title: node.title,
    excerpt: node._rawExcerpt,
    slug: node.slug.current,
    mainImage: node.mainImage,
    authorImageFluid:
      node.authors &&
      node.authors.length &&
      getFluidGatsbyImage(
        node.authors[0].author.image.asset,
        { maxWidth: 100 },
        clientConfig.sanity
      ),
    authorName: node.authors && node.authors.length && node.authors[0].author.name
  };
};

const LeadBlogPost = ({ title, slug, mainImage, excerpt, authorImageFluid, authorName }) => {
  return (
    <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
      <Link to={`/blog/${slug}`} className="flex flex-wrap no-underline hover:no-underline">
        <div className="w-full md:w-2/3 rounded-t">
          {mainImage && mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit("crop")
                .auto("format")
                .url()}
              alt={mainImage.alt}
            />
          )}
        </div>

        <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <div className="w-full font-bold text-xl text-gray-900 px-6 py-2">{title}</div>
            <p className="text-gray-800 font-serif text-base px-6 mb-5">
              <PortableText blocks={excerpt} />
            </p>
          </div>

          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div className="flex items-center">
              {authorImageFluid ? (
                <Img
                  className="w-8 h-8 rounded-full mr-4 avatar"
                  data-tippy-content="Author Name"
                  fixed={authorImageFluid}
                  alt="Avatar of Author"
                ></Img>
              ) : (
                <span />
              )}
              <p className="text-gray-600 text-xs md:text-sm">{authorName}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const BlogRow = props =>
  props.posts.map((p, i) => <BlogBox key={i} {...p} size={props.posts.length} />);

const BlogBox = ({ title, size, slug, mainImage, authorImageFluid, authorName, excerpt }) => (
  <div className={`w-full md:w-1/${size} p-6 flex flex-col flex-grow flex-shrink`}>
    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
      <Link to={`blog/${slug}`} className="flex flex-wrap no-underline hover:no-underline">
        {mainImage && mainImage.asset && (
          <img
            className="h-full w-full rounded-t pb-6"
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />
        )}
        <div className="w-full font-bold text-xl text-gray-900 px-6 py-2">{title}</div>
        <p className="text-gray-800 font-serif text-base px-6 mb-5">
          <PortableText blocks={excerpt} />
        </p>
      </Link>
    </div>
    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
      <div className="flex items-center">
        {authorImageFluid && (
          <Img
            className="w-8 h-8 rounded-full mr-4 avatar"
            data-tippy-content="Author Name"
            fluid={authorImageFluid}
            alt="Avatar of Author"
          ></Img>
        )}
        <p className="text-gray-600 text-xs md:text-sm">{authorName}</p>
      </div>
    </div>
  </div>
);

const BlogPage = props => {
  const { data, errors } = props;

  if (errors) {
    return <Errors errors={errors} />;
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts).map(blogNodeToPresentation);

  let headerBackgroundStyle = {};
  if (data.cover) {
    const backgroundImageUrl = data.cover.childImageSharp.fixed.src;
    headerBackgroundStyle = {
      "background-image": `url("${backgroundImageUrl}")`,
      height: "60vh",
      "max-height": "460px"
    };
  }

  const lead = postNodes.shift();
  const rowLen = [3, 2, 3];
  const rows = [];

  while (postNodes.length) {
    const len = rowLen.shift() || 2;
    rows.push(postNodes.splice(0, len));
  }

  return (
    <Layout navMenuItems={[]}>
      <SEO
        title="Blog"
        bodyAttr={{
          class: "bg-gray-200 font-sans leading-normal tracking-normal"
        }}
      />
      <div className="w-full m-0 p-0 bg-cover bg-bottom" style={headerBackgroundStyle}></div>

      {/* Container */}
      <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
            {/* Lead Card */}
            {lead && <LeadBlogPost {...lead} />}
            {/* /Lead Card */}

            {/* Posts Container */}
            <div className="flex flex-wrap justify-between pt-12 -mx-6">
              {rows.map((posts, i) => (
                <BlogRow posts={posts} key={i} />
              ))}
            </div>
            {/* / Post Content */}
          </div>

          {/* Subscribe */}
          <div className="container font-sans bg-teal-100 rounded mt-8 p-4 md:p-24 text-center">
            <h2 className="font-bold break-normal text-2xl md:text-4xl">
              Subscribe to our newsletter
            </h2>
            <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">
              You'll receive around 1 post per week
            </h3>
            <div className="w-full text-center pt-4">
              <form action="#">
                <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                  <input
                    type="email"
                    placeholder="youremail@example.com"
                    className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
                  ></input>
                  <button
                    type="submit"
                    className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-teal-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-teal-400"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/*  /Subscribe */}

          {/* Author */}
          <div className="flex w-full items-center font-sans p-8 md:p-24">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="http://i.pravatar.cc/300"
              alt="Avatar of Author"
            ></img>
            <div className="flex-1">
              <p className="text-base font-bold text-base md:text-xl leading-none">Ghostwind CSS</p>
              <p className="text-gray-600 text-xs md:text-base">
                Tailwind CSS version of Ghost's Casper theme by{" "}
                <a
                  className="text-gray-800 hover:text-teal-500 no-underline border-b-2 border-teal-500"
                  href="https://www.tailwindtoolbox.com"
                >
                  TailwindToolbox.com
                </a>
              </p>
            </div>
            <div className="justify-end">
              <button className="bg-transparent border border-gray-500 hover:border-teal-500 text-xs text-gray-500 hover:text-teal-500 font-bold py-2 px-4 rounded-full">
                Read More
              </button>
            </div>
          </div>
          {/* /Author */}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
