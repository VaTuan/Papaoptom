import { gql } from '@apollo/client';

export const ADD_ORDER = gql`
  mutation($orderInput: String!) {
    addOrder(orderInput: $orderInput) {
      id
      userId
      products {
        id
        title
      }
      status
    }
  }
`;




export const ADD_ORDER_PAPA = gql`
  mutation($message: String!,$isActivated: Boolean!, $deliveryFee: Float!,  $disCount: Float!,  $subTotal: Float!,  $products: [ProductReq!]!,$customer:CustomerReq! ) {
    addOrder(message: $message, isActivated: $isActivated, disCount: $disCount, deliveryFee: $deliveryFee, subTotal: $subTotal, products: $products, customer: $customer) {
      code,
      message,
      success
    }
  }
`;

export const GET_PAYMENT = gql`
  mutation($paymentInput: String!) {
    charge(paymentInput: $paymentInput) {
      status
    }
  }
`;
