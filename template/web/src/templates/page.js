import React, { useState } from "react";
import { graphql } from "gatsby";

import Hero from "../components/hero";
import InfoRows from "../components/InfoRows";
import CTAColumns from "../components/cta-columns";
import CTA from "../components/cta";
import Pricing from "../components/pricing";
import { TopWave, BottomWave } from "../components/wave";

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      useSiteTitle
      experiment {
        variations {
          page {
            ...PageInfo
          }
          variationId
          percentage
        }
        active
      }
      page {
        ...PageInfo
      }
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      primaryColor {
        hex
      }
      secondaryColor {
        hex
      }
      title
      openGraph {
        title
        description
        image {
          ...SanityImage
        }
      }
    }
  }
`;

const Page = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  // Runtime A/B test variant pick. If we are at build time,
  // use the statically referenced 'page' property
  const [testPage, setPage] = useState(null);

  if (
    !testPage &&
    typeof window !== "undefined" &&
    data.route.experiment &&
    data.route.experiment.active === true &&
    data.route.experiment.variations &&
    data.route.experiment.variations.length > 1
  ) {
    // TODO: This choice should be preserved in localStorage
    // so the user always sees the same variant
    const variations = data.route.experiment.variations;
    const pick = variations[Math.floor(Math.random() * variations.length)].page;
    setPage(pick);
  }

  const page = testPage || data.route.page;

  const content = (page._rawContent || [])
    .filter(c => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case "pricing":
          el = <Pricing key={c._key} {...c} />;
          break;
        case "infoRows":
          el = <InfoRows key={c._key} {...c} />;
          break;
        case "hero":
          el = <Hero key={c._key} {...c} />;
          break;
        case "ctaColumns":
          el = <CTAColumns key={c._key} {...c} />;
          break;
        case "ctaPlug":
          el = <CTA key={c._key} {...c} />;
          break;
        case "uiComponentRef":
          switch (c.name) {
            case "topWave":
              el = <TopWave />;
              break;
            case "bottomWave":
              el = <BottomWave />;
              break;
            default:
              break;
          }
          break;
        default:
          el = null;
      }
      return el;
    });

  const gradient = {
    from: (site.primaryColor && site.primaryColor.hex) || "#d53369",
    to: (site.secondaryColor && site.secondaryColor.hex) || "#daae51"
  };

  const menuItems = page.navMenu && (page.navMenu.items || []);
  const pageTitle = !data.route.useSiteTitle && page.title;

  return (
    <Layout navMenuItems={menuItems}>
      <SEO
        title={pageTitle}
        description={site.description}
        keywords={site.keywords}
        bodyAttr={{
          class: "leading-normal tracking-normal text-white gradient"
        }}
        gradient={gradient}
      />
      <div className="pt-24">{content}</div>
    </Layout>
  );
};

export default Page;
