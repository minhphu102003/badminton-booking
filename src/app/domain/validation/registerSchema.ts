import { z } from 'zod';
import { loginSchema } from './loginSchema';

export const registerSchema = loginSchema
  .extend({
    name: z
      .string()
      .min(2, { message: 'Name must be at least 2 characters' })
      .max(50, { message: 'Name must be at most 50 characters' }),
    repassword: z.string(),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Passwords don't match",
    path: ['repassword'],
  });

export type RegisterInput = z.infer<typeof registerSchema>;
