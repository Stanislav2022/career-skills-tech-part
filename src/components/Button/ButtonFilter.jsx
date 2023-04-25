import clsx from "clsx";
import css from "./Button.module.css";

export const ButtonFilter = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.button__filter, {
        [css.isSelected]: selected
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};