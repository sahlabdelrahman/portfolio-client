"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

import Button from "@/components/global/Button";

import styles from "./error.module.scss";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
    const t = useTranslations("common");

    useEffect(() => {
        console.error("App Error:", error);
    }, [error]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{t("somethingWentWrong")}</h1>
            <p className={styles.message}>
                {error.message || t("anUnexpectedError")}
            </p>
            <Button className={styles.button} onClick={() => reset()}>
                {t("tryAgain")}
            </Button>
        </div>
    );
}
