import type {GraphQLQueryRunner} from './graphql';

type CreatePageConfig = {
  /**
   * Any valid URL. Must start with a forward slash.
   */
  path: string;
  component: string;
  context?: {[key: string]: any}
};

type CreatePagesActions = {
  createPage(pageConfig: CreatePageConfig): void,
};

interface GatsbyReporter {
  verbose(message: string): void;
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  panic(message: string, error?: Error): void;
  panicOnBuild(message: string, error?: Error): void;
  activityTimer(activityName: string): any; // TODO(proper api)
}

export type CreatePagesInput = {
  graphql: GraphQLQueryRunner;
  actions: CreatePagesActions;
  reporter: GatsbyReporter
};