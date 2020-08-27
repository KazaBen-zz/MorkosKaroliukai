/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createApyranke = /* GraphQL */ `
  mutation CreateApyranke(
    $input: CreateApyrankeInput!
    $condition: ModelApyrankeConditionInput
  ) {
    createApyranke(input: $input, condition: $condition) {
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
export const updateApyranke = /* GraphQL */ `
  mutation UpdateApyranke(
    $input: UpdateApyrankeInput!
    $condition: ModelApyrankeConditionInput
  ) {
    updateApyranke(input: $input, condition: $condition) {
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
export const deleteApyranke = /* GraphQL */ `
  mutation DeleteApyranke(
    $input: DeleteApyrankeInput!
    $condition: ModelApyrankeConditionInput
  ) {
    deleteApyranke(input: $input, condition: $condition) {
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
