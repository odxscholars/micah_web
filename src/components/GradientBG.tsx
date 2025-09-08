import {motion, useReducedMotion} from 'framer-motion';
import {ReactNode} from 'react';
import styles from './GradientBG.module.css';

export default function GradientBG({children}: { children: ReactNode }) {
    const reduce = useReducedMotion();
    return (
        <motion.div
            className={styles.bg}
            animate={
                reduce
                    ? undefined
                    : {
                        backgroundPosition: ['0% 50%', '100% 50%'],
                    }
            }
            transition={
                reduce
                    ? undefined
                    : {duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'linear'}
            }
        >
            {children}
        </motion.div>

    );
}
