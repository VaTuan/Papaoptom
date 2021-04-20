import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "graphql/query/category.query";
import CategoryWalker from "components/category-walker/category-walker";
import { SidebarLoader, SidebarMobileLoader } from "components/placeholder/placeholder";
import { Scrollbar } from "components/scrollbar/scrollbar";
import { TreeMenu } from "components/tree-menu/tree-menu";
import { useAppDispatch, useAppState } from "contexts/app/app.provider";
import { useRouter } from "next/router";
import Sticky from "react-stickynode";
import { CategoryWrapper, PopoverWrapper, SidebarWrapper, TreeWrapper } from "./sidebar.style";

type SidebarCategoryProps = {
    deviceType: {
        mobile: string;
        tablet: string;
        desktop: boolean;
    };
    type: string;
};

const SidebarCategory: React.FC<SidebarCategoryProps> = ({ deviceType: { mobile, tablet, desktop }, type }) => {
    const router = useRouter();
    // const { data, loading } = useQuery(GET_CATEGORIES, {

    //  api caller get cate
    const { loading, data } = useQuery(GET_CATEGORIES, {
        variables: { type },
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
                },
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
            <PopoverWrapper title='PopoverWrapper nè'>
                <CategoryWalker>
                    <TreeMenu data={data.categories} onClick={onCategoryClick} active={selectedQueries} />
                </CategoryWalker>
            </PopoverWrapper>

            <SidebarWrapper title='SIDEBAR WRAPPER'>
                <Sticky enabled={isSidebarSticky} top={156}>
                    <Scrollbar className="sidebar-scrollbar">
                        <TreeWrapper>
                            <TreeMenu data={data.categories} onClick={onCategoryClick} active={selectedQueries} />
                        </TreeWrapper>
                    </Scrollbar>
                </Sticky>
            </SidebarWrapper>
        </CategoryWrapper >
    );
};

export default SidebarCategory;

