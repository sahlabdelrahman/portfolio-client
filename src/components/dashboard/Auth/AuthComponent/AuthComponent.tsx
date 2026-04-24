import { ReactNode } from "react";

import styles from "./styles.module.scss";

type AuthComponentProps = {
    children: ReactNode;
};

const AuthComponent = ({ children }: AuthComponentProps) => {
    return <div className={styles.content}>{children}</div>;
};

export default AuthComponent;
