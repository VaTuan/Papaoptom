import React from "react";
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

type Props = {
    className?: string;
    listCategories?: any
};

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
                <ListCatesRoot>
                    {listCategories?.map((item, index) => (
                        <CategoryItemRoot key={index}>
                            <Link
                                scroll={true}
                                as={`/shoes/${item.slug}`}
                                shallow={true}
                                href={{
                                    pathname: "/shoes/[level01]",
                                    query: { level01: item.slug, cate: item.title, cateid: item.id },
                                }}
                            >
                                <a>{item.title}</a>
                            </Link>

                            {/* 
                            Phần cate con */}
                            {item.children.length > 0 && (
                                <>
                                    {/* Nếu mà cate con lớn hơn 7 thì sẽ hiển thị ra mega menu */}
                                    {item.children.length > 7 ? (
                                        <>
                                            <MegaMenu className="mega_menu">
                                                {item.children.map((children, index) => (
                                                    <Link
                                                        href={{
                                                            pathname: "/shoes/[level01]/[level02]",
                                                            query: {
                                                                level01: item.slug,
                                                                level02: children.slug,
                                                                cate01: item.title,
                                                                cate02: children.title,
                                                                cateid: children.id
                                                            },
                                                        }}
                                                        scroll={true}
                                                        key={index}
                                                    >
                                                        <a>
                                                            <MegaMenuItem>
                                                                {children.title}
                                                            </MegaMenuItem>
                                                        </a>
                                                    </Link>
                                                ))}
                                            </MegaMenu>
                                        </>
                                    ) : (
                                        <ListCateLevel01 className="list_cate__level01">
                                            {item.children.map((children, index) => {
                                                return (
                                                    <CategoryItemLevel01
                                                        className="cate_item__level01"
                                                        key={index}
                                                    >
                                                        <Link
                                                            href={{
                                                                pathname: "/shoes/[level01]/[level02]",
                                                                query: {
                                                                    level01: item.slug,
                                                                    level02: children.slug,
                                                                    cate01: item.title,
                                                                    cate02: children.title,
                                                                    cateid: children.id
                                                                },
                                                            }}
                                                            scroll={true}
                                                        >
                                                            {children.title}
                                                        </Link>
                                                    </CategoryItemLevel01>
                                                );
                                            })}
                                        </ListCateLevel01>
                                    )}
                                </>
                            )}
                        </CategoryItemRoot>
                    ))}
                </ListCatesRoot>
            </HeaderBottomWrapper>
        </WrapperSetionHeader>
    );
};

export default Header;
