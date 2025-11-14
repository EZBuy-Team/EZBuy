import { useState, useEffect } from "react";
import HeroBanner from "../components/HeroBanner";
import CategoryNav from "../components/CategoryNav";
import ProductCard from "../components/ProductCard";
import { getTrendingProducts, getBestSellers } from "../services/productService";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [trendingData, bestSellersData] = await Promise.all([
          getTrendingProducts(),
          getBestSellers(),
        ]);
        setTrending(trendingData);
        setBestSellers(bestSellersData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-4 h-4 bg-pink-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
        <p className="mt-4 text-gray-600">Loading amazing deals...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroBanner />
      <CategoryNav />

      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Trending Products
            </h2>
            <p className="text-gray-600 mt-2">Hot items students are buying right now</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Best Sellers
            </h2>
            <p className="text-gray-600 mt-2">Top-rated products with verified reviews</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;