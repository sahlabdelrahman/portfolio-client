import { passwordRegEx } from "@/utils/helpers/form/validations";

import { FormConfig } from "@/types/dashboard/auth/form";
import { TranslationFnProps } from "@/types/client/i18n";

export const getResetPasswordConfig = (t: TranslationFnProps): FormConfig => ({
    page: "reset-password",
    api: "/reset-password",
    title: t("auth.resetPassword.title"),
    description: t("auth.resetPassword.description"),
    submitText: t("auth.resetPassword.submitText"),
    fields: [
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
        {
            id: "confirmationPassword",
            name: "confirmationPassword",
            type: "password",
            label: t("common.form.confirmationPassword"),
            placeholder: t("common.form.confirmationPassword"),
            maxLength: 200,
            validation: {
                validate: (value, formValues) =>
                    value === formValues.password ||
                    t("common.form.passwordsDoNotMatch"),
            },
        },
    ],
    addons: {
        login: {
            path: "/login",
            title: t("auth.resetPassword.backToLogin"),
        },
    },
    success: {
        redirectPath: "/login",
    },
});
