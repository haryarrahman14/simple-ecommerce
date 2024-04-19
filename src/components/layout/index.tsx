import Footer from "./footer";
import Header from "./header";

import styles from "./layout.module.scss";

export default function Layout({
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
