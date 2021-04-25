import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { ModalProvider } from "contexts/modal/modal.provider";
import { Modal } from "@redq/reuse-modal";
import { SEO } from "components/seo";
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
} from "assets/styles/pages.style";
import { siteOffers } from "site-settings/site-offers";

import Carousel from "components/carousel/carousel";

const CartPopUp = dynamic(() => import("features/carts/cart-popup"), {
  ssr: false,
});
const Sidebar = dynamic(() => import("layouts/sidebar/sidebar"));
const Products = dynamic(() =>
  import("components/product-grid/product-list/product-list")
);

function ShoesFilterPage(props) {
  const { deviceType } = props;
  const router = useRouter();

  return (
    <>
      <SEO title="title for seo" description="description for seo" />
      <ModalProvider>
        <Modal>
          <OfferSection>
            <div style={{ margin: "0 -10px" }}>
              <Carousel deviceType={deviceType} data={siteOffers} />
            </div>
          </OfferSection>
          <MobileCarouselDropdown>
            <Sidebar deviceType={deviceType} />
          </MobileCarouselDropdown>

          <MainContentArea title="PHẦN NỘI DUNG CHÍNH">
            <SidebarSection title="PHẦN SIDE BAR BÊN TRÁI">
              <Sidebar deviceType={deviceType} />
            </SidebarSection>

            <ContentSection title="PHẦN LIST SẢN PHẨM BÊN PHẢI">
              <Products deviceType={deviceType} fetchLimit={20} />
            </ContentSection>
          </MainContentArea>

          <CartPopUp deviceType={deviceType} />
        </Modal>
      </ModalProvider>
    </>
  );
}

export default ShoesFilterPage;
