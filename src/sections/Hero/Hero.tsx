import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";

import Field from "../../components/ui/Field";
import JoinNowButton from "../../components/ui/JoinNowButton";
import { COUNTRY_CODES, COUNTRY_OPTIONS } from "./constants";
import { useRegisterMutation } from "./useRegisterMutation";
import { schema, type FormValues } from "./schema";
import styles from "./Hero.module.css";

export default function Hero() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const { mutate, isPending, notification } = useRegisterMutation();

  const selectedCountry = useWatch({ control, name: "country" });

  useEffect(() => {
    if (selectedCountry && COUNTRY_CODES[selectedCountry]) {
      setValue("code", COUNTRY_CODES[selectedCountry], { shouldValidate: true });
    }
  }, [selectedCountry, setValue]);

  const onSubmit = (data: FormValues) => {
    mutate(data);
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.headerTitle1}>Lorem ipsum dolor</h1>
      <h1 className={styles.headerTitle2}>sit amet tosik</h1>

      <div className={styles.formContainer}>
        <p className={styles.formTitle}>Lorem ipsum dolor sit amet</p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
          <div className={styles.fieldsGrid}>
            <Field
              id="firstName"
              type="text"
              placeholder="First name"
              error={errors.firstName?.message}
              {...register("firstName")}
            />
            <Field
              id="lastName"
              type="text"
              placeholder="Last name"
              error={errors.lastName?.message}
              {...register("lastName")}
            />
            <Field
              id="country"
              type="select"
              options={COUNTRY_OPTIONS}
              error={errors.country?.message}
              {...register("country")}
            />
            <div className={styles.codePhone}>
              <Field
                id="code"
                type="text"
                placeholder="Code"
                error={errors.code?.message}
                {...register("code")}
              />
              <Field
                id="phone"
                type="text"
                placeholder="Phone number"
                error={errors.phone?.message}
                {...register("phone")}
              />
            </div>
            <Field
              id="email"
              type="email"
              placeholder="Email"
              error={errors.email?.message}
              {...register("email")}
            />
            <Field
              id="experience"
              type="number"
              placeholder="Experience"
              error={errors.experience?.message}
              {...register("experience", { valueAsNumber: true })}
            />
          </div>

          <div className={styles.checkboxContainer}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                {...register("privacyPolicy")}
              />
              <span>
                I have read and accepted the{" "}
                <span className={styles.checkboxLabelHighlight}>Privacy Policy</span>{" "}
                and{" "}
                <span className={styles.checkboxLabelHighlight}>Terms and Conditions</span>
              </span>
            </label>
          </div>

          <div className={styles.submitButtonContainer}>
            <JoinNowButton
              className={styles.submitButton}
              isSubmitting={isPending}
            />
          </div>

          {errors.privacyPolicy && (
            <span className={styles.checkboxError}>{errors.privacyPolicy.message}</span>
          )}
          {notification && (
            <div className={`${styles.notification} ${styles[notification.type]}`}>
              {notification.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
