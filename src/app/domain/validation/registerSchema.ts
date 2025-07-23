import z from 'zod';
import { loginSchema } from './loginSchema';

export const registerSchema = loginSchema
  .extend({
    repassword: z.string(),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Passwords don't match",
    path: ['repassword'],
  });

export type RegisterInput = z.infer<typeof registerSchema>;
