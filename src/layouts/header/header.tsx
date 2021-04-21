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
} from "./header.style";
// import LogoImage from 'assets/images/logo.svg';
import LogoImage from "assets/images/logo.png";
import UserImage from "assets/images/user.jpg";
import { isCategoryPage } from "../is-home-page";
import Search from "features/search/search";
import Link from "next/link";
// import navmenu from './nav-menu';

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

    // const fake data for cate
    // новинки", "детская обувь", "мужская обувь", "женская обувь", "аксессуары", "распродажа"

    // ботинки", "туфли", "сандалии
    const listCategories = [
        {
            id: 1,
            title: "НОВИНКИ",
            slug: "новинки",
            children: [
                { childrenId: 5345345, title: "Ботинки", slug: "ботинки" },
                { childrenId: 12312312314234, title: "Туфли", slug: "туфли" },
                { childrenId: 34554345435345, title: "Сандалии", slug: "сандалии" },
            ],
        },
        {
            id: 2,
            title: "ДЕТСКАЯ ОБУВЬ",
            slug: "детская-обувь",
            children: [],
        },
        {
            id: 3,
            title: "МУЖСКАЯ ОБУВЬ",
            slug: "мужская-обувь",
            children: [
                { childrenId: 5345345, title: "Ботинки", slug: "ботинки" },
                { childrenId: 12312312314234, title: "Туфли", slug: "туфли" },
                { childrenId: 34554345435345, title: "Сандалии", slug: "сандалии" },
            ],
        },
        {
            id: 4,
            title: "ЖЕНСКАЯ ОБУВЬ",
            slug: "женская-обувь",
            children: [
                { childrenId: 5345345, title: "Ботинки", slug: "ботинки" },
                { childrenId: 12312312314234, title: "Туфли", slug: "туфли" },
                { childrenId: 34554345435345, title: "Сандалии", slug: "сандалии" },
            ],
        },
        {
            id: 5,
            title: "АКСЕССУАРЫ",
            slug: "аксессуары",
            children: [
                { childrenId: 5345345, title: "Ботинки", slug: "ботинки" },
                { childrenId: 12312312314234, title: "Туфли", slug: "туфли" },
                { childrenId: 34554345435345, title: "Сандалии", slug: "сандалии" },
            ],
        },
        {
            id: 6,
            title: "РАСПРОДАЖА",
            slug: "распродажа",
            children: [
                { childrenId: 5345345, title: "Ботинки", slug: "ботинки" },
                { childrenId: 12312312314234, title: "Туфли", slug: "туфли" },
                { childrenId: 34554345435345, title: "Сандалии", slug: "сандалии" },
            ],
        },
    ];

    const showSearch = isCategoryPage(query.type);
    // function show() {
    //     document.getElementById("menuuu").style.display = "block";
    //     document.getElementById("btn2").style.display = "block";
    // }
    // function hidd() {
    //     document.getElementById("menuuu").style.display = "none";
    //     document.getElementById("btn2").style.display = "none";
    // }


    return (
        <WrapperSetionHeader title="WRAPPER HEADER DESKTOP">
            <HeaderTopWrapper
                className={className}
                id="layout-header"
                title="HEADER - TOP"
            >
                <LeftMenu logo={LogoImage} />
                {showSearch && <Search minimal={true} className="headerSearch" />}
                <RightMenu
                    isAuthenticated={isAuthenticated}
                    onJoin={handleJoin}
                    onLogout={handleLogout}
                    avatar={UserImage}
                />
            </HeaderTopWrapper>

            <HeaderBottomWrapper title="PHẦN CATE TỔNG">
                <ListCatesRoot>
                    {listCategories.map((item, index) => (
                        <CategoryItemRoot key={index}>
                            <Link href={`/shoes/${item.slug}`}>
                                <a>{item.title}</a>
                            </Link>

                            {/* 
                            Phần cate con */}
                            {item.children.length > 0 && (
                                <ListCateLevel01 className="list_cate__level01">
                                    {item.children.map((children, index) => (
                                        <CategoryItemLevel01
                                            className="cate_item__level01"
                                            key={index}
                                        >
                                            <Link href={`/shoes/${item.slug}/${children.slug}`}>
                                                <a>{children.title}</a>
                                            </Link>
                                        </CategoryItemLevel01>
                                    ))}
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
