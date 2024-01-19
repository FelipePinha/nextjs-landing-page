import styles from './Button.module.scss';

interface ButtonProps {
    title: string;
    theme: 'primary' | 'secondary' | 'full';
}

export const Button = ({ title, theme }: ButtonProps) => {
    const generateClassByTheme = () => {
        if (theme === 'secondary') return styles.secondary;
        if (theme === 'full') return styles.full;

        return styles.primary;
    };

    return <button className={`${styles.button} ${generateClassByTheme()}`}>{title}</button>;
};
