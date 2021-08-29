import { useState } from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import { ProductFilter } from "../components/ProductFilter";
import ProductList from "../components/Products/ProductList";
import styles from "../styles/Home.module.scss";

export default function Home({ products }) {
  const categories = [
    "Probiotics",
    "Mobility",
    "Skin & Coat",
    "Health & Wellness",
    "Dental",
    "Food",
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [checkedValues, setCheckedValues] = useState([]);

  const handleFilter = (category) => {
    let filteredProducts = [];
    // If nothing is selected
    if (category && !category.length) {
      setFilteredProducts(products);
    } else {
      // filter using product list and selected values
      products.filter((product) => {
        category.some((item) => {
          if (product.category === item) {
            filteredProducts.push(product);
          }
        });
        return product.category === category;
      });
      setFilteredProducts(filteredProducts);
    }
  };

  const updateCheckedValues = (vals) => {
    handleFilter(vals);
    setCheckedValues(vals);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Add ons Page</title>
        <meta name="description" content="Get add ons on checkout" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/assets/fonts/Utopia/UtopiaStd-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/NeuzeitGro/NeuzeitGro-Reg.otf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Hero />

      <div className={styles.mainwrapper}>
        <ProductFilter
          checkedValues={checkedValues}
          categories={categories}
          setCheckedValues={updateCheckedValues}
        />
        <div className={`${styles["row-two"]} main col-12`}>
          <ProductList products={filteredProducts} />
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
