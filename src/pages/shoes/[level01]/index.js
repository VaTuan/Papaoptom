import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { ModalProvider } from "contexts/modal/modal.provider";
import { Modal } from "@redq/reuse-modal";
import styled from "styled-components";
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
      <SEO title="Page root cate" description="description for seo" />
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
              <Sidebar
                deviceType={deviceType}
                type="shoes"
                cate={router.query.cate}
              />
            </SidebarSection>

            <ContentSection title="PHẦN LIST SẢN PHẨM BÊN PHẢI">
              <SectionTopRight>
                <TotalProduct>
                  Количество товаров: <strong>123123</strong>
                </TotalProduct>

                <SectionSortSideCateName>
                  <h1>{router.query.cate}</h1>
                  <SelectOption>
                    <Select>
                      <Option>Theo hàng mới</Option>
                      <Option>Theo hàng bán chạy</Option>
                      <Option>Theo hàng giảm giá</Option>
                      <Option>Từ rẻ đến đắt</Option>
                      <Option>Từ đắt đén rẻ</Option>
                    </Select>
                  </SelectOption>
                </SectionSortSideCateName>
              </SectionTopRight>

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

const SectionTopRight = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
    color: #213779;
    background: linear-gradient(90deg, #213779, #4fb7e4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const TotalProduct = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;

const SectionSortSideCateName = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectOption = styled.div`
  position: relative;
  &:after {
    top: 50%;
    transform: translateY(-50%);
    right: 9px;
    position: absolute;
    content: "\f107";
    font-size: 16px;
    color: #000;
    font-family: "Font Awesome 5 Pro Regular";
  }
`;
const Select = styled.select`
  outline: none;
  width: 100%;
  padding-right: 30px !important;
  margin: 0;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  border-radius: 2px;
  padding: 9px 5px;
  border: 1px solid #c9c9c9;
  color: #213779;
  &:hover {
    border-color: #255eed;
    transition: 0.6s;
  }
`;
const Option = styled.option``;
