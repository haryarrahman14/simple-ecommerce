import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";

import styles from "./layout.module.scss";
import { NEXT_AUTH_URL } from "@/const/env";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await axios.get(`${NEXT_AUTH_URL}/api/base64`, {
    params: {
      imgPath: "image-hero.png",
    },
  });

  return (
    <div className={styles.container}>
      <Header blurredImageHero={data?.data} />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
}
