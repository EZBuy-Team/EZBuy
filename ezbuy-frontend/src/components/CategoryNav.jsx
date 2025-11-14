import { useNavigate } from "react-router-dom";

const categories = ["Electronics", "Accessories", "Audio"];

const CategoryNav = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleCategoryClick(cat)}
          className="px-4 py-2 border border-gray-300 rounded-full hover:bg-blue-600 hover:text-white transition"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;