export type TCustomclasses =
  | "margin-x-auto"
  | "margin-auto"
  | "max-width-max-content"
  | "max-width-fit-content"
  | "form-max-width";

export type ComponenetWithExtraClasses = {
  extraClasses?: TCustomclasses[];
};
