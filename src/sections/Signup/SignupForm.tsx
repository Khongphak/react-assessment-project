import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Field from "../../components/ui/Field";
import styles from "./SignupForm.module.css";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormValues) => {
    console.log("Form submitted with data:", _data);
    // TODO: connect to API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
      <Field
        id="name"
        label="Name"
        type="text"
        placeholder="Your name"
        error={errors.name?.message}
        {...register("name")}
      />
      <Field
        id="email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        error={errors.email?.message}
        {...register("email")}
      />
      <Field
        id="password"
        label="Password"
        type="password"
        placeholder="Min. 8 characters"
        error={errors.password?.message}
        {...register("password")}
      />
      <button type="submit" className={styles.submit} disabled={isSubmitting}>
        {isSubmitting ? "Creating account..." : "Create Account"}
      </button>
    </form>
  );
}
