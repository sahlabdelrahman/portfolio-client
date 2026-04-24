import AnimatedPageWrapper from "@/components/global/Slider/AnimatedPageWrapper";

import OtpAuthenticationContent from "@/components/dashboard/Auth/OtpAuthentication/OtpAuthenticationContent";

export default function OtpAuthentication() {
    return (
        <AnimatedPageWrapper>
            <main>
                <OtpAuthenticationContent />
            </main>
        </AnimatedPageWrapper>
    );
}
