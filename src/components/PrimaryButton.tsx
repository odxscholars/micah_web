import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './PrimaryButton.module.css';

export default function PrimaryButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={classNames(styles.btn, className)} {...props} />;
}
