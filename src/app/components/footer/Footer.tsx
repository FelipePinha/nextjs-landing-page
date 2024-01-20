'use client';

import Image from 'next/image';
import styles from './Footer.module.scss';
import Logo from '@/app/images/agência.svg';
import Link from 'next/link';
import { InstagramLogo, WhatsappLogo, LinkedinLogo, YoutubeLogo } from '@phosphor-icons/react';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.column} ${styles.columnPrincipal}`}>
                <Image src={Logo} alt="logo" />
                <h3 className={styles.title}>0800 800 800</h3>
                <p>comercial@agencia.com.br</p>
            </div>
            <div className={styles.column}>
                <h3>MENU</h3>
                <Link href="/">Quem somos</Link>
                <Link href="/">Cases</Link>
            </div>
            <div className={styles.column}>
                <h3>CONTEÚDO</h3>
                <Link href="/">E-books</Link>
                <Link href="/">Fórmulas prontas</Link>
            </div>
            <div className={styles.column}>
                <h3 className={styles.alignRight}>Social</h3>
                <div className={styles.socialLinks}>
                    <Link href={'/'}>
                        <InstagramLogo size={40} />
                    </Link>
                    <Link href={'/'}>
                        <WhatsappLogo size={40} weight="fill" />
                    </Link>
                    <Link href={'/'}>
                        <LinkedinLogo size={40} weight="fill" />
                    </Link>
                    <Link href={'/'}>
                        <YoutubeLogo size={40} weight="fill" />
                    </Link>
                </div>
            </div>
            <div className={styles.allRightsReserved}>
                <p>©2022 AGENCIA - Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};
