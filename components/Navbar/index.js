import Link from "next/link";
import Image from "next/image";
import SVGS from "../../public/svgs";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          {/* Logo */}

          <div>
            <Link href="/">
              <a href="#">
                <Image
                  src="/assets/images/toplogo.png"
                  layout="responsive"
                  objectFit="contain"
                  height={40}
                  width={192}
                  alt="Petlab co logo"
                />
              </a>
            </Link>
          </div>
        </div>
        {/* Menu */}
        <ul>
          <li>
            {SVGS.dashboard()}

            <a href="#">Dashboard</a>
          </li>
          <li>
            {SVGS.mypets()}

            <a href="#">My Pets</a>
          </li>
          <li>
            {SVGS.subscription()}
            <a href="#">My Subscriptions</a>
          </li>
          <li>
            {SVGS.orders()}

            <a href="#">Orders</a>
          </li>
          <li>
            {SVGS.account()}
            <a href="#">My Account</a>
          </li>
          <li>
            {SVGS.addons()}
            <a href="#">Extra Add-Ons</a>
          </li>
          <li>
            {SVGS.signout()}
            <a href="#">Signout</a>
          </li>
        </ul>
        {/* </div> */}
        {/* </div> */}

        {/* Hamburger */}
        <div>{SVGS.hamburger()}</div>
      </nav>
    </>
  );
};

export default Navbar;
