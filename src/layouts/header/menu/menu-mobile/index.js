import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { ArrowNext } from "assets/icons/ArrowNext";
import getSlug from "utils/getSlug";
import getCateId from "utils/getCateId";

export default function MenuMobile(props) {
  const [isShow, setIsShow] = useState();
  const [valueMenuCap2, setValueMenuCap2] = useState();
  const [valueMenuCap4, setValueMenuCap4] = useState();
  const [toggleItem, setToggleItem] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggleMenuCap2, setToggleMenuCap2] = useState(false);
  const [toggleMenuCap4, setToggleMenuCap4] = useState(false);
  const [valueSlug01, setValueSlug01] = useState("");
  const [valueSlug02, setValueSlug02] = useState("");
  const [valueSlug03, setValueSlug03] = useState("");
  const [valueSlug04, setValueSlug04] = useState("");
  const [valueSlug05, setValueSlug05] = useState("");
  // console.log("object", valueSlug01);

  const handelClick = (value, item) => {
    setIsShow(value);
    setToggle(true);
    setValueSlug01(item);
  };

  const dataMenu = props.dataMenuMobile.map((item) => item);

  const datalistmenu = dataMenu.filter((x) => x.id === isShow);

  const handelClickMenuCap2 = (value, item) => {
    setToggleMenuCap2(true);
    setValueMenuCap2(value);
    setValueSlug02(item);
  };

  let dulieuLV2 = datalistmenu[0]?.children[0]?.children?.filter(
    (item) => item.id === valueMenuCap2
  );
  let dulieuLV3 = dulieuLV2?.map((item) =>
    item?.children.map((item) =>
      item?.children?.filter((item) => item?.id === valueMenuCap4)
    )
  );
  const handelClickMenuCap4 = (value, item) => {
    setToggleMenuCap4(true);
    setValueMenuCap4(value);
    setValueSlug04(item);
    console.log("hieu1232", valueSlug04);
  };
  const handelClickMenuCap5 = (item) => {
    setValueSlug05(item);
    console.log("hieuookkkkk", valueSlug05);
  };
  return (
    <Wrapper value={isShow} toggle={toggle} toggleMenuCap2={toggleMenuCap2}>
      {props.dataMenuMobile.map((item, index) => {
        const slugLevel01 = getSlug(item?.slug);
        const cateId01 = getCateId(item);
        return (
          <CategoryItemRoot key={index}>
            <Link scroll={true} href={`/${slugLevel01}/${cateId01}`}>
              <a>
                {item.title}
                {item.children.length > 0 && (
                  <ArrowNext
                    className="mr10"
                    width="13"
                    onClick={() => handelClick(item.id, item.slug)}
                  />
                )}
              </a>
            </Link>
          </CategoryItemRoot>
        );
      })}
      {isShow === datalistmenu[0]?.id ? (
        <>
          <div className="list-menu">
            {datalistmenu[0]?.children[0]?.children?.map((index, key) => {
              const slugLevel01 = getSlug(datalistmenu[0]?.slug);
              const slugLevel02_c = getSlug(index?.slug);
              const cateId02_c = getCateId(index);
              return (
                <li key={key}>
                  <Link
                    href={`/${slugLevel01}/${slugLevel02_c}/${cateId02_c}`}
                    scroll={true}
                  >
                    <a>
                      {index.title}
                      {datalistmenu[0]?.children[0]?.title !== "" ? (
                        ""
                      ) : (
                        <ArrowNext
                          className="mr10"
                          width="13"
                          onClick={() =>
                            handelClickMenuCap2(index.id, index.slug)
                          }
                        />
                      )}
                    </a>
                  </Link>
                </li>
              );
            })}
            {toggleMenuCap2 === true ? (
              <div className="menuCap2">
                <span>
                  <i
                    className="far fa-long-arrow-left"
                    onClick={() => setToggleMenuCap2(false)}
                  ></i>
                </span>
                {dulieuLV2.map((item, key) => (
                  <React.Fragment key={key}>
                    {item?.children.map((item01, key01) => {
                      return (
                        <>
                          <li key={key01}>
                            <>
                              <a
                                className={
                                  item01?.children.length > 0 ? "titleH2" : ""
                                }
                              >
                                {item01?.title}
                              </a>
                              {item01?.children.length > 0 ? (
                                <ul>
                                  {item01?.children.map((item02, key) => {
                                    const slugLevel01 = getSlug(
                                      datalistmenu[0]?.slug
                                    );
                                    const slugLevel02_c = getSlug(item?.slug);
                                    const slugLevel04_c = getSlug(item02?.slug);
                                    const cateId04_c = getCateId(item02);
                                    return (
                                      <li key={key}>
                                        <Link
                                          href={`/${slugLevel01}/${slugLevel02_c}/${slugLevel04_c}/${cateId04_c}`}
                                          scroll={true}
                                        >
                                          <a>
                                            {item02?.title}
                                            {item02?.children.length === 0 ? (
                                              ""
                                            ) : (
                                              <ArrowNext
                                                className="mr10"
                                                width="13"
                                                onClick={() =>
                                                  handelClickMenuCap4(
                                                    item02?.id,
                                                    item02?.slug
                                                  )
                                                }
                                              />
                                            )}
                                          </a>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              ) : (
                                ""
                              )}
                            </>
                          </li>
                        </>
                      );
                    })}
                  </React.Fragment>
                ))}{" "}
              </div>
            ) : (
              ""
            )}
            {/* MenuLV4 */}
            {toggleMenuCap4 === true ? (
              <div className="menuCap4">
                <span>
                  <i
                    className="far fa-long-arrow-left"
                    onClick={() => setToggleMenuCap4(false)}
                  ></i>
                </span>
                {dulieuLV3.map((item) =>
                  item?.map((item01) =>
                    item01?.map((item02) =>
                      item02?.children?.map((item03, key) => {
                        const slugLevel05 = getSlug(item03?.slug);
                        const cateId05 = getCateId(item03);
                        const slugLevel04 = getSlug(valueSlug04);
                        const slugLevel02 = getSlug(valueSlug02);
                        const slugLevel01 = getSlug(valueSlug01);
                        return (
                          <Link
                            href={`/${slugLevel01}/${slugLevel02}/${slugLevel04}/${slugLevel05}/${cateId05}`}
                            scroll={true}
                            key={key}
                          >
                            <li
                              onClick={() => handelClickMenuCap5(item03?.slug)}
                            >
                              {item03.title}
                            </li>
                          </Link>
                        );
                      })
                    )
                  )
                )}
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
      a {
        color: #101010;
      }
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
    .titleH2 {
      font-size: 20px;
      text-align: center;
      color: #111111;
    }
    .menuCap4 {
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 12;
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
  .mr10 {
    margin-left: 10px;
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
