import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Select } from '../select/Select';
import styles from './Contact.module.scss';

export const Contact = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.texts}>
                <span>Entre em contato</span>
                <h2>Aumente seu resultado de vendas e performance</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                </p>
            </div>
            <div className={styles.form}>
                <h3>Fale com um especialista!</h3>

                <form>
                    <Input type="text" placeholder="Nome completo" required />
                    <Input type="email" placeholder="Email" required />
                    <Input
                        type="text"
                        placeholder="Celular/Whatsapp"
                        required
                        pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                    />
                    <Input type="text" placeholder="Site" required />
                    <Select
                        placeholder="Orçamento para mídia"
                        options={['Instagram', 'Facebook']}
                    />
                    <Button title="Enviar" theme="full" />
                </form>
            </div>
        </section>
    );
};
