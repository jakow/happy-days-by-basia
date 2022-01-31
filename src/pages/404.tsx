import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Helmet from "react-helmet";

export default function NotFoundPage(): React.ReactElement {
  return (
    // TODO: design a 404 page.
    <Layout>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className="text-center p-2">Not found.</div>
    </Layout>
  );
}
