import Image from 'next/image';
import styles from './Features.module.scss';
import Icon from '../../images/feature-icon.svg';
import { Feature } from '../feature/Feature';

const featuresObj = [
    {
        id: 1,
        icon: Icon,
        title: 'Digital Strategy',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    {
        id: 2,
        icon: Icon,
        title: 'Estratégia digital',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 3,
        icon: Icon,
        title: 'Social Midia',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 4,
        icon: Icon,
        title: 'Social Midia',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

export const Features = () => {
    return (
        <section className={styles.features}>
            <h2>Neste bairro, não há agência melhor. Garantimos.</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>

            <div className={styles.featuresWrapper}>
                {featuresObj.map(feat => (
                    <Feature feat={feat} />
                ))}
            </div>
        </section>
    );
};
