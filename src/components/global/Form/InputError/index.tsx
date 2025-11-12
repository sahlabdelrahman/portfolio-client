import { motion } from "framer-motion";

import { framer_error } from "@/utils/helpers/form/validations";

import styles from "./styles.module.scss";

const InputError = ({ message }: { message: string }) => {
    return (
        <motion.p className={styles.inputError} {...framer_error}>
            {message}
        </motion.p>
    );
};

export default InputError;
