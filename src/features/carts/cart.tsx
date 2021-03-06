import React, {useState} from 'react';
import Link from 'next/link';
import {
  CartPopupBody,
  CheckoutButton,
  CheckoutButtonWrapper,
  CloseButton,
  CouponBoxWrapper,
  CouponCode,
  ItemWrapper,
  NoProductImg,
  NoProductMsg,
  PopupHeader,
  PopupItemCount,
  PriceBox,
  PromoCode,
  Title,
} from './cart.style';
import {CloseIcon} from 'assets/icons/CloseIcon';
import {ShoppingBagLarge} from 'assets/icons/ShoppingBagLarge';
import {NoCartBag} from 'assets/icons/NoCartBag';
import {CURRENCY_UAH} from 'utils/constant';
import {FormattedMessage} from 'react-intl';
import {useLocale} from 'contexts/language/language.provider';

import {Scrollbar} from 'components/scrollbar/scrollbar';
import {useCart} from 'contexts/cart/use-cart';
import {CartItem} from 'components/cart-item/cart-item';
import Coupon from 'features/coupon/coupon';

type CartPropsType = {
  style?: any;
  className?: string;
  scrollbarHeight?: string;
  onCloseBtnClick?: (e: any) => void;
};

const Cart: React.FC<CartPropsType> = ({
  style,
  className,
  onCloseBtnClick,
  scrollbarHeight,
}) => {
  const {
    items,
    coupon,
    addItem,
    removeItem,
    removeItemFromCart,
    cartItemsCount,
    calculatePrice,
  } = useCart();
  const [hasCoupon, setCoupon] = useState(false);
  const { isRtl } = useLocale();

  return (
    <CartPopupBody className={className} style={style}>
      <PopupHeader>
        <PopupItemCount>
          <ShoppingBagLarge width='19px' height='24px' />
          <span>
            {cartItemsCount}
            &nbsp;
            {cartItemsCount > 1 ? (
              <FormattedMessage id='cartItems' defaultMessage='Предметы' />
            ) : (
              <FormattedMessage id='cartItem' defaultMessage='Предмет' />
            )}
          </span>
        </PopupItemCount>

        <CloseButton onClick={onCloseBtnClick}>
          <CloseIcon />
        </CloseButton>
      </PopupHeader>

      <Scrollbar className='cart-scrollbar'>
        <ItemWrapper className='items-wrapper'>
          {!!cartItemsCount ? (
            items.map((item) => (
              <CartItem
                key={`cartItem-${item.id}`}
                onIncrement={() => addItem(item)}
                onDecrement={() => removeItem(item)}
                onRemove={() => removeItemFromCart(item)}
                data={item}
              />
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
        </ItemWrapper>
      </Scrollbar>

      <CheckoutButtonWrapper>
        <PromoCode>
          {!coupon?.discountInPercent ? (
            <>
              {!hasCoupon ? (
                <button onClick={() => setCoupon((prev) => !prev)}>
                  <FormattedMessage
                    id='specialCode'
                    defaultMessage='Have a special code?'
                  />
                </button>
              ) : (
                <CouponBoxWrapper>
                  <Coupon
                    disabled={!items.length}
                    style={{
                      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.06)',
                    }}
                  />
                </CouponBoxWrapper>
              )}
            </>
          ) : (
            <CouponCode>
              <FormattedMessage
                id='couponApplied'
                defaultMessage='Coupon Applied'
              />
              <span>{coupon.code}</span>
            </CouponCode>
          )}
        </PromoCode>

        {cartItemsCount !== 0 ? (
          <Link href='/checkout'>
            <CheckoutButton onClick={onCloseBtnClick}>
              <>
                <Title>
                  <FormattedMessage
                    id='nav.checkout'
                    defaultMessage='Перейти к оформлению заказа'
                  />
                </Title>
                <PriceBox>
                  {calculatePrice()}
                  {CURRENCY_UAH}
                </PriceBox>
              </>
            </CheckoutButton>
          </Link>
        ) : (
          <CheckoutButton>
            <>
              <Title>
                <FormattedMessage id='nav.checkout' defaultMessage='Перейти к оформлению заказа' />
              </Title>
              <PriceBox>
                {calculatePrice()}
                {CURRENCY_UAH}
              </PriceBox>
            </>
          </CheckoutButton>
        )}
      </CheckoutButtonWrapper>
    </CartPopupBody>
  );
};

export default Cart;
