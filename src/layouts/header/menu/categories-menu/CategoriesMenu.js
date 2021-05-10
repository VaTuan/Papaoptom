import { ArrowNext } from "assets/icons/ArrowNext";
import Link from "next/link";
import React from "react";
import getSlug from "utils/getSlug";
import getCateId from "utils/getCateId";
import { WrapperMenu } from "../category-menu/style";
import {
  CustomLink,
  Level01,
  ItemLevel01,
  Level02,
  ItemLevel02,
  Level03,
  TitleWithIcon,
  ItemLevel03,
  Level04,
  ItemLevel04,
  Level05,
  ItemLevel05,
} from "./style";

function CategoriesMenu(props) {
  const { items, deviceType, categories } = props;

  //   console.log("items : ", items);

  return (
    <WrapperMenu>
      <Level01>
        {items?.map((level01) => {
          const slugLevel01 = getSlug(level01?.slug);
          const cateId01 = getCateId(level01);
          return (
            <ItemLevel01 key={level01.id}>
              <Link href={`/${slugLevel01}/${cateId01}`} scroll={true}>
                <CustomLink padding="20px" color="#ffffff">
                  {level01.title}
                </CustomLink>
              </Link>

              <React.Fragment>
                <Level02 className="level_02">
                  {level01?.children.map((level02) => {
                    const slugLevel02 = getSlug(level02?.slug);
                    const cateId02 = getCateId(level02);
                    // CHECK ĐIỀU KIỆN NẾU TITLE BẰNG RỖNG
                    if (level02?.title === "") {
                      return (
                        <React.Fragment key={level02.id}>
                          {level02?.children.map((level02_c, index) => {
                            const slugLevel02_c = getSlug(level02_c?.slug);
                            const cateId02_c = getCateId(level02_c);
                            return (
                              <ItemLevel02 key={level02_c.id}>
                                <Link
                                  href={`/${slugLevel01}/${slugLevel02_c}/${cateId02_c}`}
                                  scroll={true}
                                >
                                  <TitleWithIcon>
                                    <CustomLink
                                      color="#000000"
                                      paddingRight="16px"
                                    >
                                      {level02_c.title}
                                    </CustomLink>
                                    {level02_c?.children?.length > 0 && (
                                      <ArrowNext width="14" />
                                    )}
                                  </TitleWithIcon>
                                </Link>

                                {level02_c?.children.length > 0 && (
                                  <React.Fragment>
                                    <Level03
                                      className={`level_03 ${
                                        level02_c?.children.length > 16 &&
                                        "mega-menu__level_03"
                                      } index_custom-${index}`}
                                    >
                                      {level02_c?.children.map((level03_c) => {
                                        const slugLevel03_c = getSlug(
                                          level03_c?.slug
                                        );
                                        const cateId03_c = getCateId(level03_c);

                                        return (
                                          <ItemLevel03 key={level03_c.id}>
                                            <Link
                                              href={`/${slugLevel01}/${slugLevel02_c}/${slugLevel03_c}/${cateId03_c}`}
                                              scroll={true}
                                            >
                                              <TitleWithIcon>
                                                <CustomLink color="#000000">
                                                  {level03_c.title}
                                                </CustomLink>
                                                {level03_c?.children?.length >
                                                  0 && <ArrowNext width="14" />}
                                              </TitleWithIcon>
                                            </Link>

                                            {level03_c?.children.length > 0 && (
                                              <React.Fragment>
                                                <Level04
                                                  className={`level_04 ${
                                                    level03_c?.children.length >
                                                      10 &&
                                                    "mega-menu__level_04"
                                                  }`}
                                                >
                                                  {level03_c?.children.map(
                                                    (level04_c, index) => {
                                                      const slugLevel04_c = getSlug(
                                                        level04_c?.slug
                                                      );
                                                      const cateId04_c = getCateId(
                                                        level04_c
                                                      );

                                                      return (
                                                        <ItemLevel04
                                                          key={index}
                                                        >
                                                          {level04_c?.children
                                                            .length > 0 ? (
                                                            <Link
                                                              href={`/${slugLevel01}/${slugLevel02_c}/${slugLevel03_c}/${slugLevel04_c}/${cateId04_c}`}
                                                              scroll={true}
                                                            >
                                                              <TitleWithIcon>
                                                                <CustomLink color="#000000">
                                                                  {
                                                                    level04_c.title
                                                                  }
                                                                </CustomLink>
                                                                <ArrowNext width="14" />
                                                              </TitleWithIcon>
                                                            </Link>
                                                          ) : (
                                                            <>
                                                              <Link
                                                                href={`/${slugLevel01}/${slugLevel02_c}/${slugLevel03_c}/${slugLevel04_c}/${cateId04_c}`}
                                                                scroll={true}
                                                              >
                                                                {
                                                                  level04_c.title
                                                                }
                                                              </Link>
                                                            </>
                                                          )}

                                                          {level04_c?.children
                                                            .length > 0 && (
                                                            <React.Fragment>
                                                              <Level05
                                                                className={`level_05 ${
                                                                  level04_c
                                                                    ?.children
                                                                    .length >
                                                                    10 &&
                                                                  "mega-menu__level_05"
                                                                } index_custom-${index}`}
                                                              >
                                                                {level04_c?.children?.map(
                                                                  (
                                                                    level05_c
                                                                  ) => {
                                                                    const slugLevel05_c = getSlug(
                                                                      level05_c?.slug
                                                                    );
                                                                    const cateId05_c = getCateId(
                                                                      level05_c
                                                                    );

                                                                    return (
                                                                      <Link
                                                                        href={`/${slugLevel01}/${slugLevel02_c}/${slugLevel03_c}/${slugLevel04_c}/${slugLevel05_c}/${cateId05_c}`}
                                                                        scroll={
                                                                          true
                                                                        }
                                                                      >
                                                                        <ItemLevel05
                                                                          key={
                                                                            level05_c.id
                                                                          }
                                                                        >
                                                                          {
                                                                            level05_c.title
                                                                          }
                                                                        </ItemLevel05>
                                                                      </Link>
                                                                    );
                                                                  }
                                                                )}
                                                              </Level05>
                                                            </React.Fragment>
                                                          )}
                                                        </ItemLevel04>
                                                      );
                                                    }
                                                  )}
                                                </Level04>
                                              </React.Fragment>
                                            )}
                                          </ItemLevel03>
                                        );
                                      })}
                                    </Level03>
                                  </React.Fragment>
                                )}
                              </ItemLevel02>
                            );
                          })}
                        </React.Fragment>
                      );
                    } else {
                      // NẾU CÓ TITLE ĐẦY ĐỦ THÌ CHẠY VÀO ĐÂY
                      return (
                        <>
                          <ItemLevel02 key={level02.id} topPosition="-100%">
                            <Link
                              href={`/${slugLevel01}/${slugLevel02}/${cateId02}`}
                              scroll={true}
                            >
                              <TitleWithIcon>
                                <CustomLink color="#000000" paddingRight="16px">
                                  {level02.title}
                                </CustomLink>
                                {level02.children?.length > 0 && (
                                  <ArrowNext width="14" />
                                )}
                              </TitleWithIcon>
                            </Link>

                            {level02?.children.length > 0 && (
                              <React.Fragment>
                                <Level03
                                  className={`level_03 ${
                                    level02?.children.length > 15 &&
                                    "mega-menu__level_03"
                                  }`}
                                >
                                  {level02?.children?.map((level03) => {
                                    const slugLevel03 = getSlug(level03?.slug);
                                    const cateId03 = getCateId(level03);
                                    return (
                                      <Link
                                        href={`/${slugLevel01}/${slugLevel02}/${slugLevel03}/${cateId03}`}
                                        scroll={true}
                                      >
                                        <ItemLevel03 key={level03.id}>
                                          {level03.title}

                                          {/* HIỆN TẠI ĐẾN ĐÂY LÀ HẾT  */}
                                          {level03?.children.length > 0 &&
                                            "còn tiếp"}
                                        </ItemLevel03>
                                      </Link>
                                    );
                                  })}
                                </Level03>
                              </React.Fragment>
                            )}
                          </ItemLevel02>
                        </>
                      );
                    }
                  })}
                </Level02>
              </React.Fragment>
            </ItemLevel01>
          );
        })}
      </Level01>
    </WrapperMenu>
  );
}

export default CategoriesMenu;
