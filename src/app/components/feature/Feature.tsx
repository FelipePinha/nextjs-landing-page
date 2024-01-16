import Image from 'next/image';
import styles from './Feature.module.scss';

interface FeatureProps {
    feat: {
        id: number;
        icon: string;
        title: string;
        description: string;
    };
}

export const Feature = ({ feat }: FeatureProps) => {
    return (
        <article key={feat.id} className={styles.feature}>
            <Image src={feat.icon} alt="feature icon" />
            <h3>{feat.title}</h3>
            <p>{feat.description}</p>
        </article>
    );
};
