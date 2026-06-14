import { z } from "zod";

export const schema = z
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

export type FormValues = z.infer<typeof schema>;
