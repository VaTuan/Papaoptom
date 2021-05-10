import { ArrowNext } from "assets/icons/ArrowNext";
import Link from "next/link";
import React from "react";
import getSlug from "utils/getSlug";
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

  return (
    <WrapperMenu>
      <Level01>
        {items?.map((level01) => {
          const slugLevel01 = getSlug(level01?.slug);
          return (
            <ItemLevel01 key={level01.id}>
              <Link
                href={{
                  pathname: "/[...slug]",
                  query: {
                    slug: [level01?.title],
                    cateName: [`${level01?.title}`],
                    cateId:
                      level01?.query === null
                        ? "none"
                        : level01?.query?.categoryIds?.length > 0
                        ? level01?.query?.categoryIds[0]
                        : "all",
                  },
                }}
                scroll={true}
                as={`/${slugLevel01}`}
              >
                <CustomLink padding="20px" color="#ffffff">
                  {level01.title}
                </CustomLink>
              </Link>

              <React.Fragment>
                <Level02 className="level_02">
                  {level01?.children.map((level02) => {
                    if (level02?.title === "") {
                      return (
                        <React.Fragment key={level02.id}>
                          {level02?.children.map((level02_c, index) => {
                            return (
                              <ItemLevel02 key={level02_c.id}>
                                <Link
                                  href={{
                                    pathname: "/[...slug]",
                                    query: {
                                      slug: [level01?.title, level02_c?.title],
                                      cateId:
                                        level02_c?.query?.categoryIds.length > 0
                                          ? level02_c?.query?.categoryIds[0]
                                          : "all",
                                    },
                                  }}
                                  scroll={true}
                                  as={`/${level01?.title}/${level02_c?.title}`}
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
                                        return (
                                          <ItemLevel03 key={level03_c.id}>
                                            <Link
                                              href={{
                                                pathname: "/[...slug]",
                                                query: {
                                                  slug: [
                                                    level01?.title,
                                                    level02_c?.title,
                                                    level03_c?.title,
                                                  ],
                                                  cateId:
                                                    level03_c?.query === null
                                                      ? "none"
                                                      : level03_c?.query
                                                          ?.categoryIds
                                                          ?.length > 0
                                                      ? level03_c?.query
                                                          ?.categoryIds[0]
                                                      : "all",
                                                },
                                              }}
                                              scroll={true}
                                              as={`/${level01?.slug}/${level02_c?.slug}/${level03_c?.slug}`}
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
                                                    (level04_c, index) => (
                                                      <ItemLevel04 key={index}>
                                                        {level04_c?.children
                                                          .length > 0 ? (
                                                          <Link
                                                            href={{
                                                              pathname:
                                                                "/[...slug]",
                                                              query: {
                                                                slug: [
                                                                  level01?.title,
                                                                  level02_c?.title,
                                                                  level03_c?.title,
                                                                  level04_c?.title,
                                                                ],
                                                                cateId:
                                                                  level04_c?.query ===
                                                                  null
                                                                    ? "none"
                                                                    : level04_c
                                                                        ?.query
                                                                        ?.categoryIds
                                                                        ?.length >
                                                                      0
                                                                    ? level04_c
                                                                        ?.query
                                                                        ?.categoryIds[0]
                                                                    : "all",
                                                              },
                                                            }}
                                                            scroll={true}
                                                            as={`/${level01?.slug}/${level02_c?.slug}/${level03_c?.slug}/${level04_c?.slug}`}
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
                                                              href={{
                                                                pathname:
                                                                  "/[...slug]",
                                                                query: {
                                                                  slug: [
                                                                    level01?.title,
                                                                    level02_c?.title,
                                                                    level03_c?.title,
                                                                    level04_c?.title,
                                                                  ],
                                                                  cateId:
                                                                    level04_c?.query ===
                                                                    null
                                                                      ? "none"
                                                                      : level04_c
                                                                          ?.query
                                                                          ?.categoryIds
                                                                          ?.length >
                                                                        0
                                                                      ? level04_c
                                                                          ?.query
                                                                          ?.categoryIds[0]
                                                                      : "all",
                                                                },
                                                              }}
                                                              scroll={true}
                                                              as={`/${level01?.slug}/${level02_c?.slug}/${level03_c?.slug}/${level04_c?.slug}`}
                                                            >
                                                              {level04_c.title}
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
                                                                (level05_c) => (
                                                                  <Link
                                                                    href={{
                                                                      pathname:
                                                                        "/[...slug]",
                                                                      query: {
                                                                        slug: [
                                                                          level01?.title,
                                                                          level02_c?.title,
                                                                          level03_c?.title,
                                                                          level04_c?.title,
                                                                          level05_c?.title,
                                                                        ],
                                                                        cateId:
                                                                          level05_c?.query ===
                                                                          null
                                                                            ? "none"
                                                                            : level05_c
                                                                                ?.query
                                                                                ?.categoryIds
                                                                                ?.length >
                                                                              0
                                                                            ? level05_c
                                                                                ?.query
                                                                                ?.categoryIds[0]
                                                                            : "all",
                                                                      },
                                                                    }}
                                                                    scroll={
                                                                      true
                                                                    }
                                                                    as={`/${level01?.slug}/${level02_c?.slug}/${level03_c?.slug}/${level04_c?.slug}/${level05_c?.slug}`}
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
                                                                )
                                                              )}
                                                            </Level05>
                                                          </React.Fragment>
                                                        )}
                                                      </ItemLevel04>
                                                    )
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
                      return (
                        <>
                          <ItemLevel02 key={level02.id} topPosition="-100%">
                            <Link
                              href={{
                                pathname: "/[...slug]",
                                query: {
                                  slug: [level01?.title, level02?.title],
                                  cateId:
                                    level02?.query?.categoryIds.length > 0
                                      ? level02?.query?.categoryIds[0]
                                      : "all",
                                },
                              }}
                              scroll={true}
                              as={`/${level01?.title}/${level02?.title}`}
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
                                  {level02?.children?.map((level03) => (
                                    <Link
                                      href={{
                                        pathname: "/[...slug]",
                                        query: {
                                          slug: [
                                            level01?.title,
                                            level02?.title,
                                            level03?.title,
                                          ],
                                          cateId:
                                            level03?.query === null
                                              ? "none"
                                              : level03?.query?.categoryIds
                                                  ?.length > 0
                                              ? level03?.query?.categoryIds[0]
                                              : "all",
                                        },
                                      }}
                                      scroll={true}
                                      as={`/${level01?.slug}/${level02?.slug}/${level03?.slug}`}
                                    >
                                      <ItemLevel03 key={level03.id}>
                                        {level03.title}

                                        {/* HIỆN TẠI ĐẾN ĐÂY LÀ HẾT  */}
                                        {level03?.children.length > 0 &&
                                          "còn tiếp"}
                                      </ItemLevel03>
                                    </Link>
                                  ))}
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
