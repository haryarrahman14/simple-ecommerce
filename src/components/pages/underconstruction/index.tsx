import Image from "next/image";
import styles from "./underconstruction.module.scss";
import Layout from "@/components/layout/default-layout";

const Underconstruction: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Image
          src="/icon-construction.svg"
          width={54}
          height={54}
          alt="underconstruction"
        />
        <p className={styles.title}>This Page is Underconstruction!</p>
        <p className={styles.description}>
          Please see our social media for new updates. Thank you
        </p>
      </div>
    </Layout>
  );
};

export default Underconstruction;
