import styles from "./JoinNowButton.module.css";
import Button from "../../ui/Button/Button";

export default function JoinNowButton({
  isShowTerm = false,
  isSubmitting = false,
  onClick,
  type = "submit",
  className,
}: {
  isShowTerm?: boolean;
  isSubmitting?: boolean;
  onClick?: () => void;
  type?: "submit" | "button";
  className?: string;
}) {
  return (
    <div className={styles.joinNowButtonContainer}>
      <Button
        variant="primary"
        type={type}
        disabled={isSubmitting}
        onClick={onClick}
        className={className}
      >
        {isSubmitting ? " Joining..." : " Join Now"}
      </Button>
      {isShowTerm && (
        <p className={styles.termsText} onClick={() => alert("Terms & Condition detail")}>
          Terms and Conditions apply
        </p>
      )}
    </div>
  );
}
