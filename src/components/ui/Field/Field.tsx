import {
  forwardRef,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
} from "react";
import styles from "./Field.module.css";

type BaseProps = {
  error?: string;
  id?: string;
};

type InputFieldProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & {
    type?: Exclude<string, "select">;
    options?: never;
  };

type SelectFieldProps = BaseProps &
  SelectHTMLAttributes<HTMLSelectElement> & {
    type: "select";
    options: { label: string; value: string }[];
  };

type FieldProps = InputFieldProps | SelectFieldProps;

const Field = forwardRef<HTMLInputElement | HTMLSelectElement, FieldProps>(
  ({ error, id, ...props }, ref) => {
    const errorId = error ? `${id}-error` : undefined;
    const className = [styles.input, error && styles.inputError]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={styles.field}>
        {props.type === "select" ? (
          <select
            id={id}
            ref={ref as React.Ref<HTMLSelectElement>}
            aria-describedby={errorId}
            className={className}
            {...(props as SelectHTMLAttributes<HTMLSelectElement>)}
          >
            {((props as SelectFieldProps).options ?? []).map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            ref={ref as React.Ref<HTMLInputElement>}
            aria-describedby={errorId}
            className={className}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {error && (
          <span id={errorId} className={styles.error} role="alert">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Field.displayName = "Field";

export default Field;
