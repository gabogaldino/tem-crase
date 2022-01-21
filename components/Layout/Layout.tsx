import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  justifyContent?: 'center' | 'flex-start';
};

export default function Layout({ children, justifyContent = 'center' }: Props) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>
            <span className={styles.symbol}>
              <Image
                src="/logo.svg"
                width={16}
                height={16}
                alt="temcrase.com"
              />
            </span>
            tem<strong>crase</strong>.com
          </a>
        </Link>
      </header>
      <main className={styles.main} style={{ justifyContent: justifyContent }}>
        <section className={styles.content}>{children}</section>
      </main>
      <footer className={styles.footer}>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link href="/tudo">
                <a>todos os termos</a>
              </Link>
            </li>
            <li>
              <Link href="/ajude">
                <a>ajude a melhorar</a>
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/gabrnunes/tem-crase"
                target="_blank"
                rel="noreferrer noopener"
              >
                código no github
              </a>
            </li>
            <li>
              <a
                href="https://nubank.com.br/pagar/5kho2/YC0361rW2e"
                target="_blank"
                rel="noreferrer noopener"
              >
                me pague um café
              </a>
            </li>
            <li>
              <Link href="/sobre">
                <a>sobre</a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
