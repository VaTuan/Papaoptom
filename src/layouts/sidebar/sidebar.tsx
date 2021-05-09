import React, { useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import CategoryWalker from "components/category-walker/category-walker";
import {
    SidebarLoader,
    SidebarMobileLoader,
} from "components/placeholder/placeholder";
import { Scrollbar } from "components/scrollbar/scrollbar";
import { TreeMenu } from "components/tree-menu/tree-menu";
import { useAppDispatch, useAppState } from "contexts/app/app.provider";
import { useRouter } from "next/router";
import Sticky from "react-stickynode";
import {
    CategoryWrapper,
    PopoverWrapper,
    SidebarWrapper,
    TreeWrapper,
} from "./sidebar.style";
import { Button } from "components/button/button";
import styled from "styled-components";
import { GET_ATTRIBUTES_BY_CATE_ID } from "graphql/query/attributes.query";

type SidebarCategoryProps = {
    deviceType: {
        mobile: string;
        tablet: string;
        desktop: boolean;
    };
    type: string;
    categoryId: number;
};

const SidebarCategory: React.FC<SidebarCategoryProps> = ({
    deviceType: { mobile, tablet, desktop },
    type,
    categoryId,
}) => {
    const router = useRouter();


    console.log('====================================');
    console.log('cate id : ', categoryId);
    console.log('====================================');


    const { loading, data } = useQuery(GET_ATTRIBUTES_BY_CATE_ID, {
        variables: { categoryId },
    });

    const { pathname, query } = router;
    const selectedQueries = query.category;

    const category = useAppState("category");
    const dispatch = useAppDispatch();

    const onCategoryClick = (slug: string) => {
        console.log(slug);

        dispatch({ type: "SET_CATEGORY", payload: slug });

        const { type, ...rest } = query;
        if (type) {
            router.push(
                {
                    pathname,
                    query: { ...rest, category: slug },
                },
                {
                    pathname: `/${type}`,
                    query: { ...rest, category: slug },
                }
            );
        } else {
            router.push({
                pathname,
                query: { ...rest, category: slug },
            });
        }
    };
    const isSidebarSticky = useAppState("isSidebarSticky");

    if (!data || loading) {
        if (mobile || tablet) {
            return <SidebarMobileLoader />;
        }
        return <SidebarLoader />;
    }

    return (
        <CategoryWrapper>
            <PopoverWrapper title="PopoverWrapper nè">
                <CategoryWalker>
                    <TreeMenu
                        data={data.categories}
                        onClick={onCategoryClick}
                        active={selectedQueries}
                        dataAttributes={data}
                    />
                </CategoryWalker>
            </PopoverWrapper>

            <SidebarWrapper title="SIDEBAR WRAPPER">
                <Sticky enabled={isSidebarSticky} top={156}>
                    <Scrollbar className="sidebar-scrollbar">
                        <TreeWrapper>
                            <TreeMenu
                                data={data.categories}
                                onClick={onCategoryClick}
                                active={selectedQueries}
                                dataAttributes={data}
                            />
                        </TreeWrapper>

                        <WrapperButton>
                            <ButtonSubmit>Показать (23)</ButtonSubmit>
                            <ButtonCancle>
                                <span>Сбросить</span>
                            </ButtonCancle>
                        </WrapperButton>
                    </Scrollbar>
                </Sticky>
            </SidebarWrapper>
        </CategoryWrapper>
    );
};

export default SidebarCategory;

const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  margin: 30px 0px;
  box-sizing: border-box;
  background-color: #fff;
`;
const ButtonSubmit = styled.button`
  background-color: #255eed;
  border: 1px solid #255eed;
  border-radius: 2px;
  outline: none;
  color: #fff;
  width: 100%;
  padding: 8px 0px;
  margin-bottom: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
`;
const ButtonCancle = styled.button`
  border: 1px solid #255eed;
  border-radius: 2px;
  outline: none;
  color: #255eed;
  width: 100%;
  padding: 8px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  transition: 0.4s ease-in-out;

  &:before {
    content: "";
    display: inline-block;
    width: 0;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.4s;
    background: #213779;
  }
  span {
    z-index: 9;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    span {
      color: #fff !important;
    }

    &:before {
      width: 100%;
    }
  }
`;
