import ShopLayout from "@/components/layout/shop-layout";
export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ShopLayout>{children}</ShopLayout>;
}
