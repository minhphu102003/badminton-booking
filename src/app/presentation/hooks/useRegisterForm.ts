import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RegisterInput, registerSchema } from '@domain/validation/registerSchema';

export const useRegisterForm = (onSubmit: (data: RegisterInput) => void) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
};
