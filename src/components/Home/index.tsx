import ProductsCarousel from "./ProductsCarousel";

const Home: React.FC = (): React.ReactElement => {
  return (
    <section>
      <div className="container mx-auto px-2">
        <ProductsCarousel />
      </div>
    </section>
  );
};

export default Home;
