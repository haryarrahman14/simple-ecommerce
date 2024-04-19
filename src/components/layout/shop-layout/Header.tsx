"use client";

import Image from "next/image";
import styles from "./layout.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAVIGATION = [
  {
    title: "Beranda",
    href: "/home",
  },
  {
    title: "Shop",
    href: "/shop",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className={styles.hero_container}>
      <div className={styles.banner_container}>
        <Image
          src="/image-hero.png"
          alt="background"
          fill
          objectFit="cover"
          priority
        />

        <p className={styles.banner_title}>Shop</p>
      </div>

      <div className={styles.header_container}>
        <div className={styles.logo_container}>
          <Image src="/icon-shop.svg" width={24} height={24} alt="logo" />
          <p className={styles.title}>Shopper.</p>
        </div>

        <div className={styles.navigation}>
          {NAVIGATION?.map((nav, idx) => (
            <Link key={idx} href={nav.href}>
              <p className={nav.href === pathname ? styles.active : ""}>
                {nav.title}
              </p>
            </Link>
          ))}
        </div>

        <div className={styles.search}>
          <div className={styles.button}>
            <Image src="/icon-search.svg" width={18} height={18} alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
