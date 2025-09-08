import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from './GradientBG.module.css';

export default function GradientBG({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={styles.bg}
      animate={reduce ? undefined : { backgroundPosition: ['0% 0%', '100% 100%'] }}
      transition={reduce ? undefined : { duration: 20, repeat: Infinity, repeatType: 'reverse' }}
    >
      {children}
    </motion.div>
  );
}
