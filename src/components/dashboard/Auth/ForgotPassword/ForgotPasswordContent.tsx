"use client";

import { useTranslations } from "next-intl";

import AuthComponent from "../AuthComponent/AuthComponent";
import AuthForm from "../AuthForm/AuthForm";

import { getForgotPasswordConfig } from "./config";

const ForgotPasswordContent = () => {
    const t = useTranslations();
    const formData = getForgotPasswordConfig(t);

    return (
        <AuthComponent>
            <AuthForm data={formData} />
        </AuthComponent>
    );
};

export default ForgotPasswordContent;
