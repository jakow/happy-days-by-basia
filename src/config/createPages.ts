import type { GetAllPostsQuery } from "../@types/generated";
import type { CreatePagesInput } from "../@types/gatsby-node";
import * as path from "path";

const blogPostTemplate = path.resolve(`src/templates/BlogPost.tsx`);

export default async function createPages({
  graphql,
  actions,
  reporter
}: CreatePagesInput): Promise<void> {
  reporter.info('Starting to create pages');
  const { createPage } = actions;
  const {data, errors: _errors} = await graphql<GetAllPostsQuery>(`
    query GetAllPosts {
      allContentfulBlogPost(limit: 20) {
        nodes {
          slug
          id
          title
        }
      }
    }
  `);

  if (data == null) {
    reporter.panicOnBuild("No data for blog posts!");
    return;
  }


  reporter.info(`Creating ${data.allContentfulBlogPost.nodes.length} Blog Posts`);

  for (const post of data.allContentfulBlogPost.nodes) {
    reporter.info(`Creating post ${post.id} with slug ${post.slug}`)
    createPage({
      path: `/post/${post.slug}`,
      component: blogPostTemplate,
      context: post
    });
  }
}
