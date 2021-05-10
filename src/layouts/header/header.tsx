import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { openModal } from "@redq/reuse-modal";
import { AuthContext } from "contexts/auth/auth.context";
import AuthenticationForm from "features/authentication-form";
import { RightMenu } from "./menu/right-menu/right-menu";
import { LeftMenu } from "./menu/left-menu/left-menu";
import {
    HeaderTopWrapper,
    WrapperSetionHeader,
    HeaderBottomWrapper,
    ListCatesRoot,
    CategoryItemRoot,
    ListCateLevel01,
    CategoryItemLevel01,
    ListCateLevel02,
    CategoryItemLevel02,
    TitleWithIcon,
    MegaMenu,
    MegaMenuItem,
} from "./header.style";
// import LogoImage from 'assets/images/logo.svg';
import LogoImage from "assets/images/logo.png";
import UserImage from "assets/images/user.jpg";
import { isCategoryPage } from "../is-home-page";
import Search from "features/search/search";
import Link from "next/link";
import { ArrowNext } from "assets/icons/ArrowNext";
// import navmenu from './nav-menu';
import { GET_CATEGORIES } from "graphql/query/category.query";
import categoriesApi from "api/categoriesApi";
import CategoryMenu from "./menu/category-menu";
import CategoriesMenu from "./menu/categories-menu/CategoriesMenu";

type Props = {
    className?: string;
    listCategories?: ICategory;
};
export interface ICategory {
    id: string;
    icon: string;
    title: string;
    slug: string;
    query: string;
    children: ICategory;
}

const Header: React.FC<Props> = ({ className, listCategories }) => {
    // const {
    //     authState: { isAuthenticated },
    //     authDispatch,
    // } = React.useContext<any>(AuthContext);
    const { pathname, query } = useRouter();
    // const handleLogout = () => {
    //     if (typeof window !== "undefined") {
    //         localStorage.removeItem("access_token");
    //         authDispatch({ type: "SIGN_OUT" });
    //         Router.push("/");
    //     }
    // };

    // const handleJoin = () => {
    //     authDispatch({
    //         type: "SIGNIN",
    //     });

    //     openModal({
    //         show: true,
    //         overlayClassName: "quick-view-overlay",
    //         closeOnClickOutside: true,
    //         component: AuthenticationForm,
    //         closeComponent: "",
    //         config: {
    //             enableResizing: false,
    //             disableDragging: true,
    //             className: "quick-view-modal",
    //             width: 458,
    //             height: "auto",
    //         },
    //     });
    // };

    const showSearch = isCategoryPage(query.type);

    return (
        <WrapperSetionHeader title="WRAPPER HEADER DESKTOP">
            <HeaderTopWrapper
                className={className}
                id="layout-header"
                title="HEADER - TOP"
            >
                <LeftMenu logo={LogoImage} />
                <Search minimal={true} className="headerSearch" />
                <RightMenu
                    // isAuthenticated={isAuthenticated}
                    // onJoin={handleJoin}
                    // onLogout={handleLogout}
                    avatar={UserImage}
                />
            </HeaderTopWrapper>


            <HeaderBottomWrapper title="PHẦN CATE TỔNG">

                {/* <CategoryMenu items={listCategories} /> */}
                <CategoriesMenu items={listCategories} />
            </HeaderBottomWrapper>
        </WrapperSetionHeader>
    );
};

export default Header;
