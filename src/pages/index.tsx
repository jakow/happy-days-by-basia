import * as React from "react"
import Layout from "../components/Layout"
import bannerimg from "../images/blogimg1.jpg";
import { StaticImage } from "gatsby-plugin-image";


export default function IndexPage(): React.ReactElement {
  return (
    <Layout>
      <div className="px-4 py-2">
        <StaticImage className="w-full" src={bannerimg} alt="First blog post" />
      </div>
    </Layout>
  );
}
