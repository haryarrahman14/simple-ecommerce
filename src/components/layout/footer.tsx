"use client";

import styles from "./layout.module.scss";

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
    </div>
  );
};

export default Footer;
