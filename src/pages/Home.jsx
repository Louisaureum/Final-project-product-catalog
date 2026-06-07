import ProductList from "../components/ProductList";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">
            ⚡ Voltify Electronics
          </span>

          <h1>
            Discover Premium
            <br />
            Tech Products
          </h1>

          <p>
            Explore smartphones, power banks and headphones
            designed for modern lifestyles.
          </p>

          <button className="hero-btn">
            Shop Collection
          </button>
        </div>
      </section>

      <section className="products-section">
        <h2>Featured Electronics</h2>
        <ProductList />
      </section>
    </>
  );
}

export default Home;