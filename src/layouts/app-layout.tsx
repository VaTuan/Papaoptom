import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Sticky from "react-stickynode";
import { useAppState } from "contexts/app/app.provider";
import Header from "./header/header";
import { LayoutWrapper } from "./layout.style";
import { isCategoryPage } from "./is-home-page";
import Footer from "./footer";
import About from "./About";

const MobileHeader = dynamic(() => import("./header/mobile-header"), {
    ssr: false,
});

type LayoutProps = {
    className?: string;
    token?: string;
    categories: any;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
    className,
    children,
    categories,
    // deviceType: { mobile, tablet, desktop },
    token,
}) => {
    const { pathname, query } = useRouter();
    const isSticky = useAppState("isSticky");

    const isHomePage = isCategoryPage(query.type) || pathname === "/bakery";


    return (
        <LayoutWrapper className={`layoutWrapper ${className}`} title="LAY OUT">
            <Sticky enabled={isSticky} innerZ={1001}>
                <MobileHeader
                    listCategories={categories}
                    className={`${isSticky ? "sticky" : "sticky"} ${isHomePage ? "home" : ""
                        } desktop`}
                />

                <Header
                    listCategories={categories}
                    className={`${isSticky ? "sticky" : "sticky"} ${isHomePage ? "home" : ""
                        }`}
                />
            </Sticky>
            {children}
            <About/>
            <Footer />
        </LayoutWrapper>
    );
};

export default Layout;
