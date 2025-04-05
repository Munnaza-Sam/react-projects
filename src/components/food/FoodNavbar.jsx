import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../store/slices/SearchSlice";
import CategoryMenu from "./CategoryMenu";

const FoodNavbar = () => {

     const dispatch = useDispatch();
    return (
        <>
            <div className="flex justify-around pt-4 items-center" >
                <div className="flex gap-2">
                    <CategoryMenu />
                </div>
                <div>
                    <input
                        type="search"
                        name="search"
                        placeholder="Search here"
                        autoComplete="off"
                        onChange={(e) => dispatch(setSearch(e.target.value))}
                        className="p-3 border border-teal-500 text-sm rounded-lg focus:outline-teal-500 w-full lg:w-[25vw]"
                    />
                </div>
            </div>
        </>
    )
}

export default FoodNavbar