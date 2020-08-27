/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getApyranke = /* GraphQL */ `
  query GetApyranke($id: ID!) {
    getApyranke(id: $id) {
      id
      title
      description
      image
      price
      createdAt
      updatedAt
    }
  }
`;
export const listApyrankes = /* GraphQL */ `
  query ListApyrankes(
    $filter: ModelApyrankeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApyrankes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
