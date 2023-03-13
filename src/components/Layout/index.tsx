import Footer from "components/Footer";
import Header from "components/Header";
import CartDetails from "components/Header/CartDetails";
import { useMediaQuery } from "hooks";
import Helmet from "./Helmet";

export const Layout: React.FC<{
  children: React.ReactElement;
}> = ({ children }): React.ReactElement => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <Helmet>
      <Header />
      {children}
      <Footer />
      {!matches && (
        <footer className="sticky bottom-0 bg-white z-50 border-t">
          <div className="grid grid-cols-3">
            <CartDetails />
          </div>
        </footer>
      )}
    </Helmet>
  );
};

export function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
}
