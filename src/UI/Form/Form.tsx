import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import "./Form.styles.scss";
import { ReactNode } from "react";
import { FlexWrapper } from "../FlexWrapper/FlexWrapper";
import { ComponenetWithExtraClasses } from "../../styles/styleClasses";
import classNames from "classnames";

import "./Form.styles.scss";

export type TFormImperativeHandleRef = {
  clear: () => void;
  clearField: (name: string) => void;
  setField: (name: string, value: string) => void;
};

type TFormProps = {
  children: ReactNode;
  saveData: (data: unknown) => void;
  title?: string;
} & ComponentPropsWithoutRef<"form"> &
  ComponenetWithExtraClasses;

export const Form = forwardRef<TFormImperativeHandleRef, TFormProps>(
  ({ children, saveData, title, extraClasses, ...props }, ref) => {
    const formRef = useRef<HTMLFormElement>(null);
    useImperativeHandle(
      ref,
      () => ({
        clear: () => {
          formRef.current?.reset();
        },
        clearField: (name: string) => {
          _setField(name, "");
        },
        setField: (name: string, value: string) => {
          // debugger;
          _setField(name, value);
        },
      }),
      []
    );

    const _setField = (name: string, value: string) => {
      // debugger;
      const element = _getByName(name);
      if (element) if ("value" in element) element.value = value;
    };
    const _getByName = (name: string) => {
      return formRef.current?.querySelector(`[name=${name}]`);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const untransformedData = new FormData(e.currentTarget);
      const data = Object.fromEntries(untransformedData);

      saveData(data);
    };
    return (
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        {...props}
        className={classNames("form", props.className, extraClasses)}
      >
        <FlexWrapper direction="column" gap="1em">
          {Boolean(title) && <FormTitle>{title}</FormTitle>}
          {children}
        </FlexWrapper>
      </form>
    );
  }
);

export const FormTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="form-title">{children}</h3>;
};
