"use client";

import Link from "next/link";
import styles from "./layout.module.scss";
import Image from "next/image";

const NAVIGATION_ABOUT = [
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Meet The Team",
    href: "/team",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];

const NAVIGATION_SUPPORT = [
  {
    title: "Contact Us",
    href: "/contact-us",
  },
  {
    title: "Shipping",
    href: "/shipping",
  },
  {
    title: "Return",
    href: "/return",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
];

const NAVIGATION_SOCIAL_MEDIA = [
  {
    alt: "twitter",
    src: "/icon-twitter-light.svg",
    href: "/",
  },
  {
    alt: "facebook",
    src: "/icon-facebook-light.svg",
    href: "/",
  },
  {
    alt: "linkedin",
    src: "/icon-linkedin-light.svg",
    href: "/",
  },
  {
    alt: "instagram",
    src: "/icon-instagram-light.svg",
    href: "/",
  },
];

const Footer: React.FC = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.banner}>
        <div className={styles.banner_header}>
          <p className={styles.banner_title}>
            Ready to Get <br /> Our New Stuff?
          </p>

          <div className={styles.banner_email}>
            <form>
              <input />
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <div className={styles.banner_footer}>
          <p className={styles.title}>Shopper for what u Needs</p>
          <p className={styles.description}>
            We'll listen to your needs, identify the best approach, and then{" "}
            <br />
            create a bespoke smart EV charging solution that's right for you.
          </p>
        </div>
      </div>

      <div className={styles.navigator}>
        <div className={styles.navigator_left}>
          <div className={styles.navigator_about}>
            <p className={styles.title}>About</p>
            {NAVIGATION_ABOUT?.map((nav, idx) => (
              <Link key={idx} href={nav.href}>
                <p className={styles.item}>
                  {nav.title} <i className={styles.arrow}>{">"}</i>
                </p>
              </Link>
            ))}
          </div>

          <div className={styles.navigator_support}>
            <p className={styles.title}>Support</p>
            {NAVIGATION_SUPPORT?.map((nav, idx) => (
              <Link key={idx} href={nav.href}>
                <p className={styles.item}>
                  {nav.title} <i className={styles.arrow}> {">"}</i>
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.navigator_right}>
          <p className={styles.title}>Social Media</p>
          <div className={styles.item_container}>
            {NAVIGATION_SOCIAL_MEDIA?.map((item, idx) => (
              <div key={idx} className={styles.item}>
                <Image src={item.src} alt={item.alt} width={18} height={18} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2023 Shopper. All Rights Reserved</p>

        <div className={styles.term}>
          <p className={styles.term_item}>Terms of Service</p>
          <p className={styles.term_item}>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
