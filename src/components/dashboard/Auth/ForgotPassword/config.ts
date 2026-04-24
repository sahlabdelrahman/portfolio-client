import { emailRegEx } from "@/utils/helpers/form/validations";
import { FormConfig } from "@/types/dashboard/auth/form";
import { TranslationFnProps } from "@/types/client/i18n";

export const getForgotPasswordConfig = (t: TranslationFnProps): FormConfig => ({
    page: "forgot-password",
    api: "/forgot-password",
    title: t("auth.forgotPassword.title"),
    description: t("auth.forgotPassword.description"),
    submitText: t("auth.forgotPassword.submitText"),
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
    ],
    addons: {
        login: {
            path: "/login",
            title: t("auth.forgotPassword.backToLogin"),
        },
    },
    success: {
        redirectPath: "/otp-authentication",
    },
});
