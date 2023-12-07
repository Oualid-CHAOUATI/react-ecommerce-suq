import { ReactNode } from "react";
import "./sectionTitle.styles.scss";
type TSectionTitleProps = { children: ReactNode };

export const SectionTitle = ({ children }: TSectionTitleProps) => {
  return (
    <h2 className="section-title uppercase center-text">
      <span data-text={children} className="iflex-center">
        {children}
      </span>
    </h2>
  );
};
