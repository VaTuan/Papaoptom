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
  ListMenu,
  MenuWithTitle,
  TitleMenu,
  MegaMenuWithTitle,
  MenuWithTitleOneLevel,
} from "./style";

function CategoriesMenu(props) {
  const { items, deviceType, categories } = props;

  //   console.log("items : ", items);

  const Cate01 = items[0];
  const Cate02 = items[1];
  const Cate03 = items[2];
  const Cate04 = items[3];
  const Cate05 = items[4];
  const Cate06 = items[5];
  const Cate07 = items[6];

  console.log("====================================");
  console.log("cate07 : ", Cate07);
  console.log("====================================");

  const renderCate01 = () => {
    const slugLevel01 = getSlug(Cate01?.slug);
    const cateId01 = getCateId(Cate01);
    return (
      <ItemLevel01>
        <Link href={`/${slugLevel01}/${cateId01}`} scroll={true}>
          <CustomLink padding="20px" color="#ffffff">
            {Cate01?.title}
          </CustomLink>
        </Link>

        {Cate01?.children.length > 0 && (
          <Level02 className="level_02">
            {Cate01?.children[0]?.children?.map((level02) => {
              const slugLevel02 = getSlug(level02?.slug);
              const cateId02 = getCateId(level02);
              return (
                <ItemLevel02 key={level02.id}>
                  <Link
                    href={`/${slugLevel01}/${slugLevel02}/${cateId02}`}
                    scroll={true}
                  >
                    <TitleWithIcon>
                      <CustomLink color="#000000" paddingRight="16px">
                        {level02.title}
                      </CustomLink>
                      {level02?.children?.length > 0 && (
                        <ArrowNext width="14" />
                      )}
                    </TitleWithIcon>
                  </Link>

                  {level02?.children?.length > 0 && (
                    <Level03 className={`level_03 ${level02.title}`}>
                      {level02?.children?.map((level03, index) => {
                        return (
                          <MenuWithTitle
                            className={`custom-menu__${level03.title}`}
                            key={index}
                          >
                            <TitleMenu>{level03?.title}</TitleMenu>
                            {level03?.children?.map((level04) => {
                              const slugLevel04 = getSlug(level04?.slug);
                              const cateId04 = getCateId(level04);
                              return (
                                <ItemLevel03 key={level04.id}>
                                  <Link
                                    href={`/${slugLevel01}/${slugLevel02}/${slugLevel04}/${cateId04}`}
                                    scroll={true}
                                  >
                                    <TitleWithIcon>
                                      <CustomLink color="#000000">
                                        {level04?.title}
                                      </CustomLink>
                                      {level04?.children?.length > 0 && (
                                        <ArrowNext width="14" />
                                      )}
                                    </TitleWithIcon>
                                  </Link>

                                  {level04?.children?.length > 0 && (
                                    <Level04
                                      className={`level_04 ${level04.title} mega-menu__level_04`}
                                    >
                                      {level04?.children?.map((level05) => {
                                        const slugLevel05 = getSlug(
                                          level05?.slug
                                        );
                                        const cateId05 = getCateId(level05);
                                        return (
                                          <ItemLevel04 key={level05.id}>
                                            <Link
                                              href={`/${slugLevel01}/${slugLevel02}/${slugLevel04}/${slugLevel05}/${cateId05}`}
                                              scroll={true}
                                            >
                                              <TitleWithIcon>
                                                <CustomLink color="#000000">
                                                  {level05?.title}
                                                </CustomLink>
                                                {level05?.children?.length >
                                                  0 && <ArrowNext width="14" />}
                                              </TitleWithIcon>
                                            </Link>
                                          </ItemLevel04>
                                        );
                                      })}
                                    </Level04>
                                  )}
                                </ItemLevel03>
                              );
                            })}
                          </MenuWithTitle>
                        );
                      })}
                    </Level03>
                  )}
                </ItemLevel02>
              );
            })}
          </Level02>
        )}
      </ItemLevel01>
    );
  };

  const renderCate02 = () => {
    const slugLevel01 = getSlug(Cate02?.slug);
    const cateId01 = getCateId(Cate02);
    return (
      <ItemLevel01>
        <Link href={`/${slugLevel01}/${cateId01}`} scroll={true}>
          <CustomLink padding="20px" color="#ffffff">
            {Cate02?.title}
          </CustomLink>
        </Link>

        {Cate02?.children?.length > 0 && (
          <Level02 className="level_02">
            {Cate02?.children?.map((item, index) => {
              return (
                <MenuWithTitleOneLevel key={index}>
                  <TitleMenu>{item?.title}</TitleMenu>
                  {item?.children?.map((level02) => {
                    const slugLevel02 = getSlug(level02?.slug);
                    const cateId02 = getCateId(level02);
                    return (
                      <ItemLevel02 key={level02.id}>
                        <Link
                          href={`/${slugLevel01}/${slugLevel02}/${cateId02}`}
                          scroll={true}
                        >
                          <TitleWithIcon>
                            <CustomLink color="#000000">
                              {level02?.title}
                            </CustomLink>
                            {level02?.children?.length > 0 && (
                              <ArrowNext width="14" />
                            )}
                          </TitleWithIcon>
                        </Link>
                      </ItemLevel02>
                    );
                  })}
                </MenuWithTitleOneLevel>
              );
            })}
          </Level02>
        )}
      </ItemLevel01>
    );
  };
  const renderCate03 = () => {
    const slugLevel01 = getSlug(Cate03?.slug);
    const cateId01 = getCateId(Cate03);
    return (
      <ItemLevel01>
        <Link href={`/${slugLevel01}/${cateId01}`} scroll={true}>
          <CustomLink padding="20px" color="#ffffff">
            {Cate03?.title}
          </CustomLink>
        </Link>

        {Cate03?.children?.length > 0 && (
          <Level02 className="level_02">
            {Cate03?.children?.map((item, index) => {
              return (
                <MenuWithTitleOneLevel key={index}>
                  <TitleMenu>{item?.title}</TitleMenu>
                  {item?.children?.map((level02) => {
                    const slugLevel02 = getSlug(level02?.slug);
                    const cateId02 = getCateId(level02);
                    return (
                      <ItemLevel02 key={level02.id}>
                        <Link
                          href={`/${slugLevel01}/${slugLevel02}/${cateId02}`}
                          scroll={true}
                        >
                          <TitleWithIcon>
                            <CustomLink color="#000000">
                              {level02?.title}
                            </CustomLink>
                            {level02?.children?.length > 0 && (
                              <ArrowNext width="14" />
                            )}
                          </TitleWithIcon>
                        </Link>
                      </ItemLevel02>
                    );
                  })}
                </MenuWithTitleOneLevel>
              );
            })}
          </Level02>
        )}
      </ItemLevel01>
    );
  };
  const renderCate04 = () => {
    const slugLevel01 = getSlug(Cate04?.slug);
    const cateId01 = getCateId(Cate04);
    return (
      <ItemLevel01>
        <Link href={`/${slugLevel01}/${cateId01}`} scroll={true}>
          <CustomLink padding="20px" color="#ffffff">
            {Cate04?.title}
          </CustomLink>
        </Link>

        {Cate04?.children?.length > 0 && (
          <Level02 className="level_02">
            {Cate04?.children?.map((item, index) => {
              return (
                <MenuWithTitleOneLevel key={index}>
                  <TitleMenu>{item?.title}</TitleMenu>
                  {item?.children?.map((level02) => {
                    const slugLevel02 = getSlug(level02?.slug);
                    const cateId02 = getCateId(level02);
                    return (
                      <ItemLevel02 key={level02.id}>
                        <Link
                          href={`/${slugLevel01}/${slugLevel02}/${cateId02}`}
                          scroll={true}
                        >
                          <TitleWithIcon>
                            <CustomLink color="#000000">
                              {level02?.title}
                            </CustomLink>
                            {level02?.children?.length > 0 && (
                              <ArrowNext width="14" />
                            )}
                          </TitleWithIcon>
                        </Link>
                      </ItemLevel02>
                    );
                  })}
                </MenuWithTitleOneLevel>
              );
            })}
          </Level02>
        )}
      </ItemLevel01>
    );
  };

  const renderCate05 = () => {
    const slugLevel01 = getSlug(Cate05?.slug);
    const cateId01 = getCateId(Cate05);
    return (
      <ItemLevel01>
        <Link href={`/${slugLevel01}/${cateId01}`} scroll={true}>
          <CustomLink padding="20px" color="#ffffff">
            {Cate05?.title}
          </CustomLink>
        </Link>

        {Cate05?.children?.length > 0 && (
          <Level02 className="level_02">
            {Cate05?.children?.map((item, index) => {
              return (
                <MenuWithTitleOneLevel key={index}>
                  <TitleMenu>{item?.title}</TitleMenu>
                  {item?.children?.map((level02) => {
                    const slugLevel02 = getSlug(level02?.slug);
                    const cateId02 = getCateId(level02);
                    return (
                      <ItemLevel02 key={level02.id}>
                        <Link
                          href={`/${slugLevel01}/${slugLevel02}/${cateId02}`}
                          scroll={true}
                        >
                          <TitleWithIcon>
                            <CustomLink color="#000000">
                              {level02?.title}
                            </CustomLink>
                            {level02?.children?.length > 0 && (
                              <ArrowNext width="14" />
                            )}
                          </TitleWithIcon>
                        </Link>
                      </ItemLevel02>
                    );
                  })}
                </MenuWithTitleOneLevel>
              );
            })}
          </Level02>
        )}
      </ItemLevel01>
    );
  };
  const renderCate06 = () => {
    const slugLevel01 = getSlug(Cate06?.slug);
    const cateId01 = getCateId(Cate06);
    return (
      <ItemLevel01>
        <Link href={`/${slugLevel01}/${cateId01}`} scroll={true}>
          <CustomLink padding="20px" color="#ffffff">
            {Cate06?.title}
          </CustomLink>
        </Link>

        {Cate06?.children.length > 0 && (
          <Level02 className="level_02">
            {Cate06?.children[0]?.children?.map((level02) => {
              const slugLevel02 = getSlug(level02?.slug);
              const cateId02 = getCateId(level02);
              return (
                <ItemLevel02 key={level02.id}>
                  <Link
                    href={`/${slugLevel01}/${slugLevel02}/${cateId02}`}
                    scroll={true}
                  >
                    <TitleWithIcon>
                      <CustomLink color="#000000" paddingRight="16px">
                        {level02.title}
                      </CustomLink>
                      {level02?.children?.length > 0 && (
                        <ArrowNext width="14" />
                      )}
                    </TitleWithIcon>
                  </Link>

                  {level02?.children?.length > 0 && (
                    <Level03 className={`level_03 ${level02.title}`}>
                      {level02?.children?.map((level03, index) => {
                        return (
                          <MenuWithTitle
                            className={`custom-menu__${level03.title}`}
                            key={index}
                          >
                            <TitleMenu>{level03?.title}</TitleMenu>
                            {level03?.children?.map((level04) => {
                              const slugLevel04 = getSlug(level04?.slug);
                              const cateId04 = getCateId(level04);
                              return (
                                <ItemLevel03 key={level04.id}>
                                  <Link
                                    href={`/${slugLevel01}/${slugLevel02}/${slugLevel04}/${cateId04}`}
                                    scroll={true}
                                  >
                                    <TitleWithIcon>
                                      <CustomLink color="#000000">
                                        {level04?.title}
                                      </CustomLink>
                                      {level04?.children?.length > 0 && (
                                        <ArrowNext width="14" />
                                      )}
                                    </TitleWithIcon>
                                  </Link>

                                  {level04?.children?.length > 0 && (
                                    <Level04
                                      className={`level_04 ${level04.title} mega-menu__level_04`}
                                    >
                                      {level04?.children?.map((level05) => {
                                        const slugLevel05 = getSlug(
                                          level05?.slug
                                        );
                                        const cateId05 = getCateId(level05);
                                        return (
                                          <ItemLevel04 key={level05.id}>
                                            <Link
                                              href={`/${slugLevel01}/${slugLevel02}/${slugLevel04}/${slugLevel05}/${cateId05}`}
                                              scroll={true}
                                            >
                                              <TitleWithIcon>
                                                <CustomLink color="#000000">
                                                  {level05?.title}
                                                </CustomLink>
                                                {level05?.children?.length >
                                                  0 && <ArrowNext width="14" />}
                                              </TitleWithIcon>
                                            </Link>
                                          </ItemLevel04>
                                        );
                                      })}
                                    </Level04>
                                  )}
                                </ItemLevel03>
                              );
                            })}
                          </MenuWithTitle>
                        );
                      })}
                    </Level03>
                  )}
                </ItemLevel02>
              );
            })}
          </Level02>
        )}
      </ItemLevel01>
    );
  };

  const renderCate07 = () => {
    const slugLevel01 = getSlug(Cate07?.slug);
    const cateId01 = getCateId(Cate07);
    return (
      <ItemLevel01>
        <Link href={`/${slugLevel01}/${cateId01}`} scroll={true}>
          <CustomLink padding="20px" color="#ffffff">
            {Cate07?.title}
          </CustomLink>
        </Link>
        {Cate07?.children?.length > 0 && (
          <Level02 className="level_02">
            {Cate07?.children[0]?.children?.map((level02) => {
              const slugLevel02 = getSlug(level02?.slug);
              const cateId02 = getCateId(level02);
              return (
                <ItemLevel02 key={level02.id}>
                  <Link
                    href={`/${slugLevel01}/${slugLevel02}/${cateId02}`}
                    scroll={true}
                  >
                    <TitleWithIcon>
                      <CustomLink color="#000000" paddingRight="16px">
                        {level02.title}
                      </CustomLink>
                      {level02?.children?.length > 0 && (
                        <ArrowNext width="14" />
                      )}
                    </TitleWithIcon>
                  </Link>

                  {level02?.children?.length > 0 && (
                    <Level03
                      className={`level_03 mega-menu__level_03 ${level02.title}`}
                    >
                      {level02?.children?.map((level03) => {
                        const slugLevel03 = getSlug(level03?.slug);
                        const cateId03 = getCateId(level03);
                        return (
                          <ItemLevel03 key={level03.id}>
                            <Link
                              href={`/${slugLevel01}/${slugLevel02}/${slugLevel03}/${cateId03}`}
                              scroll={true}
                            >
                              <TitleWithIcon>
                                <CustomLink color="#000000" paddingRight="16px">
                                  {level03.title}
                                </CustomLink>
                                {level03?.children?.length > 0 && (
                                  <ArrowNext width="14" />
                                )}
                              </TitleWithIcon>
                            </Link>
                          </ItemLevel03>
                        );
                      })}
                    </Level03>
                  )}
                </ItemLevel02>
              );
            })}
          </Level02>
        )}
      </ItemLevel01>
    );
  };

  return (
    <WrapperMenu>
      <ListMenu>
        {renderCate01()}
        {renderCate02()}
        {renderCate03()}
        {renderCate04()}
        {renderCate05()}
        {renderCate06()}
        {renderCate07()}
      </ListMenu>
    </WrapperMenu>
  );
}

export default CategoriesMenu;
