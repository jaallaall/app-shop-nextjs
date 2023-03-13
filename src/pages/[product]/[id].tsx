import { nextDynamic } from "components";
import { getLayout } from "components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dehydrate, DehydratedState, QueryClient } from "react-query";

const productPagePage = () => {
  const ProductPage = nextDynamic("Products");
  return <ProductPage />;
};

// export async function getServerSideProps({
//   locale,
//   query,
// }: {
//   locale: string;
//   query: { id: number };
// }): Promise<{
//   props: {
//     dehydratedState: DehydratedState;
//   };
// }> {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(ApiKey.HomeData, () => productId(query.id));
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       ...(await serverSideTranslations(locale, ["common", "menu"])),
//     },
//   };
// }

productPagePage.getLayout = getLayout;

export default productPagePage;
