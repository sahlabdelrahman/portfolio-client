"use client";

import { useTranslations } from "next-intl";

import AuthComponent from "../AuthComponent/AuthComponent";
import AuthForm from "../AuthForm/AuthForm";

import { getResetPasswordConfig } from "./config";

const ResetPasswordContent = () => {
    const t = useTranslations();
    const formData = getResetPasswordConfig(t);
    return (
        <AuthComponent>
            <AuthForm data={formData} />
        </AuthComponent>
    );
};

export default ResetPasswordContent;
