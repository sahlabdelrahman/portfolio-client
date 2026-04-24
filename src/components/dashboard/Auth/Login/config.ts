import { emailRegEx, passwordRegEx } from "@/utils/helpers/form/validations";

import { FormConfig } from "@/types/dashboard/auth/form";

import { TranslationFnProps } from "@/types/client/i18n";

export const getLoginFormConfig = (t: TranslationFnProps): FormConfig => ({
    page: "login",
    api: "/login",
    title: t("auth.login.title"),
    description: t("auth.login.description"),
    submitText: t("auth.login.submitText"),
    fields: [
        {
            id: "email",
            name: "email",
            type: "email",
            label: t("common.form.email"),
            placeholder: "john@email.com",
            maxLength: 200,
            validation: {
                required: {
                    value: true,
                    message: t("common.form.required"),
                },
                pattern: {
                    value: emailRegEx,
                    message: t("common.form.emailValidation"),
                },
                maxLength: {
                    value: 200,
                    message: t("common.form.maxLength"),
                },
            },
        },
        {
            id: "password",
            name: "password",
            type: "password",
            label: t("common.form.password"),
            placeholder: t("common.form.password"),
            maxLength: 200,
            validation: {
                required: {
                    value: true,
                    message: t("common.form.required"),
                },
                minLength: {
                    value: 8,
                    message: t("common.form.passwordMin"),
                },
                pattern: {
                    value: passwordRegEx,
                    message: t("common.form.passwordValidation"),
                },
                maxLength: {
                    value: 200,
                    message: t("common.form.maxLength"),
                },
            },
        },
    ],
    addons: {
        "forgot-password": {
            path: "/forgot-password",
            title: t("auth.login.forgotPassword"),
        },
    },
    success: {
        redirectPath: "/dashboard",
    },
});
