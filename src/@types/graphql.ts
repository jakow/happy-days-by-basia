export type GraphQLResult<TQuery> = {
  data?: TQuery,
  errors?: any,
};

export type GraphQLQueryRunner = <T>(query: string) => Promise<GraphQLResult<T>>;