import styles from './Select.module.scss';

interface SelectProps {
    options?: string[];
    placeholder: string;
}

export const Select = ({ options, placeholder }: SelectProps) => {
    return (
        <select className={styles.select} required>
            <option value="">{placeholder}</option>
            {options?.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};
