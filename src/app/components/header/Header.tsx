import Logo from '@/app/images/agência.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import { Button } from '../button/Button';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="logo">
                <Image src={Logo} priority alt="logotipo" />
            </div>
            <div className={styles.menu}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">O que fazemos</Link>
                    </li>
                    <li>
                        <Link href="/">Cases</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.action}>
                <Button theme="primary" title="Fale conosco" />
            </div>
        </header>
    );
};
