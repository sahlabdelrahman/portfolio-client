import { useTranslations } from "next-intl";

import styles from "./styles.module.scss";

const NoData = ({ text }: { text?: string }) => {
    const t = useTranslations("common");
    return (
        <div className={styles.noData}>
            <p className={styles.text}>{text || t("noData")}</p>
        </div>
    );
};

export default NoData;
