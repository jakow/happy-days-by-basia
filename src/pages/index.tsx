import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image";
import Helmet from 'react-helmet';

export default function IndexPage(): React.ReactElement {
  return (
    <Layout>
      <Helmet>
        <title>Happy Days by Basia</title>
      </Helmet>
      <div className="px-4 py-6">
        <StaticImage
          className="w-full"
          src="../images/blogimg1.jpg"
          alt="First blog post"
        />
      </div>
    </Layout>
  );
}
