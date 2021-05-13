// product card for general
import dynamic from 'next/dynamic';
import React from 'react';
import Image from 'components/image/image';
import { Button } from 'components/button/button';
import {
    ProductCardWrapper,
    ProductImageWrapper,
    ProductInfo,
    DiscountPercent,
    NewNoti,
    ButtonText,
} from '../product-card.style';
import { useCart } from 'contexts/cart/use-cart';
import { Counter } from 'components/counter/counter';
import { cartAnimation } from 'utils/cart-animation';
import { FormattedMessage } from 'react-intl';
import { CartIcon } from 'assets/icons/CartIcon';
import { useModal } from 'contexts/modal/use-modal';
import { useRouter } from 'next/router';

const QuickViewMobile = dynamic(
    () => import('features/quick-view/quick-view-mobile')
);

type ProductCardProps = {
    title: string;
    image: any;
    weight: string;
    currency: string;
    description: string;
    price: number;
    salePrice?: number;
    discountInPercent?: string;
    data: any;
    onChange?: (e: any) => void;
    increment?: (e: any) => void;
    decrement?: (e: any) => void;
    cartProducts?: any;
    addToCart?: any;
    updateCart?: any;
    value?: any;
    deviceType?: any;
    isNew?: Boolean;
    giaMotDoi?:number;
};

const ProductCard: React.FC<ProductCardProps> = (
    {   isNew,
        giaMotDoi,
        title,
        image,
        weight,
        price,
        salePrice,
        discountInPercent,
        cartProducts,
        addToCart,
        updateCart,
        value,
        currency,
        onChange,
        increment,
        decrement,
        data,
        deviceType,
        ...props
    }
) => {
    const router = useRouter();


    console.log('route : ',typeof discountInPercent);

    const [showModal, hideModal] = useModal(
        () => (
            <QuickViewMobile
                modalProps={data}
                hideModal={hideModal}
                deviceType={deviceType}
            />
        ),
        {
            onClose: () => {
                const { pathname, query, asPath } = router;
                const as = asPath;
                router.push(
                    {
                        pathname,
                        query,
                    },
                    as,
                    {
                        shallow: true,
                    }
                );
            },
        }
    );

    const { addItem, removeItem, getItem, isInCart } = useCart();

    const handleAddClick = (e) => {
        e.stopPropagation();
        addItem(data);
        if (!isInCart(data.id)) {
            cartAnimation(e);
        }
    };
    const handleRemoveClick = (e) => {
        e.stopPropagation();
        removeItem(data);
    };

    // funtion thực hiện mở modal thông tin sản phẩm
    // created by tuanva 21/04/2021
    const handleQuickViewModal = () => {
        const { pathname, query } = router;

        const as = `/shoes/${data.slug}`;

        if (pathname === '/shoes/[slug]') {
            // console.log('bằng rồi');
            router.push(pathname, as);
            if (typeof window !== 'undefined') {
                window.scrollTo(0, 0);
            }
            return;
        }

        // console.log('Show modal');

        showModal();
        router.push(
            {
                pathname,
                query,
            },
            {
                pathname: as,
            },
            {
                shallow: true,
            }
        );
    };

    return (
        <ProductCardWrapper onClick={handleQuickViewModal} className="product-card">
            <ProductImageWrapper>
                <Image
                    url={image}
                    className="product-image"
                    style={{ position: 'relative' }}
                    alt={title}
                />
                { parseInt(discountInPercent) !== 0 ? (
                    <DiscountPercent>{discountInPercent}%</DiscountPercent>
                ) : null}
                { isNew && <NewNoti>New</NewNoti>
                }
            </ProductImageWrapper>
            <ProductInfo >
                <h3 className="product-title">{title}</h3>
                <span className="product-weight">{weight}</span>
                <p className="product-weight">{giaMotDoi}</p>
                <div className="product-meta">
                    <div className="productPriceWrapper">
                        {discountInPercent ? (
                            <span className="discountedPrice">{price} {currency}</span>
                        ) : null}

                        <span className="product-price">{salePrice ? salePrice : price} {currency}</span>
                    </div>

                    {!isInCart(data.id) ? (
                        <Button
                            className="cart-button"
                            variant="secondary"
                            borderRadius={100}
                            onClick={handleAddClick}
                        >
                            <CartIcon mr={2} />
                            <ButtonText>
                                <FormattedMessage id="addCartButton" defaultMessage="Cart" />
                            </ButtonText>
                        </Button>
                    ) : (
                        <Counter
                            value={getItem(data.id).quantity}
                            onDecrement={handleRemoveClick}
                            onIncrement={handleAddClick}
                            className="card-counter"
                        />
                    )}
                </div>
            </ProductInfo>
        </ProductCardWrapper>
    );
};

export default ProductCard;
