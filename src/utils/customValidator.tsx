class TakesText {
  //accessible depuis les calasses enfant seulement
  protected static text: string;

  static value = (text: string) => {
    this.text = text;
    return this;
  };
}


export const CustomValidator = {
  Letter: class LettersClass extends TakesText {
    static value = (text: string) => {
      super.value(text);
      return this;
    };
    static hasLowerLetter = () => /a-z/.test(this.text);
    static hasUpperLetter = () => /A-Z/.test(this.text);
  },
  Digit: class extends TakesText {
    static value = (text: string) => {
      super.value(text);
      return this;
    };
    static reggex = /[0-9]/g;

    static matches = () => {
      return this.reggex.test(this.text);
    };
    static clear = () => this.text.replace(this.reggex, "");
  },
  SpecialChars: class {
    static reggex = /[^a-zA-Z\d\s]/g;
    static matches = (text: string) => {
      return this.reggex.test(text);
    };
    static clear = (text: string) => {
      return text.replace(this.reggex, "");
    };
  },

  ConsecutifVoids: class {
    static reggex = /\s+/g;
    static matches = (text: string) => this.reggex.test(text);
    static clear = (text: string) => text.replace(this.reggex, " ");
  },
  isEmpty: (text: string) => text.trim() === "",
  Length: class LengthClass extends TakesText {
    static value = (text: string) => {
      super.value(text);
      return this;
    };
    static islessThan = (number: number) => {
      return this.text.length < number;
    };
    static isBiggerThan = (number: number) => {
      return this.text.length > number;
    };
    static exact = (number: number) => {
      return this.text.length === number;
    };
  },
};
