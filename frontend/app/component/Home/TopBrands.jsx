import React from "react";

function ShopFromTopBrands() {
  return (
    <section
      aria-label="Shop from Top Brands"
      className="lg:p-4 mt-8 flex justify-center bg-stone-100 h-72 md:h-96 items-center shadow-inner"
    >
      <div className="overflow-x-auto lg:w-9/12 w-11/12">
        {/* Section heading */}
        <h2 className="text-xl md:text-2xl font-semibold mb-6 ">
          Shop From Top Brands
        </h2>

        {/* Brand logos */}
        <div className="flex justify-between space-x-7">
          {Array.from({ length: 8 }).map((_, index) => (
            <article className="text-center" key={index}>
              <figure className="bg-gray-300 rounded-full w-20 md:w-28 h-20 md:h-28 overflow-hidden">
                <img
                  src={`/Banner.jpg`}
                  alt={`Brand  Logo`} // Descriptive alt text for SEO and accessibility
                  className="w-full h-full object-cover"
                  loading="lazy" // Lazy load images for performance
                />
              </figure>
              <figcaption className="mt-3">Brand {index + 1}</figcaption> {/* Customize brand name */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopFromTopBrands;
