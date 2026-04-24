"use client";

import { useEffect, useState } from "react";
import { useFormContext, FieldValues } from "react-hook-form";
import { AnimatePresence } from "framer-motion";

import { FormField } from "@/types/dashboard/auth/form";
import InputError from "../InputError";

import EyeIcon from "@/components/global/icons/auth/EyeIcon";
import EyeOffIcon from "@/components/global/icons/auth/EyeOffIcon";

import styles from "./styles.module.scss";

export const Input = ({
    name,
    label,
    type = "text",
    id,
    placeholder = "",
    value,
    validation = {},
    multiline = false,
    numberOfLines = 4,
    minLength,
    maxLength,
    onlyNumbers,
}: FormField) => {
    const {
        register,
        formState: { errors },
        setValue,
    } = useFormContext<FieldValues>();

    const [showPassword, setShowPassword] = useState(false);

    const isPasswordField = type === "password";
    const [hasValue, setHasValue] = useState(false);

    useEffect(() => {
        if (value !== undefined && value !== null) {
            setValue(name, value);
        }
    }, []);

    const hasError = !!errors?.[name]?.message;
    const isRequired = !!validation?.required;

    return (
        <div className={styles.inputComponent}>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                    {isRequired && <span className={styles.required}>*</span>}
                </label>
            )}

            {multiline ? (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    rows={numberOfLines}
                    className={styles.input}
                    minLength={minLength}
                    maxLength={maxLength}
                    {...register(name, validation)}
                />
            ) : (
                <div className={styles.fieldWrapper}>
                    <input
                        id={id}
                        type={
                            isPasswordField
                                ? showPassword
                                    ? "text"
                                    : "password"
                                : type
                        }
                        placeholder={placeholder}
                        className={styles.input}
                        minLength={minLength}
                        maxLength={maxLength}
                        {...register(name, validation)}
                        onInput={(e) => {
                            if (onlyNumbers) {
                                e.currentTarget.value =
                                    e.currentTarget.value.replace(/\D/g, "");
                            }

                            setHasValue(e.currentTarget.value.length > 0);
                        }}
                    />
                    {isPasswordField && hasValue && (
                        <button
                            type="button"
                            className={styles.togglePassword}
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? (
                                <EyeOffIcon width={20} height={20} />
                            ) : (
                                <EyeIcon width={20} height={20} />
                            )}
                        </button>
                    )}
                </div>
            )}

            <AnimatePresence mode="wait" initial={false}>
                {hasError && (
                    <InputError message={String(errors[name]?.message)} />
                )}
            </AnimatePresence>
        </div>
    );
};
