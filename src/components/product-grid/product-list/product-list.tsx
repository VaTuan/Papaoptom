import React, { useEffect, useState } from "react";
// @ts-ignore
import { useRouter } from "next/router";
// @ts-ignore
import dynamic from "next/dynamic";
import {
    ProductsRow,
    ProductsCol,
    ButtonWrapper,
    LoaderWrapper,
    LoaderItem,
    ProductCardWrapper,
} from "./product-list.style";
import { CURRENCY, CURRENCY_UAH } from "utils/constant";
// @ts-ignore
import { useQuery, NetworkStatus, useLazyQuery } from "@apollo/client";
import Placeholder from "components/placeholder/placeholder";
// @ts-ignore
import Fade from "react-reveal/Fade";
import NoResultFound from "components/no-result/no-result";
import { FormattedMessage } from "react-intl";
import { Button } from "components/button/loadmore-button";
import { GET_PRODUCT_BY_CATE, SEARCH_SHOES } from "graphql/query/shoes.query";
import { useAppState } from "../../../contexts/app/app.provider";

const ErrorMessage = dynamic(
    () => import("components/error-message/error-message")
);

const GeneralCard = dynamic(
    import("components/product-card/product-card-one/product-card-one")
);
import { getLocalState } from "utils/localStorage";

type ProductsProps = {
    deviceType?: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
    fetchLimit?: number;
    loadMore?: boolean;
    type?: string;
    cateId?: string;
    onTotalProduct?: Function;
    dataIsNew: Boolean;
};

type ProductsQueryProps = {
    filterProduct?: any;
    searchShoes?: any;
};

export const Products: React.FC<ProductsProps> = ({
    deviceType,
    fetchLimit = 20,
    loadMore = true,
    type,
    cateId,
    onTotalProduct,
}) => {
    const router = useRouter();
    const searchTerm = useAppState("searchTerm");
    const category = useAppState("category");
    const localState = getLocalState("query");

    // console.log("====================================");
    // console.log("local state : ", localState);
    // console.log("====================================");

    // let queryResult = useQuery(
    //     searchTerm ? SEARCH_SHOES : GET_PRODUCT_BY_CATE,
    //     searchTerm
    //         ? {
    //             variables: {
    //                 searchTerm: searchTerm,
    //                 pageSize: fetchLimit,
    //                 pageNumber: 1,
    //             },
    //         }
    //         : {
    //             variables: {
    //                 pageSize: fetchLimit,
    //                 pageNumber: 1,
    //                 categoryIds: localState?.categoryIds,
    //                 categoriesName: localState?.categoriesName,
    //                 attributeValues: localState?.attributeValues,
    //                 brandIds: localState?.brandIds?.map(brandId => brandId.toString()),
    //                 isNew: localState?.isNew,
    //                 isSale: localState?.isSale,
    //             },
    //         }
    // );

    const [products, setProducts] = useState([]);

    // const [loadGreeting, { called, loading, data }] = useLazyQuery(
    const [getProductByCate, { called, loading, error }] = useLazyQuery(
        GET_PRODUCT_BY_CATE,
        {
            variables: {
                pageSize: fetchLimit,
                pageNumber: 1,
                categoryIds: localState?.categoryIds,
                categoriesName: localState?.categoriesName,
                attributeValues: localState?.attributeValues,
                brandIds: localState?.brandIds?.length > 0 ? localState?.brandIds?.map((brandId) => brandId.toString()) : undefined,
                // brandIds: [123],
                isNew: localState?.isNew,
                isSale: localState?.isSale,
            },
            onCompleted: (response) => {
                setProducts(response.filterProduct.data);
            },
        }
    );

    useEffect(() => {
        getProductByCate();
        return () => {
            setProducts([])
        }
    }, []);


    console.log('====================================');
    console.log('products : ', products);
    console.log('====================================');
    // const { error, loading, fetchMore, networkStatus } = queryResult;

    // const loadingMore = networkStatus === NetworkStatus.fetchMore;

    if (error) return <ErrorMessage message={error.message} />;
    if (loading) {
        return (
            <LoaderWrapper>
                <LoaderItem>
                    <Placeholder uniqueKey="1" />
                </LoaderItem>
                <LoaderItem>
                    <Placeholder uniqueKey="2" />
                </LoaderItem>
                <LoaderItem>
                    <Placeholder uniqueKey="3" />
                </LoaderItem>
                <LoaderItem>
                    <Placeholder uniqueKey="4" />
                </LoaderItem>
            </LoaderWrapper>
        );
    }

    // const result = searchTerm
    //     ? queryResult.data.searchShoes
    //     : queryResult.data.filterProduct;

    // if (!result || !result.data || result.data.length === 0) {
    //     return <NoResultFound />;
    // }
    if (products?.length === 0) {
        return <NoResultFound />;
    }

    // const data = result?.data;
    // const totalProduct = onTotalProduct && onTotalProduct(result?.totalProduct)
    // const isNextPage = result?.hasNextPage;

    // if (onTotalProduct) {
    //     onTotalProduct(result?.totalProduct);
    // }
    // const [isNextPage, setIsNextPage] = useState(result?.hasNextPage)
    // console.log('data nhận được nè : ', data);

    /**
     * function thực hiện loadmore products
     */
    // const handleLoadMore = () => {
    //     const fetchLimit = result?.pageSize ?? 10;
    //     fetchMore({
    //         variables: {
    //             pageNumber: Number(result?.nextPage ?? 0),
    //             pageSize: fetchLimit,
    //         },
    //         updateQuery: (
    //             previousResult: ProductsQueryProps,
    //             { fetchMoreResult }
    //         ) => {
    //             console.log(previousResult);
    //             console.log(fetchMoreResult);

    //             if (!fetchMoreResult) {
    //                 return previousResult;
    //             }
    //             const data = [
    //                 ...(previousResult?.[searchTerm ? "searchShoes" : "filterProduct"]
    //                     ?.data ?? []),
    //                 ...(fetchMoreResult?.[searchTerm ? "searchShoes" : "filterProduct"]
    //                     .data ?? []),
    //             ];

    //             const {
    //                 pageNumber,
    //                 pageSize,
    //                 message,
    //                 code,
    //                 totalDocs,
    //                 totalPages,
    //                 hasPrevPage,
    //                 hasNextPage,
    //                 prevPage,
    //                 nextPage,
    //             } = fetchMoreResult?.[searchTerm ? "searchShoes" : "filterProduct"];

    //             return {
    //                 ...previousResult,
    //                 [searchTerm ? "searchShoes" : "filterProduct"]: {
    //                     data: data ?? [],
    //                     pageNumber: pageNumber ?? 1,
    //                     pageSize: pageSize ?? 10,
    //                     message: message ?? null,
    //                     code: code ?? 400,
    //                     totalDocs: totalDocs ?? 0,
    //                     totalPages: totalPages ?? 0,
    //                     hasPrevPage: hasPrevPage ?? false,
    //                     hasNextPage: hasNextPage ?? false,
    //                     prevPage: prevPage ?? 0,
    //                     nextPage: nextPage ?? 0,
    //                 },
    //             };
    //         },
    //     });
    // };

    // function thực hiện render card product
    //  created by tuanva 21/04/2020
    const renderCard = (productType, props) => {
        console.log("hieutt",props);
        const { name, isNew,characteristics ,category, brand, vcode, type, supplier } =
            props;
        const {
            description,
            photo1,
            sizeChart,
            totalSellingPrice,
            totalOldSellingPrice,
            discountInPercent,
            color,
            steamInBox,
            totalPurchasePrice
        } = characteristics;
        let giaMotDoi:number = parseInt(totalPurchasePrice)/parseInt(steamInBox)
        return (
            <GeneralCard
                title={`${name} ${type ?? ""} ${brand?.name ?? ""} ${vcode ?? ""} ${color ?? ""
                    }`}
                isNew={isNew}
                description={description}
                image={photo1}
                weight={`P.${sizeChart} / ${steamInBox} Пар`}
                currency={CURRENCY_UAH}
                price={totalOldSellingPrice}
                salePrice={totalSellingPrice}
                discountInPercent={discountInPercent}
                data={props}
                deviceType={deviceType}
                giaMotDoi={giaMotDoi}
            />
        );
    };

    return (
        <>
            <ProductsRow>
                {products?.map((item: any, index: number) => {
                    return(
                    <ProductsCol key={index}>
                        <ProductCardWrapper >
                            <Fade
                                duration={800}
                                delay={index * 10}
                                style={{ height: "100%" }}
                            >
                                {renderCard(type, item)}
                            </Fade>
                        </ProductCardWrapper>
                    </ProductsCol>
                )})}
            </ProductsRow>
            {/* {isNextPage && (
                <ButtonWrapper>
                    <Button
                        onClick={handleLoadMore}
                        loading={loadingMore}
                        variant="secondary"
                        style={{
                            fontSize: 14,
                        }}
                        border="1px solid #f1f1f1"
                    >
                        <FormattedMessage id="loadMoreButton" defaultMessage="Load More" />
                    </Button>
                </ButtonWrapper>
            )} */}
        </>
    );
};
export default Products;
