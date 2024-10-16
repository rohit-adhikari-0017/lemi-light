import Header from "@/components/header/Header";
import Product from "@/components/product/Product";

const Home = () => {
  return (
    <>
      {/* Header Section */}
      <div className={`headerSection sticky top-0 bg-white`}>
        <Header></Header>
      </div>

      {/* Product Section */}
      <div className={`productSection`}>
        <Product></Product>
      </div>
    </>
  );
};

export default Home;
