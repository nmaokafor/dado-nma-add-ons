import ProductCard from "./ProductCard";
import styles from "./ProductList.module.scss";

const ProductList = (props) => {
  return (
    <>
      {props.products.map((prod, index) => (
        <div
          key={index}
          className={`${styles["card-wrapper"]} col-4 ${styles.tablet}`}
        >
          <ProductCard product={prod} index={index} />
        </div>
      ))}
    </>
  );
};

export default ProductList;
