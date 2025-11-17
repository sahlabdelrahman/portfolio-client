"use client";

import { memo, useMemo } from "react";

import styles from "./styles.module.scss";

import { ContactProps } from "@/types/client/contact";

import ContactForm from "../Form";
import SafeHTML from "@/components/global/SafeHTML/SafeHTML";

interface ContentProps {
    data: ContactProps;
}

const Content = memo(({ data }: ContentProps) => {
    const { title, description, services } = data;

    const renderServices = useMemo(() => {
        if (!services || services.length === 0) return null;

        return (
            <div className={styles.services}>
                {services.map((service) => (
                    <section className={styles.service} key={service.id}>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        {service.content && <SafeHTML html={service.content} />}
                    </section>
                ))}
            </div>
        );
    }, [services]);

    return (
        <div className={styles.content}>
            <section className={styles.info}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                {renderServices}
            </section>
            <section className={styles.form}>
                <ContactForm />
            </section>
        </div>
    );
});

Content.displayName = "Content";

export default Content;
