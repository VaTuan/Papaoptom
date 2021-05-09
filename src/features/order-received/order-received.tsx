import React from 'react';
import Link from 'next/link';
import OrderReceivedWrapper, {
  OrderReceivedContainer,
  OrderInfo,
  OrderDetails,
  TotalAmount,
  BlockTitle,
  Text,
  InfoBlockWrapper,
  InfoBlock,
  ListItem,
  ListTitle,
  ListDes,
} from './order-received.style';
import { FormattedMessage } from 'react-intl';
import { useCart } from 'contexts/cart/use-cart';
import { useMutation } from '@apollo/client';
import { ADD_ORDER_PAPA } from 'graphql/mutation/order';
import {useRouter} from 'next/router';
// import { ADD_ORDER_PAPA } from "../../../graphql/mutation/order";
type OrderReceivedProps = {};


const OrderReceived: React.FunctionComponent<OrderReceivedProps> = (props) => {
  const {recentOrder} = useCart();
  const router = useRouter();
  const count = ()=>{
    let sum = 0;
    if(recentOrder?.products?.length > 0)recentOrder?.products?.map(item=>{sum+=item.quantity})
    return sum
  }
  const [addOrder, data] = useMutation(ADD_ORDER_PAPA);
  
  
  return (
    <OrderReceivedWrapper>
      <OrderReceivedContainer>
        <Link href="/">
          <a className="home-btn">
            <FormattedMessage id="backHomeBtn" defaultMessage="Back to Home" />
          </a>
        </Link>

        <OrderInfo>
          <BlockTitle>
            <FormattedMessage
              id="orderReceivedText"
              defaultMessage="Order Received"
            />
          </BlockTitle>

          <Text>
            <FormattedMessage
              id="orderReceivedSuccess"
              defaultMessage="Thank you. Your order has been received"
            />
          </Text>

          <InfoBlockWrapper>
            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage
                  id="orderNumberText"
                  defaultMessage="Order Number"
                />
              </Text>
              <Text>{router.query.id}</Text>
            </InfoBlock>
{/* 
            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage id="orderDateText" defaultMessage="Date" />
              </Text>
              <Text>{recentOrder?.date}</Text>
            </InfoBlock> */}

            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage id="totalText" defaultMessage="Total" />
              </Text>
              <Text>${recentOrder?.subTotal}</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage
                  id="paymenMethodText"
                  defaultMessage="Payment Method"
                />
              </Text>
              <Text>
                <FormattedMessage
                  id="paymentMethodName"
                  defaultMessage="Cash on delivery"
                />
              </Text>
            </InfoBlock>
          </InfoBlockWrapper>
        </OrderInfo>

        <OrderDetails>
          <BlockTitle>
            <FormattedMessage
              id="orderDetailsText"
              defaultMessage="Order Details"
            />
          </BlockTitle>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="totalItemText"
                  defaultMessage="Total Item"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{count()} Items</Text>
            </ListDes>
          </ListItem>

          {/* <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="orderTimeText"
                  defaultMessage="Order Time"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>1.00pm 10/12/19</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="deliveryTimeText"
                  defaultMessage="Delivery Time"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>90 Minute Express Delivery</Text>
            </ListDes>
          </ListItem> */}

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="deliveryLocationText"
                  defaultMessage="Delivery Location"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>
                {recentOrder?.customer?.address}
              </Text>
            </ListDes>
          </ListItem>
          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="deliveryLocationText"
                  defaultMessage="Contact"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>
                {recentOrder?.customer?.phone}
              </Text>
            </ListDes>
          </ListItem>
        </OrderDetails>

        <TotalAmount>
          <BlockTitle>
            <FormattedMessage
              id="totalAmountText"
              defaultMessage="Total Amount"
            />
          </BlockTitle>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage id="subTotal" defaultMessage="Sub total" />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>${recentOrder?.subTotal}</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="paymenMethodText"
                  defaultMessage="Payment Method"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>Cash On Delivery</Text>
            </ListDes>
          </ListItem>

          {/* <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="paymentMethodName"
                  defaultMessage="Delivery Charge"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>10</Text>
            </ListDes>
          </ListItem> */}

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage id="totalText" defaultMessage="Total" />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>${recentOrder?.subTotal}</Text>
            </ListDes>
          </ListItem>
        </TotalAmount>
      </OrderReceivedContainer>
    </OrderReceivedWrapper>
  );
};

export default OrderReceived;
