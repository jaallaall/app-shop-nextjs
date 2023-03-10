import createCache from "@emotion/cache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import type { NextPage } from "next";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode, useEffect, useMemo, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import "../styles/globals.css";

const clientSideEmotionCache = cacheRtl();

// Create rtl cache
export function cacheRtl(rtl?: boolean) {
  return createCache({
    key: rtl ? "rtl" : "ltr",
    prepend: true,
    stylisPlugins: rtl ? [prefixer, rtlPlugin] : [prefixer],
  });
}

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout;
};

function MyApp(props: AppPropsWithLayout) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    router,
    pageProps,
  } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    document.dir = router.locale === "fa" ? "rtl" : "ltr";
  }, [router.locale]);

  const memoizedEmotionCache = useMemo(() => {
    if (router.locale === "fa") {
      return cacheRtl(true);
    }
    if (router.locale === "en") {
      return cacheRtl(false);
    }
    return emotionCache;
  }, [router, emotionCache]);

  return (
    <CacheProvider value={memoizedEmotionCache}>
      <Provider store={store}>
        <PersistGate loading={<h4>isLoading...</h4>} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Head>
                <title>شیر آلات</title>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
              </Head>
              {getLayout(<Component {...pageProps} />)}
            </Hydrate>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);
