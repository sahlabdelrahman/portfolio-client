import styles from "./style.module.scss";

export default function Loader() {
    return (
        <div className={styles.loader} role="status" aria-label="Loading">
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
