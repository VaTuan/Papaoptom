import React, { useCallback } from "react";
import Link from "next/link";
import getSlug from "utils/getSlug";
import {
    ItemLevel01,
    Level01,
    WrapperMenuMobile,
    IconRight,
    Level02,
    ItemLevel02,
    MenuWithTitle,
    MenuTitle,
    Level03,
    ItemLevel03,
    Level04,
    ItemLevel04,
    BackIcon
} from "./menu-mobile.style";
import { useAppDispatch } from "contexts/app/app.provider";
import { getLocalState, setLocalState } from "utils/localStorage";
import getCateId from "utils/getCateId";

type MobileMenu = {
    categories?: any;
};

const MobileMenu: React.FC<MobileMenu> = ({ categories }) => {
    const dispatch = useAppDispatch();
    /**
     *  fuciton thực hiện toggle menu mobile
     *   created by tuanva
     */
    const toggleDrawer = useCallback(() => {
        dispatch({
            type: "TOGGLE_DRAWER",
        });
    }, [dispatch]);

    const [dataLevel02, setDataLevel02] = React.useState(null);
    const [dataLevel03, setDataLevel03] = React.useState(null);
    const [dataLevel04, setDataLevel04] = React.useState(null);
    const [tabLevel, setTabLevel] = React.useState("01");

    const [slug01, setSlugLevel01] = React.useState(null);
    const [slug02, setSlugLevel02] = React.useState(null);
    const [slug03, setSlugLevel03] = React.useState(null);

    const BackButton = (props) => {
        const { backTab } = props;
        return (
            <BackIcon onClick={() => setTabLevel(backTab)}>
                <i className="fas fa-arrow-alt-left" />
            </BackIcon>
        );
    };

    const SectionLevel01 = (): any => {
        const handelClick = (e, item) => {
            setLocalState("query", item?.query);
            toggleDrawer();
        };

        // icon
        function ArrowRight({ level01 }) {
            return (
                <IconRight
                    className="arrow_right"
                    onClick={() => onFilterCate(level01)}
                >
                    <i className="fas fa-long-arrow-alt-right" />
                </IconRight>
            );
        }
        const onFilterCate = (level01) => {
            const input = [...categories]?.filter((x) => x.id === level01.id);
            setDataLevel02(input);
            setTabLevel("02");
            setSlugLevel01(getSlug(level01?.slug));
        };

        return (
            <Level01>
                {categories?.map((level01) => {
                    const slugLevel01 = getSlug(level01?.slug);
                    const cateId01 = getCateId(level01);
                    return (
                        <ItemLevel01>
                            <Link href={`/${slugLevel01}/${cateId01}`}>
                                <a onClick={(e) => handelClick(e, level01)}>{level01.title}</a>
                            </Link>
                            {level01?.children?.length > 0 && (
                                <ArrowRight level01={level01} />
                            )}
                        </ItemLevel01>
                    );
                })}
            </Level01>
        );
    };

    const SectionLevel02 = (): any => {
        const handelClick = (e, item) => {
            setLocalState("query", item?.query);
            toggleDrawer();
        };

        // icon
        function ArrowRight({ input }) {
            return (
                <IconRight className="arrow_right" onClick={() => onFilterCate(input)}>
                    <i className="fas fa-long-arrow-alt-right" />
                </IconRight>
            );
        }
        const onFilterCate = (level01) => {
            setDataLevel03(level01);
            setTabLevel("03");
            setSlugLevel02(getSlug(level01?.slug));
        };

        return (
            <Level02>
                {[...dataLevel02]?.map((item) => {
                    return (
                        <>
                            <BackButton backTab="01" />
                            {item?.children?.length > 0 ? (
                                <>
                                    {item?.children?.map((level02) => {
                                        if (!level02?.query && level02?.children?.length > 0) {
                                            return (
                                                <MenuWithTitle>
                                                    <MenuTitle>{level02?.title}</MenuTitle>
                                                    {level02?.children.map((x) => {
                                                        const slugLevel02 = getSlug(x?.slug);
                                                        const cateId02 = getCateId(x);
                                                        return (
                                                            <ItemLevel01>
                                                                <Link
                                                                    href={`/${slug01}/${slugLevel02}/${cateId02}`}
                                                                >
                                                                    <a onClick={(e) => handelClick(e, x)}>
                                                                        {x.title}
                                                                    </a>
                                                                </Link>
                                                                {x?.children?.length > 0 && (
                                                                    <ArrowRight input={x} />
                                                                )}
                                                            </ItemLevel01>
                                                        );
                                                    })}
                                                </MenuWithTitle>
                                            );
                                        }
                                        return <p>{level02?.title}</p>;
                                    })}
                                </>
                            ) : (
                                <BackButton backTab="01" />
                            )}
                        </>
                    );
                })}
            </Level02>
        );
    };

    const SectionLevel03 = (): any => {
        const handelClick = (e, item) => {
            setLocalState("query", item?.query);
            toggleDrawer();
        };

        // icon
        function ArrowRight({ input }) {
            return (
                <IconRight className="arrow_right" onClick={() => onFilterCate(input)}>
                    <i className="fas fa-long-arrow-alt-right" />
                </IconRight>
            );
        }
        const onFilterCate = (level03) => {
            setDataLevel04(level03);
            setTabLevel("04");
            setSlugLevel03(getSlug(level03?.slug));
        };

        return (
            <Level03>
                <>
                    <BackButton backTab="02" />

                    <>
                        {dataLevel03?.children?.map((level03) => {
                            const slugLevel03_c = getSlug(level03?.slug);
                            const cateId03_c = getCateId(level03);

                            if (!level03?.query && level03?.children?.length > 0) {
                                return (
                                    <MenuWithTitle>
                                        <MenuTitle>{level03?.title}</MenuTitle>
                                        {level03?.children.map((x) => {
                                            const slugLevel03 = getSlug(x?.slug);
                                            const cateId03 = getCateId(x);
                                            return (
                                                <ItemLevel01>
                                                    <Link
                                                        href={`/${slug01}/${slug02}/${slugLevel03}/${cateId03}`}
                                                    >
                                                        <a onClick={(e) => handelClick(e, x)}>{x.title}</a>
                                                    </Link>
                                                    {x?.children?.length > 0 && <ArrowRight input={x} />}
                                                </ItemLevel01>
                                            );
                                        })}
                                    </MenuWithTitle>
                                );
                            }
                            return (
                                <ItemLevel01>
                                    <Link
                                        href={`/${slug01}/${slug02}/${slugLevel03_c}/${cateId03_c}`}
                                    >
                                        <a onClick={(e) => handelClick(e, level03)}>
                                            {level03.title}
                                        </a>
                                    </Link>
                                </ItemLevel01>
                            );
                        })}
                    </>
                </>
            </Level03>
        );
    };

    const SectionLevel04 = (): any => {
        const handelClick = (e, item) => {
            setLocalState("query", item?.query);
            toggleDrawer();
        };

        // icon
        function ArrowRight({ input }) {
            return (
                <IconRight className="arrow_right" onClick={() => onFilterCate(input)}>
                    <i className="fas fa-long-arrow-alt-right" />
                </IconRight>
            );
        }
        const onFilterCate = (level03) => {
            setTabLevel("05");
        };

        return (
            <Level04>
                <>
                    <BackButton backTab="03" />

                    <>
                        {dataLevel04?.children?.map((level04) => {
                            const slugLevel04_c = getSlug(level04?.slug);
                            const cateId04_c = getCateId(level04);
                            if (!level04?.query && level04?.children?.length > 0) {
                                return (
                                    <MenuWithTitle>
                                        <MenuTitle>{level04?.title}</MenuTitle>
                                        {level04?.children.map((x) => {
                                            const slugLevel04 = getSlug(x?.slug);
                                            const cateId04 = getCateId(x);
                                            return (
                                                <ItemLevel01>
                                                    <Link
                                                        href={`/${slug01}/${slug02}/${slug03}/${slugLevel04}/${cateId04}`}
                                                    >
                                                        <a onClick={(e) => handelClick(e, x)}>{x.title}</a>
                                                    </Link>
                                                    {x?.children?.length > 0 && <ArrowRight input={x} />}
                                                </ItemLevel01>
                                            );
                                        })}
                                    </MenuWithTitle>
                                );
                            }
                            return (
                                <ItemLevel01>
                                    <Link
                                        href={`/${slug01}/${slug02}/${slug03}/${slugLevel04_c}/${cateId04_c}`}
                                    >
                                        <a onClick={(e) => handelClick(e, level04)}>
                                            {level04.title}
                                        </a>
                                    </Link>
                                </ItemLevel01>
                            );
                        })}
                    </>
                </>
            </Level04>
        );
    };

    const renderContent = (): any => {
        switch (tabLevel) {
            case "01":
                return <SectionLevel01 />;
            case "02":
                return <SectionLevel02 />;
            case "03":
                return <SectionLevel03 />;
            case "04":
                return <SectionLevel04 />;
            default:
                break;
        }
    };
    return <WrapperMenuMobile>{renderContent()}</WrapperMenuMobile>;
};

export default MobileMenu;
