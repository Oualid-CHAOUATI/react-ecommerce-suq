import { ComponentPropsWithoutRef, FC, ReactNode, useState } from "react";
import classNames from "classnames";

type InputProps = {
  icon?: ReactNode;
  error?: string;
  size?: "xs" | "sm" | "md" | "lg" | "fluid";
} & Omit<ComponentPropsWithoutRef<"input">, "size">;

export const Input: FC<InputProps> = ({
  icon,
  error,
  size,
  type,
  ...props
}) => {
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const toggleReveal = () => setIsRevealed((state) => !state);

  return (
    <div
    // className={containerClassNames}
    >
      {icon && (
        <div
          // className={styles.icon}
          className="hahah"
        >
          {icon}
        </div>
      )}
      <input
        type={isRevealed ? "text" : type}
        // className={inputClassNames}
        {...props}
      />
      {type === "password" && (
        <div className="text-xl cursor-pointer pr-3" onClick={toggleReveal}>
          {isRevealed ? <Show /> : <Hide />}
        </div>
      )}
    </div>
    // <div className={size} style={{ display: "flex" }}>
    //   {icon && <div>{icon}</div>}
    //   <input
    //     {...props} // ICI
    //     type={isRevealed ? "text" : props.type}
    //   />
    //   {props.type === "password" && (
    //     <div className="text-xl cursor-pointer pr-3" onClick={toggleReveal}>
    //       {isRevealed ? <Hide /> : <Show />}
    //     </div>
    //   )}
    //   {error && <p className="error-message">{error}</p>}
    // </div>
  );
};

// faudra remplace ça avec des icones (svgs par exemple)
const Show = () => "show";
const Hide = () => "hide";

export const TestInput = () => {
  return <Input size="md" icon={inputIcon} type="password" />;
};

const inputIcon = <div>mon icon</div>;
