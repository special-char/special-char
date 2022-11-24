import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/styles/footer.css";

type Props = {};

const links = [
  { page: "Home" },
  { page: "About" },
  { page: "Style Guide" },
  { page: "Lisensing" },
  { page: "Instuction" },
];
const Footer = (props: Props) => {
  return (
    <section id="footer" className="footer">
      <div className="footer__p1">
        <button>Stay in touch</button>
        <h1 className="">Ready to Talk</h1>
        <p className="">Feel free to Contact us</p>
        <div>Veiw on Designer</div>
      </div>
      <div className="footer__line"></div>
      <div className="footer__p2">
        <div>
          <h3 className="mb-3">TSC</h3>
          <p>
            TSC is an award UI/UX designs and branding agency based in New York,
            USA.
          </p>
          <div className="footer__links">
            {links.map((val) => (
              <Link href={"#"}>{val.page}</Link>
            ))}
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__socialicons">
            <a>O</a>
            <a>O</a>
            <a>O</a>
            <a>O</a>
            <a>O</a>
          </div>
          <Link href="#">hello@TSC.com</Link>
          <Link href="#">+91 3285445152</Link>
        </div>
      </div>
      <p className="footer__copyright">
        Copyright © TSC | Designed by TSC - Powered by TSC
      </p>
    </section>
  );
};

export default Footer;
