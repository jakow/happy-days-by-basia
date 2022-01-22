import * as React from "react"
import Layout from "../components/Layout"
import bannerimg from "../images/blogimg1.jpg";


export default function IndexPage(): React.ReactElement {
  return (
    <Layout>
      <div className="px-4 py-2">
        <img className="w-full" src={bannerimg} />
      </div>
    </Layout>
  );
}
