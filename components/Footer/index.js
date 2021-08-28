import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div>
        <Image
          src={"/assets/images/footer-logo.png"}
          height={1}
          width={1}
          layout="responsive"
          objectFit="cover"
          alt="Petlab co logo"
        />
      </div>

      <hr></hr>
      <p>&copy; 2021 Petlab Co.</p>
    </footer>
  );
};

export default Footer;
