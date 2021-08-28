import Link from "next/link";
import Image from "next/image";
import SVGS from "../../public/svgs";
import styles from "./Navbar.module.scss";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div>
          {/* Logo */}

          <div className={styles.logoParent}>
            <Link href="/">
              {/* <a href="#"> */}
              <Image
                src="/assets/images/toplogo.png"
                layout="responsive"
                objectFit="contain"
                className={styles.logo}
                height={40}
                width={192}
                alt="Petlab co logo"
              />
              {/* </a> */}
            </Link>
          </div>
        </div>
        {/* Menu */}
        <ul
          className={
            open ? `${styles.navmenu} ${styles.active}` : styles.navmenu
          }
        >
          <li className={styles.navitem} onClick={closeMobileMenu}>
            {SVGS.dashboard()}

            <a href="#">Dashboard</a>
          </li>
          <li className={styles.navitem} onClick={closeMobileMenu}>
            {SVGS.mypets()}

            <a href="#">My Pets</a>
          </li>
          <li className={styles.navitem} onClick={closeMobileMenu}>
            {SVGS.subscription()}
            <a href="#">My Subscriptions</a>
          </li>
          <li className={styles.navitem} onClick={closeMobileMenu}>
            {SVGS.orders()}

            <a href="#">Orders</a>
          </li>
          <li className={styles.navitem} onClick={closeMobileMenu}>
            {SVGS.account()}
            <a href="#">My Account</a>
          </li>
          <li className={styles.navitem} onClick={closeMobileMenu}>
            {SVGS.addons()}
            <a href="/">Extra Add-Ons</a>
          </li>
          <li className={styles.navitem} onClick={closeMobileMenu}>
            {SVGS.signout()}
            <a href="#">Signout</a>
          </li>
        </ul>
        {/* </div> */}
        {/* </div> */}

        {/* Hamburger */}
        <div onClick={() => setOpen(!open)} className={styles.hamburger}>
          {SVGS.hamburger()}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
