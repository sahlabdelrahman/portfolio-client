"use client";

import { useTranslations } from "next-intl";

import AuthComponent from "../AuthComponent/AuthComponent";
import AuthForm from "../AuthForm/AuthForm";

import { getLoginFormConfig } from "./config";

const LoginContent = () => {
    const t = useTranslations();
    const formData = getLoginFormConfig(t);

    return (
        <AuthComponent>
            <AuthForm data={formData} />
        </AuthComponent>
    );
};

export default LoginContent;
