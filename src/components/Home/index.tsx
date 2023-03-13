import ProductsCategorization from "./ProductsCategorization";
import PurchaseProcess from "./PurchaseProcess";
import ProductsCarousel from "./ProductsCarousel";

const Home: React.FC = (): React.ReactElement => {
  return (
    <>
      <section>
        <div className="container mx-auto px-2">
          <ProductsCarousel />
        </div>
      </section>
      <section>
        <div className="container mx-auto px-2">
          <ProductsCategorization />
        </div>
      </section>
      <section>
        <div className="container mx-auto px-2">
          <PurchaseProcess />
        </div>
      </section>
    </>
  );
};

export default Home;
