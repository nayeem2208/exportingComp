import React from "react";
import { CiSearch } from "react-icons/ci";

function HeaderComponent() {
  return (
    <header className="flex flex-col md:flex-row justify-center items-center h-auto pt-5 space-y-4 md:space-y-0 md:justify-evenly">
      <div className="h-full">
        <img
          src="/c7a79da3-26ee-412c-914e-500bda6087f1.webp"
          alt="Company logo: Your Brand Name" // Make sure to replace with the company name for better SEO
          className="max-w-full h-auto"
        />
      </div>
      <div className="w-4/5 md:w-2/6 searchBox items-center">
        <form className="flex mt-2" role="search" aria-label="Search products">
          <label htmlFor="search-input" className="sr-only">
            Search for products, brands, and more
          </label>
          <input
            type="text"
            id="search-input"
            placeholder="Search for products, brands, and more"
            className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
            aria-label="Search input"
          />
          <button
            type="submit"
            className="p-2 bg-amber-400 text-white rounded-r-md hover:bg-blue-600"
            aria-label="Submit search"
          >
            <CiSearch className="w-6 h-6" />
          </button>
        </form>
      </div>
      <div className="md:w-2/6 "><ul className="flex justify-evenly font-semibold">
        <li>Home</li>
        <li>Products</li>
        <li>Testimonials</li>
        <li>Contact us</li>
        </ul></div>
    </header>
  );
}

export default HeaderComponent;
