import React, { useEffect, useState } from "react";
import FoodData from "../../assets/foodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category)),];
    setCategories(uniqueCategories);
    // console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  console.log(selectedCategory);


  return (
    <div className="ml-6">
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-teal-500 hover:text-white ${selectedCategory === "All" && "bg-teal-500 text-white"}`}>
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-teal-500 hover:text-white ${selectedCategory === category && "bg-teal-500 text-white"} `}>
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
