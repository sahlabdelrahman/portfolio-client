import { useTranslations } from "next-intl";

import AuthComponent from "../AuthComponent/AuthComponent";
import AuthForm from "../AuthForm/AuthForm";

import { getOtpAuthenticationConfig } from "./config";

const OtpAuthenticationContent = () => {
    const t = useTranslations();
    const formData = getOtpAuthenticationConfig(t);

    return (
        <AuthComponent>
            <AuthForm data={formData} />
        </AuthComponent>
    );
};

export default OtpAuthenticationContent;
