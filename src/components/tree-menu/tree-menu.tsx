import React, { useState, useEffect } from "react";
import { usePrevious, useMeasure } from "utils/hooks";
import { useSpring, animated } from "react-spring";
import { Frame, Title, Content, Header, IconWrapper } from "./tree-menu.style";
import { Button } from "components/button/button";
import { ArrowNext } from "assets/icons/ArrowNext";
import * as icons from "assets/icons/category-icons";
import { Attributes, FilterCheckBox, FilterSliderRange } from "../FilterCategory";
// Tree component
const Tree = React.memo(
    ({
        children,
        name,
        icon,
        onClick,
        dropdown,
        depth,
        defaultOpen = false,
    }: any) => {
        const [isOpen, setOpen] = useState(defaultOpen);

        useEffect(() => {
            setOpen(defaultOpen);
        }, [defaultOpen]);

        const previous = usePrevious(isOpen);

        const [bind, { height: viewHeight }] = useMeasure();

        const { height, opacity, transform } = useSpring<any>({
            from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
            to: {
                height: isOpen ? viewHeight : 0,
                opacity: isOpen ? 1 : 0,
                transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
            },
        });

        const Icon = ({ iconName, style }: { iconName: any; style?: any }) => {
            const TagName = icons[iconName];
            return !!TagName ? (
                <TagName style={style} />
            ) : (
                <p>Invalid icon {iconName}</p>
            );
        };

        return (
            <Frame depth={depth} title="1 --CATE">
                <Header
                    title="TITLE FILTER"
                    open={isOpen}
                    depth={depth}
                    className={depth}
                >
                    {icon && (
                        <IconWrapper depth={depth}>
                            <Icon iconName={icon} />
                        </IconWrapper>
                    )}
                    {/* <Title onClick={onClick}>{name}</Title> */}
                    <Title>{name}</Title>

                    {dropdown === true && (
                        <Button
                            onClick={() => setOpen(!isOpen)}
                            variant="text"
                            className="toggleButton"
                        >
                            <ArrowNext width="16px" />
                        </Button>
                    )}
                </Header>
                <Content
                    title="FILTER OPTION Ở ĐẤY"
                    style={{
                        opacity,
                        height: isOpen && previous === isOpen ? "auto" : height,
                        marginTop: isOpen && "15px",
                    }}
                >
                    <animated.div style={{ transform }} {...bind} children={children} />
                </Content>
            </Frame>
        );
    }
);

type Props = {
    className?: any;
    data: any;
    onClick: (slug: string) => void;
    active: string | string[];
    dataAttributes: any;
};

export const TreeMenu: React.FC<Props> = ({
    data,
    onClick,
    active,
    dataAttributes,
}) => {
    // console.log("data attributes : ", dataAttributes?.attributes);

    // function thực hiện render cate
    // created by tuanva
    const handlerRenderCate = (children) => {
        return children?.map((item, index) => (
            <Tree
                key={index}
                name={item?.name}
                dropdown={!item.values.length ? false : true}
                depth="parent"
            >
                {item.name === "Размер (на фото)" ? (
                    <FilterSliderRange />
                ) : (
                    <>
                        {item.values.map((item, index) => {
                            return <FilterCheckBox key={index} value={item.value} />;
                        })}
                        <Attributes attributes={item.values} />

                    </>
                )}
            </Tree>
        ));
    };

    return <>{handlerRenderCate(dataAttributes?.attributes)}</>;
};
