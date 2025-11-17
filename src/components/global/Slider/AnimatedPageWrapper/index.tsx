"use client";

import { HTMLMotionProps, motion } from "framer-motion";

const AnimatedPageWrapper = (props: HTMLMotionProps<"div">) => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                {...props}
            />
        </div>
    );
};

export default AnimatedPageWrapper;
