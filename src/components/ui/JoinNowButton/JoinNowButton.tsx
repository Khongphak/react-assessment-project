import styles from "./JoinNowButton.module.css";
import Button from "../../ui/Button/Button";

export default function JoinNowButton({
  isShow = false,
  isSubmitting = false,
  onClick,
  type = "submit",
  className,
}: {
  isShow?: boolean;
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
      {isShow && <p className={styles.termsText}>Terms and Conditions apply</p>}
    </div>
  );
}
