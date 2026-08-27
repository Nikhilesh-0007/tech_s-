import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, { message: "Full Name must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  phone: z.string().regex(/^[+]?[0-9\s-]{10,15}$/, { message: "Please enter a valid phone number (10 to 15 digits)." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().min(1, { message: "Please select a service from the dropdown." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
