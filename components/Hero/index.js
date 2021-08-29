import utilStyles from "../../styles/Home.module.scss";
import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <header className={`${utilStyles.container} ${styles.header}`}>
      <div className={`${styles.row} ${styles["header-row"]} col-12`}>
        <div className={`col-4`}>
          <div className={styles["column-one"]}>
            <Image
              src="/assets/images/Foryou-dog.png"
              className={styles.logo}
              height={5}
              width={4}
              layout="responsive"
              objectFit="contain"
              alt="Petlab co logo"
            />
          </div>
        </div>
        <div className={`col-8 ${styles["vertical-align"]}`}>
          <div className={`${styles["column-two"]} col-12`}>
            <h3 className={`${styles["header-text"]}`}>
              Welcome to Extra Add-Ons!
            </h3>

            <p>
              Here you will find great deals to boost your pet’s health.{" "}
              <br className={styles.break}></br>Same products at a very
              attractive price exclusively to subscribers!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
