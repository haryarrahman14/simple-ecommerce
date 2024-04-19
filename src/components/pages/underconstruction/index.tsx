import Image from "next/image";
import styles from "./underconstruction.module.scss";

const Underconstruction: React.FC = () => {
  return (
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
  );
};

export default Underconstruction;
