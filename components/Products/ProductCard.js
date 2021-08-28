import Image from "next/image";
import styles from "./ProductCard.module.scss";
import SVGS from "../../public/svgs";
import { Button } from "../Shared/Button";

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    category,
    currentPrice,
    previousPrice,
    discount,
    url,
    description,
    image,
    benefits,
  } = product;

  return (
    <div className={styles.card}>
      <div className={styles["card-top"]}>
        <p className={`${styles["category-tag"]} ${styles[id]}`}>{category}</p>
        <div className={`${styles["card-image"]}`}>
          <Image
            src={`${image}`}
            className={styles.logo}
            height={171.41}
            width={171.41}
            layout="responsive"
            objectFit="contain"
            alt="Probiotics product image"
          ></Image>
        </div>
      </div>

      <div className={styles["card-bottom"]}>
        <h5 className={styles["card-title"]}>{name}</h5>
        <p className={styles.description}>{description}</p>

        {benefits.map((benefit, index) => {
          return (
            <span key={index} className={styles.benefit}>
              {SVGS.benefitIcon()}
              <span key={`benefit-${index}`}>{benefit}</span>
            </span>
          );
        })}

        <span className={styles["price-list"]}>
          <p className={styles.price}>{`${currentPrice}`}</p>{" "}
          <p className={styles.price}>{previousPrice}</p>{" "}
          <p className={styles.price}>{discount}</p>
        </span>

        <Button handleClick={() => console.log(`Product name: ${name}`)}>
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
