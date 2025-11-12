import { useTranslations } from "next-intl";

import { InputProps } from "@/components/global/Form/Input";
import { emailRegEx } from "@/utils/helpers/form/validations";

export const useContactFields = (): InputProps[] => {
    const t = useTranslations("common.form");

    return [
        {
            name: "fullName",
            id: "fullName",
            label: t("fullName"),
            type: "text",
            validation: {
                required: { value: true, message: t("required") },
                minLength: { value: 2, message: t("minLength") },
                maxLength: { value: 200, message: t("maxLength") },
            },
        },
        {
            name: "email",
            id: "email",
            label: t("email"),
            type: "email",
            validation: {
                required: { value: true, message: t("required") },
                pattern: {
                    value: emailRegEx,
                    message: t("emailValidation"),
                },
                maxLength: { value: 200, message: t("maxLength") },
            },
        },
        {
            name: "subject",
            id: "subject",
            label: t("subject"),
            type: "text",
            validation: {
                required: { value: true, message: t("required") },
                minLength: { value: 2, message: t("minLength") },
                maxLength: { value: 200, message: t("maxLength") },
            },
        },
        {
            name: "message",
            id: "message",
            label: t("message"),
            multiline: true,
            validation: {
                required: { value: true, message: t("required") },
                minLength: { value: 2, message: t("minLength") },
                maxLength: { value: 3000, message: t("maxLength") },
            },
        },
    ];
};
