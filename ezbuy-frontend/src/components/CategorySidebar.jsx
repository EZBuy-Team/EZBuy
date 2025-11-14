import { useNavigate } from "react-router-dom";

const CategorySidebar = ({ categories, selected, onSelect }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (cat) => {
    onSelect(cat);
    if (cat === "All") {
      navigate('/products');
    } else {
      navigate(`/products?category=${cat}`);
    }
  };

  return (
    <div className="backdrop-blur-md bg-white/80 border border-white/20 p-6 rounded-2xl shadow-lg">
      <h2 className="font-bold text-xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Categories
      </h2>
      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => handleCategoryClick(cat)}
              className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                selected === cat
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "bg-white/60 text-gray-700 hover:bg-white/80"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => handleCategoryClick("All")}
            className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
              selected === "All"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                : "bg-white/60 text-gray-700 hover:bg-white/80"
            }`}
          >
            All Products
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CategorySidebar;