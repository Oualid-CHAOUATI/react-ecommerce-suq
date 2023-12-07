import { Form__wrapper } from "../Form__wrapper";
import { Form, TFormImperativeHandleRef } from "../Form";
import { CustomValidator as CValidator } from "../../../utils/customValidator";
import { ChangeEvent, useRef } from "react";
import { Input } from "../../Input/Input";

type TFormErrors = {
  name: string | null;
  password: string | null;
};

type x = (keyof TFormErrors)[];

const verificateurs = {
  text: (text: string) => {
    const value = text.trim();
    const errors = [];
    if (CValidator.isEmpty(value)) errors.push("text cannot be empty");
    if (CValidator.SpecialChars.matches(value)) {
      errors.push(
        "digits are not allowed",
        "No special chars is allowed (ex: ',' ';' '+' '-' '.' ...etc)"
      );
    }
  },

  password: (password: string) => {
    const errors = [];
    if (CustomValidator.Length.value(password).islessThan(8))
      errors.push("password must have at least 8 characters");
  },
};

// const useErrors =<T>(possibleErrors: (keyof TFormErrors)[], xx: T)=> {
const useErrors = (a: string, xx: T) => {
  //   const [errors] = useState<TFormErrors>(
  //     Object.fromEntries(
  //       possibleErrors.map((key) => [key, null])
  //     ) as unknown as TFormErrors
  //   );
  //   return { errors };
};


const nameTransformer = (e: ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value;
  value = value.trimStart();

  value = CValidator.Digit.value(value).clear();
  value = CValidator.ConsecutifVoids.clear(value);

  value = CValidator.SpecialChars.clear(value);
  e.target.value = value;
};

export const FormTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="form-title">{children}</h3>;
};

export const Form__contact = () => {
  type THandledFields = {
    name: string;
    email: string;
    message: string;
  };
  const formRef = useRef<TFormImperativeHandleRef>(null);

  const saveData = (data: unknown) => {
    console.log(data);
    clearField("name");
    setField("name", "zzz");
    setField("message", "qaqaaah wiii");
  };

  const clearField = (name: keyof THandledFields) => {
    formRef.current?.clearField(name);
  };
  const setField = (name: keyof THandledFields, value: string) => {
    formRef.current?.setField(name, value);
  };

  return (
    <>
      <Form__wrapper
        description={{
          label:
            " Envoyez-nous quelques lignes et nous prendrons plaisir à vous répondre dans les meilleurs délais possibles.",
          icon: <MessageIcon />,
        }}
      >
        <Form
          saveData={saveData}
          ref={formRef}
          title="connectez vous !"
          extraClasses={["form-max-width", "margin-auto"]}
        >
          <Input
            label="name"
            name="name"
            onChange={nameTransformer}
            as="input"
          />
          <Input label="email" name="email" type="email" />
          <Input label="message" name="message" as="textarea" />
          <button
            style={{ padding: "1em", background: "blue", color: "white" }}
          >
            submit
          </button>
        </Form>
      </Form__wrapper>
    </>
  );
};

const MessageIcon = () => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    // xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512.093 512.093"
    // style="enable-background:new 0 0 512.093 512.093;"
    // xml:space="preserve"
    className="icon--message"
  >
    <g>
      <g>
        <g>
          <path
            d="M388.687,8l-9.6,30.56c60.08,18.817,100.97,74.482,100.96,137.44v64c0,79.529-64.471,144-144,144h-32
                c-4.253-0.025-8.34,1.645-11.36,4.64l-68.64,68.8V400c0-8.837-7.163-16-16-16h-32c-57.266,0.009-109.094-33.915-132-86.4
                l-29.28,12.8c27.989,64.13,91.308,105.589,161.28,105.6h16v80c-0.051,8.836,7.07,16.041,15.907,16.093
                c4.299,0.025,8.426-1.681,11.453-4.733l91.2-91.36h25.44c97.202,0,176-78.798,176-176v-64
                C512.071,99.055,462.109,31.014,388.687,8z"
          ></path>
          <path
            d="M112.047,256v48c-0.03,8.836,7.109,16.024,15.945,16.054c3.689,0.013,7.27-1.25,10.135-3.574l75.52-60.48h26.4
                c61.856,0,112-50.144,112-112v-32c0-61.856-50.144-112-112-112h-128c-61.856,0-112,50.144-112,112v32
                C0.047,205.856,50.191,256,112.047,256z M32.047,112c0-44.183,35.817-80,80-80h128c44.183,0,80,35.817,80,80v32
                c0,44.183-35.817,80-80,80h-32c-3.609,0.021-7.105,1.261-9.92,3.52l-54.08,43.2V240c0-8.837-7.163-16-16-16h-16
                c-44.183,0-80-35.817-80-80V112z"
          ></path>
          <rect x="160.047" y="112" width="32" height="32"></rect>
          <rect x="224.047" y="112" width="32" height="32"></rect>
          <rect x="96.047" y="112" width="32" height="32"></rect>
        </g>
      </g>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);
