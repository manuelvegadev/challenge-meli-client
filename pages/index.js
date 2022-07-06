import Head from 'next/head';
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Mercado Libre Challenge</title>
            </Head>
            <h1 className={styles.title}>Home page</h1>
        </>
    );
}
