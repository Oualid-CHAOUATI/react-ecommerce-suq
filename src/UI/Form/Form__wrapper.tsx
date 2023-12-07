import { ReactNode } from "react";
import { FlexWrapper } from "../FlexWrapper/FlexWrapper";
import "./Form__wrapper.styles.scss";
import { ComponenetWithExtraClasses } from "../../styles/styleClasses";
import classNames from "classnames";

type TFormWrapper = {
  description: {
    icon?: ReactNode;
    label: string;
  };
  children: ReactNode;
} & ComponenetWithExtraClasses;
export const Form__wrapper = ({
  description: { icon, label },
  children,
  extraClasses = ["form-max-width", "margin-auto"],
}: TFormWrapper) => {
  return (
    <FlexWrapper
      className={classNames("form-container", extraClasses)}
      direction="column"
    >
      <div className="description">
        {Boolean(icon) && icon}
        <p>{label}</p>
      </div>
      {children}
    </FlexWrapper>
  );
};
