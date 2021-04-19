import React, { useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { Button } from 'components/button/button';
import { CURRENCY_UAH } from 'utils/constant';
import { Scrollbar } from 'components/scrollbar/scrollbar';
import CheckoutWrapper, {
  Bold,
  CalculationWrapper,
  CartWrapper,
  CheckoutContainer,
  CheckoutInformation,
  CheckoutSubmit,
  CouponBoxWrapper,
  CouponCode,
  CouponInputBox,
  HaveCoupon,
  InformationBox,
  InputContainer,
  ItemInfo,
  Items,
  ItemsWrapper,
  Multiplier,
  NoProductImg,
  NoProductMsg,
  NumberButton,
  OrderInfo,
  Price,
  Quantity,
  RemoveCoupon,
  Small,
  TermConditionLink,
  TermConditionText,
  Text,
  TextWrapper,
  Title,
} from './checkout-two.style';

import { NoCartBag } from 'assets/icons/NoCartBag';

import Sticky from 'react-stickynode';
import { ProfileContext } from 'contexts/profile/profile.context';
import { FormattedMessage } from 'react-intl';
import { useCart } from 'contexts/cart/use-cart';
import { useLocale } from 'contexts/language/language.provider';
import { useWindowSize } from 'utils/useWindowSize';
import Coupon from 'features/coupon/coupon';
import Contact from 'features/contact/contact';
import { useMutation } from '@apollo/client';
import { ADD_ORDER_PAPA } from "../../../graphql/mutation/order";
import Address from 'features/address/address';
import Email from 'features/email/email';
import { styles } from 'styled-system';

// The type of props Checkout Form receives
interface MyFormProps {
  token: string;
  deviceType: any;
}

type CartItemProps = {
  product: any;
};

const OrderItem: React.FC<CartItemProps> = ({ product }) => {
  const { id, quantity, name } = product;
  const title = `${product?.name ?? ""} ${product?.characteristics?.type ?? ""} ${product?.characteristics?.brand?.name ?? ""} ${product?.vcode ?? ""} ${product?.characteristics?.color ?? ""}` ?? null;
  const unit = Number(product?.characteristics?.steamInBox) ?? 1;
  const price = Number(product?.characteristics?.totalOldPurchasePrice) ?? 0;
  const salePrice = Number(product?.characteristics?.totalSellingPrice) ?? 0;
  const displayPrice = salePrice ? salePrice : price;
  return (
    <Items key={id}>
      <div style={{display:'flex', flexDirection: 'column'}}>
        <NumberButton>+</NumberButton>
        <NumberButton>-</NumberButton>
      </div>
      <Quantity>{quantity}</Quantity>
      <Multiplier>x</Multiplier>
      <ItemInfo>
        {name ? name : title} {unit ? `| ${unit}` : ''}
      </ItemInfo>
      <Price>
        {(displayPrice * quantity).toFixed(2)}
        {CURRENCY_UAH}
      </Price>
    </Items>
  );
};

const CheckoutWithSidebar: React.FC<MyFormProps> = ({ token, deviceType }) => {
  const [hasCoupon, setHasCoupon] = useState(false);
  const { state } = useContext(ProfileContext);
  const { isRtl } = useLocale();
  const {
    items,
    removeCoupon,
    coupon,
    clearCart,
    cartItemsCount,
    calculatePrice,
    calculateDiscount,
    calculateSubTotalPrice,
    isRestaurant,
    toggleRestaurant,
  } = useCart();
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  // const { address, contact, card, schedules } = state;
  const { contact } = state;
  const size = useWindowSize();

  const [addOrderMutation] = useMutation(ADD_ORDER_PAPA);
  const handleSubmit = async () => {
    setLoading(true);
    if (isValid && contact.length) {
      await addOrderMutation({
        variables: {
          phoneNumber: contact[0]?.number ?? "",
          product: JSON.stringify(items)
        }
      });
      clearCart();
      Router.push('/order-received');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (
      calculatePrice() > 0 &&
      cartItemsCount > 0
      // cartItemsCount > 0 &&
      // cartItemsCount > 0 &&
      // address.length &&
      // contact.length &&
      // card.length &&
      // schedules.length
    ) {
      setIsValid(true);
    }
  }, []);
  useEffect(() => {
    return () => {
      if (isRestaurant) {
        toggleRestaurant();
        clearCart();
      }
    };
  }, []);

  return (
    <form>
      <CheckoutWrapper>
        <CheckoutContainer>
          <CheckoutInformation>
            <InformationBox>

              {/* PaymentOption */}
              <InputContainer>
                <p>Name</p>
                <input placeholder="Enter your Name"></input>
              </InputContainer>
              <InputContainer>
                <p>Email</p>
                <input placeholder="Enter your email"></input>
              </InputContainer>
              <InputContainer>
                <p>Phone number</p>
                <input placeholder="Enter your phone"></input>
              </InputContainer>
              <InputContainer>
                <p>Address</p>
                <input placeholder="Enter your address"></input>
              </InputContainer>

              <InputContainer>
                <p>Message</p>
                <input className="msg" placeholder="Leave a message"></input>
              </InputContainer>
            </InformationBox>
            <InformationBox
              className='paymentBox'
              style={{ paddingBottom: 30 }}
            >
              {/*<Payment increment={true} deviceType={deviceType} />*/}

              {/* Coupon start */}
              <TermConditionText>
                <FormattedMessage
                  id='termAndConditionHelper'
                  defaultMessage='By making this purchase you agree to our'
                />
                <Link href='#'>
                  <TermConditionLink>
                    <FormattedMessage
                      id='termAndCondition'
                      defaultMessage='terms and conditions.'
                    />
                  </TermConditionLink>
                </Link>
              </TermConditionText>

              {/* CheckoutSubmit */}
              <CheckoutSubmit>
                <Button
                  type='button'
                  onClick={handleSubmit}
                  disabled={!isValid}
                  size='big'
                  loading={loading}
                  style={{ width: '100%' }}
                >
                  <FormattedMessage
                    id='processCheckout'
                    defaultMessage='Proceed to Checkout'
                  />
                </Button>
              </CheckoutSubmit>
            </InformationBox>
          </CheckoutInformation>

          <CartWrapper>
            <Sticky
              enabled={size.width >= 768 ? true : false}
              top={120}
              innerZ={999}
            >
              <OrderInfo>
                <Title>
                  <FormattedMessage
                    id='cartTitle'
                    defaultMessage='Your Order'
                  />
                </Title>

                <Scrollbar className='checkout-scrollbar'>
                  <ItemsWrapper>
                    {cartItemsCount > 0 ? (
                      items.map((item) => (
                        <OrderItem key={`cartItem-${item.id}`} product={item} />
                      ))
                    ) : (
                      <>
                        <NoProductImg>
                          <NoCartBag />
                        </NoProductImg>

                        <NoProductMsg>
                          <FormattedMessage
                            id='noProductFound'
                            defaultMessage='No products found'
                          />
                        </NoProductMsg>
                      </>
                    )}
                  </ItemsWrapper>
                </Scrollbar>

                <CalculationWrapper>
                  <TextWrapper>
                    <Text>
                      <FormattedMessage
                        id='subTotal'
                        defaultMessage='Subtotal'
                      />
                    </Text>
                    <Text>
                      {calculateSubTotalPrice()}
                      {CURRENCY_UAH}
                    </Text>
                  </TextWrapper>

                  <TextWrapper>
                    <Text>
                      <FormattedMessage
                        id='intlOrderDetailsDelivery'
                        defaultMessage='Delivery Fee'
                      />
                    </Text>
                    <Text>0.00{CURRENCY_UAH}</Text>
                  </TextWrapper>

                  <TextWrapper>
                    <Text>
                      <FormattedMessage
                        id='discountText'
                        defaultMessage='Discount'
                      />
                    </Text>
                    <Text>
                      {calculateDiscount()}
                      {CURRENCY_UAH}
                    </Text>
                  </TextWrapper>

                  <TextWrapper style={{ marginTop: 20 }}>
                    <Bold>
                      <FormattedMessage id='totalText' defaultMessage='Total' />{' '}
                      <Small>
                        (
                        <FormattedMessage
                          id='vatText'
                          defaultMessage='Incl. VAT'
                        />
                        )
                      </Small>
                    </Bold>
                    <Bold>
                      {calculatePrice()}
                      {CURRENCY_UAH}
                    </Bold>
                  </TextWrapper>
                </CalculationWrapper>
              </OrderInfo>
            </Sticky>
          </CartWrapper>
        </CheckoutContainer>
      </CheckoutWrapper>
    </form>
  );
};

export default CheckoutWithSidebar;
