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
                {
                    childrenId: 5345345,
                    title: "Ботинки",
                    slug: "ботинки",
                    childrenLevel02: [
                        {
                            childrenIdLevel02: 5345345,
                            title: "item1",
                            slug: "ботинки021",
                        },
                        {
                            childrenIdLevel02: 53454345,
                            title: "item1",
                            slug: "ботинки031",
                        },
                        {
                            childrenIdLevel02: 53453645,
                            title: "item1",
                            slug: "ботинки041",
                        },
                    ],
                },
                {
                    childrenId: 12312312314234,
                    title: "Туфли",
                    slug: "туфли",
                    childrenLevel02: [
                        {
                            childrenIdLevel02: 5345345,
                            title: "item02",
                            slug: "ботинки022",
                        },
                        {
                            childrenIdLevel02: 53454345,
                            title: "item02",
                            slug: "ботинки032",
                        },
                        {
                            childrenIdLevel02: 53453645,
                            title: "item02",
                            slug: "ботинки042",
                        },
                        {
                            childrenIdLevel02: 53453401895,
                            title: "item02",
                            slug: "ботинки052",
                        },
                    ],
                },
                {
                    childrenId: 34554345435345,
                    title: "Сандалии",
                    slug: "сандалии",
                    childrenLevel02: [
                        {
                            childrenIdLevel02: 5345345,
                            title: "item03",
                            slug: "ботинки023",
                        },
                        {
                            childrenIdLevel02: 53454345,
                            title: "item03",
                            slug: "ботинки033",
                        },
                        {
                            childrenIdLevel02: 53453645,
                            title: "item03",
                            slug: "ботинки043",
                        },
                        {
                            childrenIdLevel02: 53453401895,
                            title: "item03",
                            slug: "ботинки053",
                        },
                    ],
                },
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
                {
                    childrenId: 5345345,
                    title: "Ботинки",
                    slug: "ботинки",
                    childrenLevel02: [
                        {
                            childrenIdLevel02: 5345345,
                            title: "Ботинки02",
                            slug: "ботинки02",
                        },
                        {
                            childrenIdLevel02: 53454345,
                            title: "Ботинки03",
                            slug: "ботинки03",
                        },
                        {
                            childrenIdLevel02: 53453645,
                            title: "Ботинки04",
                            slug: "ботинки04",
                        },
                        {
                            childrenIdLevel02: 53453401895,
                            title: "Ботинки05",
                            slug: "ботинки05",
                        },
                    ],
                },
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
                    {listCategories.map((item, index) => (
                        <CategoryItemRoot key={index}>
                            <Link
                                scroll={true}
                                // as={`/shoes/${item.slug}&cate=${item.title}`}
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
                                                            cate01: children.title,
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
                                                                        <Link href={`/shoes`} scroll={true}>
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
