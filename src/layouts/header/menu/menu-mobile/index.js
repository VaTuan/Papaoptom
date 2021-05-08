import React, { useState } from "react";
import styled from "styled-components";
import { listCategories } from "utils/fakeDataHeader";
import Link from "next/link";
import { ArrowNext } from "assets/icons/ArrowNext";

export default function MenuMobile(props) {
  console.log("hieutt", listCategories);
  const [isShow, setIsShow] = useState();
  const [toggleItem, setToggleItem] = useState(false);
  const [toggle, setToggle] = useState(false);

  /**
   * TODO: func thuc hien click mo..
   * ?sdfsdfsdf
   * !sdfkslkdfjsdf
   * *ksjdfjksndfsdf
   * @param {} value
   */
  const handelClick = (value) => {
    console.log("====================================");
    console.log("value : ", value);
    console.log("====================================");
    setIsShow(value);
    setToggle(true);
  };
  const datatest = listCategories.map((item) => item);
  console.log("hieu", datatest, isShow);
  /**
   * todo filter theo id click
   */
  const datalistmenu = datatest.filter((x) => x.id === isShow);
  console.log("data click id menu");
  const aaa = datalistmenu[0]?.children.map((item) => item);
  console.log("dulieu 3 th", aaa);
  // const bbb = aaa?.childrenLevel02[0].map((item) => item);
  // console.log({ bbb });

  const handelClickItemMenu = () => {
    setToggleItem(!toggleItem);
  };
  console.log(props);
  return (
    <Wrapper value={isShow} toggle={toggle}>
      {listCategories.map((item, index) => (
        <CategoryItemRoot key={index}>
          <div
            scroll={true}
            shallow={true}
            href={{
              pathname: "/shoes/[level01]",
              query: { level01: item.slug, cate: item.title },
            }}
          >
            <a>{item.title}</a>
            {item.children.length > 0 ? (
              <ArrowNext width="13" onClick={() => handelClick(item.id)} />
            ) : (
              ""
            )}
          </div>

          {/* Phần cate con */}
          {item.children.length > 0 && (
            <ListCateLevel01
              ishow={isShow}
              className={isShow === true ? "show" : "hide"}
            >
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
                        },
                      }}
                      scroll={true}
                    >
                      <TitleWithIcon>
                        <a>{children.title}</a>
                        {children.childrenLevel02?.length > 0 && (
                          <ArrowNext width="13" />
                        )}
                      </TitleWithIcon>
                    </Link>
                  </CategoryItemLevel01>
                );
              })}
            </ListCateLevel01>
          )}
        </CategoryItemRoot>
      ))}
      {isShow === datalistmenu[0]?.id ? (
        <>
          <div className="list-menu">
            {datalistmenu[0]?.children.map((index, key) => (
              <li key={key}>
                {index.title}
                <ArrowNext width="13" />
              </li>
            ))}
            {toggleItem === false ? (
              <div className="buttonbackcap1" onClick={() => setToggle(false)}>
                <span>
                  <i className="far fa-long-arrow-left"></i>
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        ""
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* border-bottom: 1px solid #cccccc; */
  padding: 0 10px;
  padding-top: 10px;
  .list-menu {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100vh;
    left: 0;
    background-color: white;
    color: #101010;
    z-index: 1;
    display: ${({ toggle }) => (toggle === true ? "block" : "none")};
    padding: 20px;
    padding-top: 50px;
    .buttonbackcap1 {
      position: absolute;
      left: 35px;
      top: 20px;

      span {
        i {
          font-size: 18px;
          color: #77798c;
        }
      }
    }
    li {
      padding: 10px;
      font-size: 16px;
      .menucap2 {
        padding: 20px;
        padding-top: 50px;
        font-size: 16px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: gray;
        width: 100%;
        height: 100vh;
        .buttonback {
          position: absolute;
          left: 35px;
          top: 15px;
        }
        li {
        }
      }
    }
  }
`;
const CategoryItemRoot = styled.li`
  padding: 10px 20px 10px;
  border-radius: 3px;
  svg {
    margin-left: 10px;
  }
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  a {
    color: #101010;
  }
`;
const ListCateLevel01 = styled.ul`
  /* display: ${({ isShow }) => (isShow === true ? "block" : "none")}; */
`;
const CategoryItemLevel01 = styled.li``;
const TitleWithIcon = styled.div`
  background-color: red;
`;
