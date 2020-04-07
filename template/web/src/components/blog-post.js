import { format } from "date-fns";
import React from "react";
import Img from "gatsby-image";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";

import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

import styles from "./blog-post.module.css";

const BlogPost = props => {
  const { _rawBody, _rawExcerpt, authors, categories, title, mainImage, publishedAt } = props;
  const imgUrl =
    mainImage &&
    imageUrlFor(buildImageObj(mainImage))
      .width(1200)
      .height(Math.floor((9 / 16) * 1200))
      .fit("crop")
      .auto("format")
      .url();

  const mainImageFluid = getFluidGatsbyImage(
    mainImage.asset,
    { maxWidth: 1200 },
    clientConfig.sanity
  );

  return (
    <div className={styles.mainContent}>
      <div className="text-center pt-16 md:pt-32">
        <p className="text-sm md:text-base text-teal-500 font-bold">
          {format(publishedAt, "DD MMMM YYYY").toUpperCase()}
          {/*<span className="text-gray-900">/</span> GETTING STARTED*/}
        </p>
        <h1 className="font-bold break-normal text-3xl md:text-5xl">{title}</h1>
      </div>

      <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded">
        {imgUrl && <img src={imgUrl} alt={mainImage.alt} />}
        <div className="container max-w-5xl mx-auto -mt-2">
          <div className="mx-0 sm:mx-6">
            <div
              className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
              style={{
                fontFamily: "Georgia,serif"
              }}
            >
              <div className="text-2xl md:text-3xl mb-5">
                <PortableText blocks={_rawExcerpt} />
              </div>
              <div className="py-6">
                <PortableText blocks={_rawBody} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
