import styles from './Button.module.scss';

interface ButtonProps {
    title: string;
    theme: 'primary' | 'secondary';
}

export const Button = ({ title, theme }: ButtonProps) => {
    const generateClassByTheme = () => (theme === 'primary' ? styles.primary : styles.secondary);

    return <button className={`${styles.button} ${generateClassByTheme()}`}>{title}</button>;
};
