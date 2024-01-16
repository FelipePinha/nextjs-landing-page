import { Button } from '../button/Button';
import styles from './Welcome.module.scss';

export const Welcome = () => {
    return (
        <section className={styles.welcome}>
            <div className={styles.text}>
                <h1>Melhor agência de marketing do bairro</h1>
                <p>
                    Somos uma agência de performance digital, aceleramos vendas e aquisição de leads
                    para grandes marcas.
                </p>
                <Button theme="secondary" title="Aumentar vendas" />
            </div>
            <div className={styles.image}></div>
        </section>
    );
};
