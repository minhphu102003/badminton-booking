'use client';

import './TextInput.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { EyeIcon, EyeSlashIcon } from '@presentation/icons';

type Props = {
  label: string;
  isPassword?: boolean;
  placeHolderText?: string;
  className?: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
};

export default function TextInput({
  label,
  isPassword = false,
  placeHolderText = '',
  className = '',
  error,
  register,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  console.log(error);
  return (
    <div className={`text-input ${className}`}>
      <label className="form-label">{label}</label>

      {!isPassword ? (
        <input
          {...register}
          type="text"
          className={`form-control ${error ? 'is-invalid' : ''}`}
          placeholder={placeHolderText}
        />
      ) : (
        <div className="position-relative">
          <input
            {...register}
            type={showPassword ? 'text' : 'password'}
            className={`form-control pe-5 ${error ? 'is-invalid' : ''}`}
            placeholder={placeHolderText}
          />
          <button
            type="button"
            className="btn position-absolute top-50 end-0 translate-middle-y me-2 p-0 border-0 bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeSlashIcon className="text-primary" />
            ) : (
              <EyeIcon className="text-muted" />
            )}
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            className="invalid-feedback my-1"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            {error.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
