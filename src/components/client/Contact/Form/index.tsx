"use client";

import { memo, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useContactFields } from "./config";
import { Input } from "@/components/global/Form/Input";
import Button from "@/components/global/Button";
import styles from "./styles.module.scss";

interface ContactFormValues {
    fullName: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm = memo(() => {
    const t = useTranslations("common.form");
    const fields = useContactFields();

    const methods = useForm<ContactFormValues>({
        mode: "onTouched",
        defaultValues: {
            fullName: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit: SubmitHandler<ContactFormValues> = useCallback(
        (data) => {
            console.log("data =>", data);
            methods.reset();
        },
        [methods]
    );

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    return (
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
                    disabled={isSubmitting}
                    aria-current="true"
                    title={t("send")}
                >
                    {t("send")}
                </Button>
            </form>
        </FormProvider>
    );
});

ContactForm.displayName = "ContactForm";
export default ContactForm;
