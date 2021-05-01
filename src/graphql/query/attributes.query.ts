import { gql } from '@apollo/client';

export const GET_ATTRIBUTES_BY_CATE_ID = gql`
query getAttributesByCategoryId($categoryId : Float){
    attributes(query :{categoryId : $categoryId} ){
        id
        name
        values{
          id
          value
        }
      }
  }
`