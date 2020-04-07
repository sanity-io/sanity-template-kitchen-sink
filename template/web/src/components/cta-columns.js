import React from "react";
import PortableText from "./portableText";

const CTAColumn = ({ width, label, title, body, ctas = [] }) => {
  const className = `w-full md:w-1/${width} p-6 flex flex-col flex-grow flex-shrink`;

  const actions = ctas
    .filter(c => c.title)
    .map(c => {
      return (
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div className="flex items-center justify-start">
            <button className="mx-auto hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
              {c.title}
            </button>
          </div>
        </div>
      );
    });

  return (
    <div className={className}>
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
          <p className="w-full text-gray-600 text-xs md:text-sm px-6">{label}</p>
          <div className="w-full font-bold text-xl text-gray-800 px-6">{title}</div>
          <p className="text-gray-800 text-base px-6 mb-5">
            <PortableText blocks={body} />
          </p>
        </a>
      </div>
      {actions}
    </div>
  );
};

const CTAColumns = ({ title, columns }) => {
  const cols = columns
    .filter(c => !c.disabled)
    .map((c, i) => {
      return <CTAColumn width={columns.length} key={c._key} {...c} />;
    });

  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {title}
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        {cols}
      </div>
    </section>
  );
};

export default CTAColumns;
