import React, { useState } from "react";
import styled from "styled-components";
import { listCategories } from "utils/fakeDataHeader";
import Link from "next/link";
import { ArrowNext } from "assets/icons/ArrowNext";

export default function MenuMobile(props) {
  const [isShow, setIsShow] = useState();
  const [valueMenuCap2, setValueMenuCap2] = useState();
  const [valueMenuCap3, setValueMenuCap3] = useState();

  const [toggleItem, setToggleItem] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggleMenuCap2, setToggleMenuCap2] = useState(false);
  const [toggleMenuCap3, setToggleMenuCap3] = useState(false);

  const handelClick = (value) => {
    setIsShow(value);
    setToggle(true);
  };

  const dataMenu = props.dataMenuMobile.map((item) => item);
  /**
   * todo filter theo id click
   */

  const datalistmenu = dataMenu.filter((x) => x.id === isShow);
  console.log("data click id menu", datalistmenu);
  const aaa = datalistmenu[0]?.children.map((item) => item);
  console.log("dulieu 3 th", aaa);
  // const bbb = aaa?.childrenLevel02[0].map((item) => item);
  // console.log({ bbb });

  const handelClickItemMenu = () => {
    setToggleItem(!toggleItem);
  };
  console.log("dulieuprops", props);

  const handelClickMenuCap2 = (value) => {
    setToggleMenuCap2(true);
    setValueMenuCap2(value);
  };

  let dulieuLV2 = datalistmenu[0]?.children[0]?.children?.filter(
    (item) => item.id === valueMenuCap2
  );
  let dulieuLV3 = datalistmenu[0]?.children[0]?.children?.map((item) => item);
  console.log("id", dulieuLV3);

  const handelClickMenuCap3 = (value) => {
    setToggleMenuCap3(true);
    setValueMenuCap3(value);
    console.log("uiui", valueMenuCap3);
  };
  return (
    <Wrapper value={isShow} toggle={toggle} toggleMenuCap2={toggleMenuCap2}>
      {props.dataMenuMobile.map((item, index) => (
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
            {datalistmenu[0]?.children[0]?.children?.map((index, key) => (
              <>
                <li key={key}>
                  {index.title}
                  <ArrowNext
                    width="13"
                    onClick={() => handelClickMenuCap2(index.id)}
                  />
                </li>
              </>
            ))}
            {toggleMenuCap2 === true ? (
              <div className="menuCap2">
                <span>
                  <i
                    className="far fa-long-arrow-left"
                    onClick={() => setToggleMenuCap2(false)}
                  ></i>
                </span>
                {dulieuLV2.map((item, key) => (
                  <li key={key}>
                    {item?.children.map((item01, key01) => (
                      <>
                        <p key={key01}>
                          {item01?.title}
                          <ArrowNext
                            width="13"
                            onClick={() => handelClickMenuCap3(item01?.id)}
                          />
                        </p>
                      </>
                    ))}
                  </li>
                ))}{" "}
              </div>
            ) : (
              ""
            )}
            {/* MenuLV3 */}
            {toggleMenuCap3 === true ? (
              <div className="menuCap3">
                <span>
                  <i
                    className="far fa-long-arrow-left"
                    onClick={() => setToggleMenuCap3(false)}
                  ></i>
                </span>
                {dulieuLV2.map((item, key) => (
                  <li key={key}>
                    {item?.children.map((item01, key01) => (
                      <>
                        <p key={key01}>
                          {item01?.children.map((item, key) => (
                            <li>{item?.title}</li>
                          ))}
                        </p>
                      </>
                    ))}
                  </li>
                ))}
              </div>
            ) : (
              ""
            )}

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
    }
    .menuCap2 {
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 10;
      padding: 20px;
      padding-top: 50px;
      span {
        position: absolute;
        left: 35px;
        top: 20px;
        i {
          font-size: 18px;
          color: #77798c;
        }
      }
    }
    .menuCap3 {
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 10;
      padding: 20px;
      padding-top: 50px;
      span {
        position: absolute;
        left: 35px;
        top: 20px;
        i {
          font-size: 18px;
          color: #77798c;
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
