import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";

import styles from "./layout.module.scss";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
}
