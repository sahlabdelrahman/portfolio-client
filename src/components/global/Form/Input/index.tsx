"use client";

import { useEffect } from "react";
import { useFormContext, RegisterOptions, FieldValues } from "react-hook-form";
import { AnimatePresence } from "framer-motion";

import InputError from "../InputError";

import styles from "./styles.module.scss";

export interface InputProps {
    name: string;
    label?: string;
    type?: string;
    id: string;
    placeholder?: string;
    value?: string;
    validation?: RegisterOptions;
    multiline?: boolean;
    numberOfLines?: number;
}

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
}: InputProps) => {
    const {
        register,
        formState: { errors },
        setValue,
    } = useFormContext<FieldValues>();

    useEffect(() => {
        if (value !== undefined && value !== null) {
            setValue(name, value);
        }
    }, [name, value, setValue]);

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
                    {...register(name, validation)}
                />
            ) : (
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className={styles.input}
                    {...register(name, validation)}
                />
            )}

            <AnimatePresence mode="wait" initial={false}>
                {hasError && (
                    <InputError message={String(errors[name]?.message)} />
                )}
            </AnimatePresence>
        </div>
    );
};
