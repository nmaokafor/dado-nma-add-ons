import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import ProductList from "../components/Products/ProductList";
import styles from "../styles/Home.module.scss";

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Add ons Page</title>
        <meta name="description" content="Get add ons on checkout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <div className={styles.mainwrapper}>
        <div className={`${styles["row-two"]} main col-12`}>
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let baseUrl = process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/api/products`);
  const products = await res.json();

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products },
  };
}
