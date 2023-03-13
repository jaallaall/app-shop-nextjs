import { Inter } from "next/font/google";
import { nextDynamic } from "components";
import { getLayout } from "components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  const Home = nextDynamic("Home");
  return <Home />;
};

export async function getServerSideProps({ locale }: { locale: string }) {
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery("socials", socials);
  return {
    props: {
      // dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale, ["common", "menu"])),
    },
  };
}

HomePage.getLayout = getLayout;

export default HomePage;
