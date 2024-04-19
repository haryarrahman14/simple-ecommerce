"use client";

import Image from "next/image";
import styles from "./shop.module.scss";
import { useGetProductsCategories } from "@/hooks/client/products";

const Shop: React.FC = () => {
  const { data: categories, isLoading } = useGetProductsCategories();

  return (
    <div className={styles.shop_container}>
      <div className={styles.header}>
        <p className={styles.title}>Give All You Need</p>

        <div className={styles.search}>
          <form>
            <Image
              className={styles.icon_search}
              src="/icon-search.svg"
              width={18}
              height={18}
              alt="icon-search"
            />
            <input placeholder="Search on Shopper." />
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {!isLoading && (
        <div className={styles.content}>
          <div className={styles.category}>
            <p className={styles.title}>Category</p>

            <div className={styles.list}>
              <p className={styles.title}>All Product</p>

              {categories && categories?.data?.length > 0 && (
                <div className={styles.sub_list}>
                  {categories?.data?.map((item, idx) => (
                    <div key={idx} className={styles.item}>
                      <div
                        className={
                          categories?.data?.length === idx + 1
                            ? styles.lineY_last
                            : styles.lineY
                        }
                      />

                      <div className={styles.containerX}>
                        <div className={styles.lineX} />

                        <div className={styles.box}>
                          <p>{item}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
