"useClient";

import { Link } from "@/i18n/navigation";

import styles from "./[locale]/error.module.scss";

export default function GlobalNotFound() {
    return (
        <html lang="en">
            <body>
                <div className={styles.container}>
                    <h1 className={styles.title}>404 – Page Not Found</h1>
                    <p className={styles.message}>
                        Sorry, the page you’re looking for doesn’t exist or has
                        been moved.
                    </p>
                    <Link href="/" className={styles.button}>
                        Go back home
                    </Link>
                </div>
            </body>
        </html>
    );
}
