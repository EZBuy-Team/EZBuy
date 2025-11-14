import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative backdrop-blur-md bg-white/80 border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <Link to={`/products/${product.id}`} className="block relative">
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
          <img
            src={product.image_url || 'https://via.placeholder.com/400'}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <div className="absolute top-3 right-3 backdrop-blur-md bg-white/90 px-3 py-1.5 rounded-full shadow-lg">
          <span className="text-xs font-bold text-green-600">Save 30%</span>
        </div>
      </Link>

      <div className="p-5 relative">
        <p className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">
          {product.category_name || product.category}
        </p>
        
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem]">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-black text-gray-900">
            ${parseFloat(product.student_price).toFixed(2)}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${parseFloat(product.price).toFixed(2)}
          </span>
        </div>

        <div className="flex gap-2">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 text-center backdrop-blur-sm bg-gray-900/5 hover:bg-gray-900/10 text-gray-900 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200"
          >
            View
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;