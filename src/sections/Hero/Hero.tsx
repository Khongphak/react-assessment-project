import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import JoinNowButton from "../../components/ui/JoinNowButton";
import Field from "../../components/ui/Field";
import styles from "./Hero.module.css";

const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  country: z.string().min(1, "Please select a country"),
  code: z.string().min(5, "Postal code must be at least 5 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email"),
  experience: z.string().min(2, "Experience must be at least 2 characters"),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must accept the Privacy Policy and Terms and Conditions",
  }),
});

type FormValues = z.infer<typeof schema>;

export default function Hero() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted with data:", _data);
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.headline1}>Lorem ipsum dolor</h1>
      <h1 className={styles.headline2}>sit amet tosik</h1>

      <div className={styles.formContainer}>
        <p className={styles.formTitle}>Lorem ipsum dolor sit amet</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          noValidate
        >
          <div className={styles.fieldsGrid}>
            <Field
              id="firstName"
              label="First Name"
              type="text"
              placeholder="First name"
              error={errors.firstName?.message}
              {...register("firstName")}
            />
            <Field
              id="lastName"
              label="Last Name"
              type="text"
              placeholder="Last name"
              error={errors.lastName?.message}
              {...register("lastName")}
            />
            <Field
              id="country"
              label="Country"
              type="select"
              error={errors.country?.message}
              options={[
                { label: "Select country", value: "" },
                { label: "Thailand", value: "TH" },
                { label: "United States", value: "US" },
                { label: "United Kingdom", value: "GB" },
                { label: "Japan", value: "JP" },
                { label: "Singapore", value: "SG" },
                { label: "Australia", value: "AU" },
                { label: "Germany", value: "DE" },
                { label: "France", value: "FR" },
                { label: "Canada", value: "CA" },
                { label: "India", value: "IN" },
              ]}
              {...register("country")}
            />
            <div className={styles.codePhone}>
              <Field
                id="code"
                label="Code"
                type="text"
                placeholder="Code"
                error={errors.code?.message}
                {...register("code")}
              />
              <Field
                id="phone"
                label="Phone Number"
                type="text"
                placeholder="Phone number"
                error={errors.phone?.message}
                {...register("phone")}
              />
            </div>
            <Field
              id="email"
              label="Email"
              type="email"
              placeholder="Email"
              error={errors.email?.message}
              {...register("email")}
            />
            <Field
              id="experience"
              label="Experience"
              type="text"
              placeholder="Experience"
              error={errors.experience?.message}
              {...register("experience")}
            />
          </div>

          <div className={styles.checkboxContainer}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                {...register("privacyPolicy")}
              />
              I have read and accepted the{" "}
              <span className={styles.checkboxLabelHighlight}>
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className={styles.checkboxLabelHighlight}>
                Terms and Conditions
              </span>
            </label>
            {errors.privacyPolicy && (
              <span className={styles.checkboxError}>
                {errors.privacyPolicy.message}
              </span>
            )}
          </div>

          <div className={styles.submitButtonContainer}>
            <JoinNowButton
              className={styles.submitButton}
              isSubmitting={isSubmitting}
            ></JoinNowButton>
          </div>
        </form>
      </div>
    </section>
  );
}
