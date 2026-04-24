import { FormConfig } from "@/types/dashboard/auth/form";
import { TranslationFnProps } from "@/types/client/i18n";

export const getOtpAuthenticationConfig = (
    t: TranslationFnProps,
): FormConfig => ({
    page: "otp-authentication",
    api: "/otp-authentication",
    title: t("auth.otpAuthentication.title"),
    description: t("auth.otpAuthentication.description"),
    submitText: t("auth.otpAuthentication.submitText"),
    fields: [
        {
            id: "otp",
            name: "otp",
            type: "text",
            label: t("common.form.otp"),
            placeholder: "392021",
            maxLength: 6,
            onlyNumbers: true,
            validation: {
                required: {
                    value: true,
                    message: t("common.form.required"),
                },
                minLength: {
                    value: 6,
                    message: t("common.form.minLength"),
                },
                maxLength: {
                    value: 6,
                    message: t("common.form.maxLength"),
                },
            },
        },
    ],
    addons: {
        login: {
            path: "/login",
            title: t("auth.otpAuthentication.backToLogin"),
        },
    },
    success: {
        redirectPath: "/reset-password",
    },
});
