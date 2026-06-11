import { forwardRef, type InputHTMLAttributes } from "react";
import styles from "./Field.module.css";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ error, id, ...props }, ref) => {
    return (
      <div className={styles.field}>
        <input
          id={id}
          ref={ref}
          aria-describedby={error ? `${id}-error` : undefined}
          className={[styles.input, error && styles.inputError]
            .filter(Boolean)
            .join(" ")}
          {...props}
        />
        {error && (
          <span id={`${id}-error`} className={styles.error} role="alert">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Field.displayName = "Field";

export default Field;
