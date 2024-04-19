"use client";

import Image from "next/image";
import styles from "./shop.module.scss";
import {
  useGetProducts,
  useGetProductsCategories,
} from "@/hooks/client/products";

const Shop: React.FC = () => {
  const { data: categories, isLoading: isLoadingCategories } =
    useGetProductsCategories();

  const { data: produtcs, isLoading: isLoadingProducts } = useGetProducts({});

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

      <div className={styles.content}>
        {!isLoadingCategories && (
          <div className={styles.category}>
            <p className={styles.title}>Categories</p>

            {categories && categories?.data?.length > 0 && (
              <div className={styles.list}>
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
        )}

        {!isLoadingProducts && (
          <div className={styles.product}>
            {produtcs &&
              produtcs?.data?.length > 0 &&
              produtcs?.data?.map((product, idx) => (
                <div key={idx} className={styles.card}>
                  <p className={styles.category}>{product?.category}</p>
                  <Image
                    src={product?.image || ""}
                    alt="test"
                    width={220}
                    height={220}
                  />

                  <div className={styles.content}>
                    <p className={styles.title}>{product?.title}</p>
                    <p className={styles.rate_price}>${product?.price}</p>
                  </div>

                  <div className={styles.cta}>
                    <div className={styles.button_add}>
                      <p>Add to Chart</p>
                    </div>
                    <div className={styles.button_buy}>
                      <p>Buy Now</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
