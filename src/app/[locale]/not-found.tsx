"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import AnimatedPageWrapper from "@/components/global/Slider/AnimatedPageWrapper";

import styles from "./error.module.scss";

export default function NotFound() {
    const t = useTranslations("common");

    return (
        <AnimatedPageWrapper>
            <div className={styles.container}>
                <h1 className={styles.title}>{t("pageNotFoundTitle")}</h1>
                <p className={styles.message}>{t("pageNotFoundMessage")}</p>
                <Link href="/" className={styles.button}>
                    {t("goBackHome")}
                </Link>
            </div>
        </AnimatedPageWrapper>
    );
}
