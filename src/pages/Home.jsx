fimport ProductCard from "../components/ProductCard.jsx";

const products = [
  {
    id: 1,
    name: "Aura Watch",
    price: 120,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Smart fitness tracking watch",
  },
  {
    id: 2,
    name: "Nebula Headphones",
    price: 99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "Noise cancelling audio experience",
  },
  {
    id: 3,
    name: "Glass Lamp",
    price: 45,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    description: "Modern ambient lighting",
  },
  {
    id: 4,
    name: "Crystal Keyboard",
    price: 150,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description: "Futuristic typing experience",
  },
];

function Home() {
  return (
    <div className="page">
      <div className="container">
        <h1>ClickHaus ✨</h1>

        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;