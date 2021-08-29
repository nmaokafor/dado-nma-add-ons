import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <Image
          src={"/assets/images/footer-logo.png"}
          height={1}
          width={1}
          layout="responsive"
          objectFit="contain"
          alt="Petlab co logo"
        />
      </div>

      <hr></hr>
      <p>&copy; 2021 Petlab Co.</p>
    </footer>
  );
};

export default Footer;
