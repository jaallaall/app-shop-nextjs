import { nextDynamic } from "components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const LoginPage = () => {
  const Login = nextDynamic("Auth");
  return (
    <>
      <Head>
        <title>{"ورود"}</title>
      </Head>
      <Login />
    </>
  );
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

export default LoginPage;
