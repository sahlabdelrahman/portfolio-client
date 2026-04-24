"use client";

import { useCallback } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

import { Link } from "@/i18n/navigation";

import { Input } from "@/components/global/Form/Input";
import Button from "@/components/global/Button";

import { FormConfig } from "@/types/dashboard/auth/form";

import styles from "./styles.module.scss";

type AuthFormValues = Record<string, unknown>;

interface AuthFormProps {
    data: FormConfig;
}

const AuthForm = ({ data }: AuthFormProps) => {
    const {
        // page,
        // api,
        // success,
        title,
        description,
        fields,
        submitText,
        addons,
    } = data;

    const methods = useForm<AuthFormValues>({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
            confirmationPassword: "",
        },
    });

    const onSubmit: SubmitHandler<AuthFormValues> = useCallback(
        (data) => {
            console.log("🚀 ~ data:", data);
            methods.reset();
        },
        [methods],
    );

    const {
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = methods;
    return (
        <div className={styles.authForm}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>
            <FormProvider {...methods}>
                <form
                    className={styles.form}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    {fields?.map((field) => (
                        <Input key={field.id} {...field} />
                    ))}

                    <Button
                        className={styles.button}
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        aria-current="true"
                        title={submitText}
                    >
                        {submitText}
                    </Button>
                    {addons && (
                        <div className={styles.addons}>
                            {Object.values(addons)?.map((addon) => (
                                <Link
                                    className={styles.addon}
                                    key={addon.path}
                                    href={addon.path}
                                    aria-label={`Navigate to ${addon.title}`}
                                    title={`Navigate to ${addon.title}`}
                                >
                                    {addon.title}
                                </Link>
                            ))}
                        </div>
                    )}
                </form>
            </FormProvider>
        </div>
    );
};

export default AuthForm;
