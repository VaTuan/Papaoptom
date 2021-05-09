import { ArrowNext } from "assets/icons/ArrowNext";
import React from "react";
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
  const { items } = props;

  //   console.log("items : ", items);

  return (
    <WrapperMenu>
      <Level01>
        {items?.map((level01) => (
          <ItemLevel01 key={level01.id}>
            <CustomLink padding="20px" color="#ffffff">
              {level01.title}
            </CustomLink>

            <React.Fragment>
              <Level02 className="level_02">
                {level01?.children.map((level02) => {
                  if (level02?.title === "") {
                    return (
                      <React.Fragment key={level02.id}>
                        {level02?.children.map((level02_c) => {
                          return (
                            <ItemLevel02 key={level02_c.id}>
                              <TitleWithIcon>
                                <CustomLink color="#000000" paddingRight="16px">
                                  {level02_c.title}
                                </CustomLink>
                                {level02_c?.children?.length > 0 && (
                                  <ArrowNext width="14" />
                                )}
                              </TitleWithIcon>

                              {level02_c?.children.length > 0 && (
                                <React.Fragment>
                                  <Level03
                                    className={`level_03 ${
                                      level02_c?.children.length > 16 &&
                                      "mega-menu__level_03"
                                    }`}
                                  >
                                    {level02_c?.children.map((level03_c) => {
                                      return (
                                        <ItemLevel03 key={level03_c.id}>
                                          <TitleWithIcon>
                                            <CustomLink color="#000000">
                                              {level03_c.title}
                                            </CustomLink>
                                            {level03_c?.children?.length >
                                              0 && <ArrowNext width="14" />}
                                          </TitleWithIcon>

                                          {level03_c?.children.length > 0 && (
                                            <React.Fragment>
                                              <Level04
                                                className={`level_04 ${
                                                  level03_c?.children.length >
                                                    10 && "mega-menu__level_04"
                                                }`}
                                              >
                                                {level03_c?.children.map(
                                                  (level04_c, index) => (
                                                    <ItemLevel04 key={index}>
                                                      {level04_c?.children
                                                        .length > 0 ? (
                                                        <TitleWithIcon>
                                                          <CustomLink color="#000000">
                                                            {level04_c.title}
                                                          </CustomLink>
                                                          <ArrowNext width="14" />
                                                        </TitleWithIcon>
                                                      ) : (
                                                        <> {level04_c.title}</>
                                                      )}

                                                      {level04_c?.children
                                                        .length > 0 && (
                                                        <React.Fragment>
                                                          <Level05
                                                            className={`level_05 ${
                                                              level04_c
                                                                ?.children
                                                                .length > 10 &&
                                                              "mega-menu__level_05"
                                                            } index_custom-${index}`}
                                                          >
                                                            {level04_c?.children?.map(
                                                              (level05_c) => (
                                                                <ItemLevel05
                                                                  key={
                                                                    level05_c.id
                                                                  }
                                                                >
                                                                  {
                                                                    level05_c.title
                                                                  }
                                                                </ItemLevel05>
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
                          <TitleWithIcon>
                            <CustomLink color="#000000" paddingRight="16px">
                              {level02.title}
                            </CustomLink>
                            {level02.children?.length > 0 && (
                              <ArrowNext width="14" />
                            )}
                          </TitleWithIcon>

                          {level02?.children.length > 0 && (
                            <React.Fragment>
                              <Level03
                                className={`level_03 ${
                                  level02?.children.length > 15 &&
                                  "mega-menu__level_03"
                                }`}
                              >
                                {level02?.children?.map((level03) => (
                                  <ItemLevel03 key={level03.id}>
                                    {level03.title}

                                    {/* HIỆN TẠI ĐẾN ĐÂY LÀ HẾT  */}
                                    {level03?.children.length > 0 && "còn tiếp"}
                                  </ItemLevel03>
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
        ))}
      </Level01>
    </WrapperMenu>
  );
}

export default CategoriesMenu;
