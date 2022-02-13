import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import type {IndexPageQuery} from "../@types/generated";

type Props = {
  data: IndexPageQuery;
};

export default function IndexPage(props: Props): React.ReactElement {
  const siteMetadata = props.data.site?.siteMetadata;
  return (
    <Layout>
      <Helmet>
        <title>{siteMetadata.title}</title>
      </Helmet>
      <div className="px-4 py-6">
        <StaticImage
          className="w-full"
          src="../images/blogimg1.jpg"
          alt="First blog post"
          breakpoints={[640, 768, 1024, 1280, 1536]}
        />
      </div>
    </Layout>
  );
}

export const query = graphql`
query IndexPage {
  site {
    siteMetadata {
      title
    }
  }
}
`
