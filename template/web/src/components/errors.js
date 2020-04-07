import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";

const Errors = ({ errors }) => (
  <Layout>
    <GraphQLErrorList errors={errors} />
  </Layout>
);

export default Errors;
