import { format } from "date-fns";
import React from "react";
import MainImage from "./MainImage";
import PortableText from "./portableText";

import styles from "./blog-post.module.css";

const BlogPost = (props) => {
  const { _rawBody, _rawExcerpt, title, mainImage, publishedAt } = props;

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
        <MainImage mainImage={mainImage} width={1200} />
        <div className="container max-w-5xl mx-auto -mt-2">
          <div className="mx-0 sm:mx-6">
            <div
              className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
              style={{
                fontFamily: "Georgia,serif",
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
