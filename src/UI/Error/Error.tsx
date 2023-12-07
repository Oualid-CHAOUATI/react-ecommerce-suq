import { FlexWrapper } from "../FlexWrapper/FlexWrapper";
import "./Error.styles.scss";
type ErrorProps = {
  errorText: string;
};
export const Error = ({ errorText }: ErrorProps) => {
  return (
    <FlexWrapper centerAlignItems className="error" dontWrap>
      <FlexWrapper className="error-label" center>
        !
      </FlexWrapper>
      <p>{errorText}</p>
    </FlexWrapper>
  );
};
