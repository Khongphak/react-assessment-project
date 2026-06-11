import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Button from "../../components/ui/Button";
import Field from "../../components/ui/Field";
import styles from "./Hero.module.css";

const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  code: z.string().min(5, "Postal code must be at least 5 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email"),
  experience: z.string().min(2, "Experience must be at least 2 characters"),
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
              type="text"
              placeholder="Country"
              error={errors.country?.message}
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
              type="select"
              placeholder="Experience"
              error={errors.experience?.message}
              {...register("experience")}
            />
          </div>

          <Button
            variant="primary"
            className={styles.registerButton}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? " Joining..." : " Join Now"}
          </Button>
        </form>
      </div>
    </section>
  );
}
