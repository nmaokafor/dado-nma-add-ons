import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Add ons Page</title>
        <meta name="description" content="Get add ons on checkout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Placeholder</h1>
      </main>
    </div>
  );
}
