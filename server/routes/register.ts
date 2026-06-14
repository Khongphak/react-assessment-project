import { Router, type Request, type Response } from "express";
import { z } from "zod";
import db from "../db.js";

const router = Router();

const registerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  country: z.string().min(1, "Country is required"),
  code: z.string().min(2, "Country code is required"),
  phone: z.string().min(7, "Phone number must be at least 7 digits"),
  email: z.string().email("Invalid email address"),
  experience: z.number().min(0, "Experience must be 0 or more"),
});

router.post("/", (req: Request, res: Response) => {
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      success: false,
      errors: result.error.flatten().fieldErrors,
    });
    return;
  }

  const { firstName, lastName, country, code, phone, email, experience } =
    result.data;

  try {
    db.prepare(
      `INSERT INTO registrations (first_name, last_name, country, code, phone, email, experience)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    ).run(firstName, lastName, country, code, phone, email, experience);

    res
      .status(201)
      .json({ success: true, message: "Registration successful!" });
  } catch (err: unknown) {
    if (
      err instanceof Error &&
      err.message.includes("UNIQUE constraint failed")
    ) {
      res
        .status(409)
        .json({ success: false, message: "This email is already registered." });
      return;
    }
    res
      .status(500)
      .json({ success: false, message: "Internal server error. Please try again." });
  }
});

export default router;
