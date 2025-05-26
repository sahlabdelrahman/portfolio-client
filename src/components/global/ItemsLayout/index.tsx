import { Children, ReactNode } from "react";

import NoData from "../NoData";

import styles from "./styles.module.scss";

const ItemsLayout = ({ children }: { children: ReactNode }) => {
    const hasItems = Children.count(children) > 0;

    return (
        <div className={styles.itemsLayout}>
            {hasItems ? children : <NoData />}
        </div>
    );
};

export default ItemsLayout;
