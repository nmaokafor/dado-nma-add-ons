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
          <div className={styles.logoParent}>
            <Link href="/">
              <a>
                <Image
                  src="/assets/images/toplogo.png"
                  layout="responsive"
                  objectFit="contain"
                  className={styles.logo}
                  height={40}
                  width={192}
                  alt="Petlab co logo"
                />
              </a>
            </Link>
          </div>
        </div>
        <ul
          className={
            open ? `${styles.navmenu} ${styles.active}` : styles.navmenu
          }
        >
          <li className={styles.navitem} onClick={closeMobileMenu}>
            {SVGS.dashboard()}

            <Link href="#">Dashboard</Link>
          </li>
          <li className={styles.navitem} onClick={closeMobileMenu}>
            {SVGS.mypets()}

            <Link href="#">My Pets</Link>
          </li>
          <li className={styles.navitem} onClick={closeMobileMenu}>
            {SVGS.subscription()}
            <Link href="#">My Subscriptions</Link>
          </li>
          <li className={styles.navitem} onClick={closeMobileMenu}>
            {SVGS.orders()}

            <Link href="#">Orders</Link>
          </li>
          <li className={styles.navitem} onClick={closeMobileMenu}>
            {SVGS.account()}
            <Link href="#">My Account</Link>
          </li>
          <li className={styles.navitem} onClick={closeMobileMenu}>
            {SVGS.addons()}
            <Link href="/">ExtrLink Add-Ons</Link>
          </li>
          <li className={styles.navitem} onClick={closeMobileMenu}>
            {SVGS.signout()}
            <Link href="#">Signout</Link>
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
