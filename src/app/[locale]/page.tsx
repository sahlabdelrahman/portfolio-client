import Content from "@/components/client/Home/Content";
import NoData from "@/components/global/NoData";

import { items } from "./config";

import styles from "./styles.module.scss";

export default function Home() {
    const hasData = items.length > 0;

    return (
        <main className={styles.main}>
            {hasData ? <Content data={items} /> : <NoData />}
        </main>
    );
}
