import { gql } from "@apollo/client";

export const GET_SHOES = gql`
  query getShoes($supplier: String, $pageSize: Int, $pageNumber: Int) {
    filterProduct(filter: { supplier: $supplier, pageSize: $pageSize, pageNumber: $pageNumber }) {
      message
      code
      data {
        id
        vcode
        name
        quantity
        category {
          id
          name
        }
        supplier {
          id
          email
          phone
          address
          company
        }
        brand {
          id
          name
        }
        createdAt
        updatedAt
        characteristics {
          description
          photo1
          productMaterial
          sizeChart
          repeatedDimensions
          steamInBox
          liningMaterial
          outsoleMaterial
          country
          heelHeight
          platformHeight
          picturedSize
          purchasePrice
          sellingPrice
          season
          shootingDate
          purchaseCurrency
          saleCurrency
          floor
          type
          oldPurchasePrice
          oldSellingPrice
          insoleMaterial
          videoReview
          totalOldPurchasePrice
          totalOldSellingPrice
          totalPurchasePrice
          totalSellingPrice
          discountInPercent
        }
        slug
      }
      totalDocs
      totalPages
      hasPrevPage
      hasNextPage
      prevPage
      nextPage
      totalPages
      pageSize
      pageNumber
    }
  }
`;


export const SEARCH_SHOES = gql`
  query searchShoes($searchTerm: String, $pageSize: Int, $pageNumber: Int) {
    searchShoes(searchTerm: $searchTerm, pageSize: $pageSize, pageNumber: $pageNumber) {
      message
      code
      data {
        id
        vcode
        name
        quantity
        category {
          id
          name
        }
        supplier {
          id
          email
          phone
          address
          company
        }
        brand {
          id
          name
        }
        createdAt
        updatedAt
        characteristics {
          description
          photo1
          productMaterial
          sizeChart
          repeatedDimensions
          steamInBox
          liningMaterial
          outsoleMaterial
          country
          heelHeight
          platformHeight
          picturedSize
          purchasePrice
          sellingPrice
          season
          shootingDate
          purchaseCurrency
          saleCurrency
          floor
          type
          oldPurchasePrice
          oldSellingPrice
          insoleMaterial
          videoReview
          totalOldPurchasePrice
          totalOldSellingPrice
          totalPurchasePrice
          totalSellingPrice
          discountInPercent
        }
        slug
      }
      totalDocs
      totalPages
      hasPrevPage
      hasNextPage
      prevPage
      nextPage
      totalPages
      pageSize
      pageNumber
    }
  }
`;

export const GET_PRODUCT_BY_CATE = gql`
query queruProduct(
    $supplier: String,
    $pageSize: Int,
    $pageNumber: Int,
    $categoryIds: [String!],
    $categoriesName :[String!],
    $attributeValues :[String!],
    $brandIds :[String!],
    $isNew :Boolean,
    $isSale:Boolean
    ){
    filterProduct(filter :{
        supplier: $supplier,
        pageSize: $pageSize,
        pageNumber: $pageNumber,
        categoryIds: $categoryIds,
        categoriesName :$categoriesName, 
        attributeValues :$attributeValues,
        brandIds :$brandIds,
        isNew :$isNew,
        isSale:$isSale
    }){
      message
      code
      data {
        id
        vcode
        name
        quantity
        category {
          id
          name
        }
        supplier {
          id
          email
          phone
          address
          company
        }
        brand {
          id
          name
        }
        createdAt
        updatedAt
        isNew
        characteristics {
          description
          photo1
          productMaterial
          sizeChart
          repeatedDimensions
          steamInBox
          liningMaterial
          outsoleMaterial
          country
          heelHeight
          platformHeight
          picturedSize
          purchasePrice
          sellingPrice
          season
          shootingDate
          purchaseCurrency
          saleCurrency
          floor
          type
          oldPurchasePrice
          oldSellingPrice
          insoleMaterial
          videoReview
          totalOldPurchasePrice
          totalOldSellingPrice
          totalPurchasePrice
          totalSellingPrice
          discountInPercent
        }
        slug
      }
      totalDocs
      totalPages
      hasPrevPage
      hasNextPage
      prevPage
      nextPage
      totalPages
      pageSize
      pageNumber
    }
  }
`;