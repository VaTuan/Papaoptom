import { gql } from '@apollo/client';

export const GET_HEADER = gql`
query header{
    categories{
      id
      title
      slug
      icon
      children{
        id
        title
        slug
      }
    }
  }
`