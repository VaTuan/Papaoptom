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
    TitleWithIcon
} from "./header.style";
// import LogoImage from 'assets/images/logo.svg';
import LogoImage from "assets/images/logo.png";
import UserImage from "assets/images/user.jpg";
import { isCategoryPage } from "../is-home-page";
import Search from "features/search/search";
import Link from "next/link";
import { ArrowNext } from "assets/icons/ArrowNext";
// import navmenu from './nav-menu';
import { listCategories } from 'utils/fakeDataHeader'
import { groupBy } from "utils/groupBy";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "graphql/query/category.query";
import { GET_HEADER } from "graphql/query/header.query";
type Props = {
    className?: string;
};

const Header: React.FC<Props> = ({ className }) => {
    const {
        authState: { isAuthenticated },
        authDispatch,
    } = React.useContext<any>(AuthContext);
    const { pathname, query } = useRouter();
    const handleLogout = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("access_token");
            authDispatch({ type: "SIGN_OUT" });
            Router.push("/");
        }
    };

    const handleJoin = () => {
        authDispatch({
            type: "SIGNIN",
        });

        openModal({
            show: true,
            overlayClassName: "quick-view-overlay",
            closeOnClickOutside: true,
            component: AuthenticationForm,
            closeComponent: "",
            config: {
                enableResizing: false,
                disableDragging: true,
                className: "quick-view-modal",
                width: 458,
                height: "auto",
            },
        });
    };

    const showSearch = isCategoryPage(query.type);

    const test = groupBy(listCategories, "slug")
    console.log('test cái : ', test);

    const { data, loading, error } = useQuery(GET_HEADER);

    console.log('data moiws : ', data);



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
                    isAuthenticated={isAuthenticated}
                    onJoin={handleJoin}
                    onLogout={handleLogout}
                    avatar={UserImage}
                />
            </HeaderTopWrapper>

            <HeaderBottomWrapper title="PHẦN CATE TỔNG">
                <ListCatesRoot>
                    {data?.categories?.map((item, index) => (
                        <CategoryItemRoot key={index}>
                            <Link
                                scroll={true}
                                // as={`/shoes/${item.slug}`}
                                shallow={true}
                                href={{
                                    pathname: "/shoes/[level01]",
                                    query: { level01: item.slug, cate: item.title },
                                }}
                            >
                                <a>{item.title}</a>
                            </Link>

                            {/* 
                            Phần cate con */}
                            {item.children.length > 0 && (
                                <ListCateLevel01 className="list_cate__level01">
                                    {item.children.map((children, index) => {
                                        console.log(
                                            "children : ",
                                            children?.childrenLevel02?.length
                                        );

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
                                                        },
                                                    }}

                                                    scroll={true}
                                                >
                                                    <TitleWithIcon>
                                                        <a>{children.title}</a>
                                                        {children.childrenLevel02?.length > 0 && (
                                                            <ArrowNext width='13' />
                                                        )}
                                                    </TitleWithIcon>
                                                </Link>

                                                {/* check nếu length > 0 thì mới có cate 2  */}
                                                {children?.childrenLevel02?.length > 0 && (
                                                    <ListCateLevel02 className="list_cate__level02">
                                                        {children?.childrenLevel02?.map(
                                                            (childrenLevel02, index) => {
                                                                return (
                                                                    <CategoryItemLevel02
                                                                        className="cate_item__level02"
                                                                        key={index}
                                                                    >
                                                                        <Link

                                                                            href={{
                                                                                pathname: "/shoes/[level01]/[level02]/[level03]",
                                                                                query: {
                                                                                    level01: item.slug,
                                                                                    level02: children.slug,
                                                                                    level03: childrenLevel02.slug,
                                                                                    cate01: item.title,
                                                                                    cate02: children.title,
                                                                                    cate03: childrenLevel02.title
                                                                                },
                                                                            }}
                                                                            scroll={true}>
                                                                            <a>{childrenLevel02.title}</a>
                                                                        </Link>
                                                                    </CategoryItemLevel02>
                                                                );
                                                            }
                                                        )}
                                                    </ListCateLevel02>
                                                )}
                                            </CategoryItemLevel01>
                                        );
                                    })}
                                </ListCateLevel01>
                            )}
                        </CategoryItemRoot>
                    ))}
                </ListCatesRoot>
            </HeaderBottomWrapper>
        </WrapperSetionHeader>
    );
};

export default Header;
