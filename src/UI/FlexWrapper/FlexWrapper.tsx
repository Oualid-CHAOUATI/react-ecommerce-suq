import classNames from "classnames";
import "./FlexWrapper.syles.scss";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type TFlexWrapperProps<T extends ElementType> = {
  inlineFlex?: true;
  dontWrap?: true;
  children: ReactNode;
  as?: T;
  gap?: ".3em" | ".5em" | "1em" | "1.5em" | string;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
} & ComponentPropsWithoutRef<T> &
  (
    | {
        center?: true;
        centerAlignItems?: never;
        centerJustifyContent?: never;
      }
    | {
        center?: never;
        centerAlignItems?: true;
        centerJustifyContent?: true;
      }
  );

export const FlexWrapper = <T extends ElementType>({
  as,
  children,
  dontWrap,
  gap = ".5em",
  direction = "row",
  ...otherProps
}: TFlexWrapperProps<T>) => {
  const {
    inlineFlex,
    center,
    centerAlignItems,
    centerJustifyContent,
    className,
    style,

    ...ellementProps
  } = otherProps;

  const customStyle = { ...style, gap, "flex-direction": direction };

  // const inlineFlex = "inlineFlex" in otherProps;
  // const center = "center" in otherProps;
  // const centerAlignItems = "centerAlignItems" in otherProps;
  // const centerJustifyContent = "centerJustifyContent" in otherProps;

  const Element = as || "div";

  return (
    <Element
      className={classNames(
        className,
        "flex-wrapper",
        { block: !inlineFlex },
        { inline: inlineFlex },
        { center: center },
        { "center-align-items": centerAlignItems },
        { "center-justify-content": centerJustifyContent },
        { wrap: !dontWrap }
      )}
      style={customStyle}
      {...ellementProps}
    >
      {children}
    </Element>
  );
};
