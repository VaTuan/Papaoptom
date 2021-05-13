import React from "react";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Modal } from "@redq/reuse-modal";
import Carousel from "components/carousel/carousel";

import {
    MainContentArea,
    ContentSection,
    OfferSection,
} from "assets/styles/pages.style";
// Static Data Import Here
import { siteOffers } from "site-settings/site-offers";
import { sitePages } from "site-settings/site-pages";
import { SEO } from "components/seo";
import { useRefScroll } from "utils/use-ref-scroll";
import { initializeApollo } from "utils/apollo";
import { ModalProvider } from "contexts/modal/modal.provider";
import ProductHomePage from "components/product-grid/product-list/product-list-homepage";

const CartPopUp = dynamic(() => import("features/carts/cart-popup"), {
    ssr: false,
});

const CategoryPage: React.FC<any> = ({ deviceType }) => {
    const { query } = useRouter();

    const { elRef: targetRef, scroll } = useRefScroll({
        percentOfElement: 0,
        percentOfContainer: 0,
        offsetPX: -110,
    });

    React.useEffect(() => {
        if (query.text || query.category) {
            scroll();
        }
    }, [query.text, query.category]);

    const PAGE_TYPE: any = query.type;
    const page = sitePages[PAGE_TYPE];

    return (
        <>
            <SEO title={page?.page_title} description={page?.page_description} />
            <ModalProvider>
                <Modal>
                    <OfferSection>
                        <div style={{ margin: "0 -10px" }}>
                            <Carousel deviceType={deviceType} data={siteOffers} />
                        </div>
                    </OfferSection>
                    <MainContentArea title="PHẦN NỘI DUNG CHÍNH">
                        <ContentSection title="PHẦN LIST SẢN PHẨM BÊN PHẢI">
                            <div ref={targetRef}>
                                <ProductHomePage
                                    type="shoes"
                                    deviceType={deviceType}
                                    fetchLimit={20}
                                />
                            </div>
                        </ContentSection>
                    </MainContentArea>

                    <CartPopUp deviceType={deviceType} />
                </Modal>
            </ModalProvider>
        </>
    );
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const apolloClient = initializeApollo();
    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
        revalidate: 1,
    };
};

export default CategoryPage;
