import {
  FC,
  ComponentPropsWithoutRef,
  ElementType,
  MouseEventHandler,
  useState,
  ReactNode,
} from "react";
import "./Input.styles.scss";
import { Error } from "../Error/Error";
import { FlexWrapper } from "../FlexWrapper/FlexWrapper";

type TInputAttrs = ComponentPropsWithoutRef<"input">;
type TTextareaAttrs = ComponentPropsWithoutRef<"textarea">;

type TInputProps = {
  label: string;
  error?: string;
} & (
  | ({
      as?: "input";
    } & TInputAttrs)
  | ({ as?: "textarea" } & TTextareaAttrs)
);

export const Input: FC<TInputProps> = ({
  label,
  as = "input",
  error,
  ...props
}) => {
  const Element = as as ElementType;

  const isApasswordInput =
    as !== "input"
      ? false
      : (props as TInputAttrs).type == "password"
      ? true
      : false;

  return (
    <>
      <LabelWrapper error={error} label={label}>
        <FlexWrapper className="input-container__wrapper" dontWrap>
          {isApasswordInput ? (
            <InputPassword
              {...{ ...(props as TInputAttrs), className: "input" }}
            />
          ) : (
            <Element {...{ ...props, className: "input" }} />
          )}
        </FlexWrapper>
      </LabelWrapper>
    </>
  );
};
/**
 * @component
 * @returns
 * returns an input and a button for toggling the password show
 */

const InputPassword = (props: TInputAttrs) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <input {...props} type={show ? "text" : "password"} />
      <EyeSvg show={show} onClick={() => setShow((show) => !show)} />
    </>
  );
};

//
const LabelWrapper = ({
  children,
  error,
  label,
}: {
  children: ReactNode;
  error?: string;
  label: string;
}) => {
  return (
    <label className="input-container">
      <span className="label-text">{label}</span>
      {children}

      {Boolean(error) && <Error errorText={error!} />}
    </label>
  );
};
// type TOnclick = ComponentPropsWithoutRef<"button">["onClick"];

const EyeSvg = ({
  show,
  onClick,
}: {
  show?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  const ReturnElement = show ? EyeSvg__close : EyeSvg__open;
  return (
    <FlexWrapper
      inlineFlex
      center
      as={"button"}
      className="eye-toggle-btn"
      type="button"
      onClick={onClick}
    >
      <ReturnElement />
    </FlexWrapper>
  );
};
const EyeSvg__open = () => {
  return (
    <>
      <svg
        className="feather feather-eye"
        fill="none"
        height="24"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </>
  );
};

const EyeSvg__close = () => {
  return (
    <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
      <title />
      <g>
        <path d="M82.24,22.2438A5.999,5.999,0,1,0,73.7562,13.76L69.455,18.0612A41.15,41.15,0,0,0,48,12.0022c-22.1588,0-35.6814,15.7022-46.9893,32.67a5.9842,5.9842,0,0,0,0,6.6558,110.6522,110.6522,0,0,0,15.8105,19.367L13.76,73.7562A5.999,5.999,0,1,0,22.2438,82.24ZM13.2677,48C25.3256,30.7921,35.2742,24.0015,48,24.0015a29.3537,29.3537,0,0,1,12.6716,2.8431l-9.5927,9.5926A11.1546,11.1546,0,0,0,48,36.0007,12.0112,12.0112,0,0,0,36.0007,48a11.1589,11.1589,0,0,0,.4365,3.0789L25.3014,62.2147A88.0132,88.0132,0,0,1,13.2677,48Z" />
        <path d="M94.9893,44.6721c-2.4234-3.6363-4.9809-7.1751-7.6709-10.5528l-8.5461,8.5461c1.3007,1.6669,2.6131,3.4128,3.96,5.3346C71.1761,64.4924,61.5307,71.3423,49.5475,71.89L38.5714,82.8663A42.5472,42.5472,0,0,0,48,83.9978c22.1588,0,35.6814-15.7022,46.9893-32.67A5.9842,5.9842,0,0,0,94.9893,44.6721Z" />
      </g>
    </svg>
  );
};
