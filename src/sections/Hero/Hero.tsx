import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

import JoinNowButton from "../../components/ui/JoinNowButton";
import Field from "../../components/ui/Field";
import styles from "./Hero.module.css";

const schema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    country: z.string().min(1, "Please select a country"),
    code: z.string().min(2, "Please enter a valid country code"),
    phone: z.string().min(1, "Phone number is required"),
    email: z.email("Please enter a valid email"),
    experience: z
      .number({ error: "Experience must be a number" })
      .min(0, "Experience must be 0 or more"),
    privacyPolicy: z.boolean().refine((val) => val === true, {
      message: "You must accept the Privacy Policy and Terms and Conditions",
    }),
  })
  .superRefine((data, ctx) => {
    const digits = data.phone.replace(/\D/g, "");

    if (digits.length < 7) {
      ctx.addIssue({
        code: "custom",
        path: ["phone"],
        message: "Phone number must be at least 7 digits",
      });
    }

    if (data.code.startsWith("+") && data.phone.startsWith("0")) {
      ctx.addIssue({
        code: "custom",
        path: ["phone"],
        message: `Remove the leading 0 when using a country code — e.g. ${data.phone.slice(1)} instead of ${data.phone}`,
      });
    }
  });

type FormValues = z.infer<typeof schema>;

const COUNTRY_CODES: Record<string, string> = {
  TH: "+66",
  US: "+1",
  GB: "+44",
  JP: "+81",
  SG: "+65",
  AU: "+61",
  DE: "+49",
  FR: "+33",
  CA: "+1",
  IN: "+91",
  CY: "+357",
};

async function registerUser(data: FormValues): Promise<{ success: boolean; message: string }> {
  const response = await axios.post<{ success: boolean; message: string }>("/api/register", data);
  return response.data;
}

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

  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (result) => {
      setNotification({ type: "success", message: result.message });
    },
    onError: (error) => {
      const message = isAxiosError(error)
        ? (error.response?.data as { message?: string })?.message ?? "Something went wrong. Please try again."
        : "Could not reach the server. Please try again.";
      setNotification({ type: "error", message });
    },
  });

  const selectedCountry = useWatch({ control, name: "country" });

  useEffect(() => {
    if (selectedCountry && COUNTRY_CODES[selectedCountry]) {
      setValue("code", COUNTRY_CODES[selectedCountry], {
        shouldValidate: true,
      });
    }
  }, [selectedCountry, setValue]);

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setNotification(null), 5000);
    return () => clearTimeout(timer);
  }, [notification]);

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.headerTitle1 }>Lorem ipsum dolor</h1>
      <h1 className={styles.headerTitle2}>sit amet tosik</h1>

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
              error={errors.country?.message}
              options={[
                { label: "Select country", value: "" },
                { label: "Australia", value: "AU" },
                { label: "Canada", value: "CA" },
                { label: "Cyprus", value: "CY" },
                { label: "France", value: "FR" },
                { label: "Germany", value: "DE" },
                { label: "India", value: "IN" },
                { label: "Japan", value: "JP" },
                { label: "Singapore", value: "SG" },
                { label: "Thailand", value: "TH" },
                { label: "United Kingdom", value: "GB" },
                { label: "United States", value: "US" },
              ]}
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
                <span className={styles.checkboxLabelHighlight}>
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className={styles.checkboxLabelHighlight}>
                  Terms and Conditions
                </span>
              </span>
            </label>
          </div>

          <div className={styles.submitButtonContainer}>
            <JoinNowButton
              className={styles.submitButton}
              isSubmitting={mutation.isPending}
            ></JoinNowButton>
          </div>
          {errors.privacyPolicy && (
            <span className={styles.checkboxError}>
              {errors.privacyPolicy.message}
            </span>
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
