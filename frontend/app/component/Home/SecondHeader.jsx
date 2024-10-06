import React from "react";

function SecondHeader() {
  return (
    <section
      className="lg:p-4 mt-8 flex justify-center shadow-md"
      style={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
        borderTop: "1px solid rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="flex justify-evenly w-full lg:w-5/6 overflow-x-auto space-x-7 py-7 md:py-2">
        {/* Repeatable section */}
        {Array.from({ length: 8 }).map((_, index) => (
          <article className="text-center" key={index}>
            <figure className="bg-red-500 rounded-full w-16 md:w-28 h-16 md:h-28 overflow-hidden">
              <img
                src={`/Banner.jpg`} // Different banners can be used
                alt={`Banner ${index + 1} - Description of the image`}
                className="w-full h-full object-cover"
              />
            </figure>
            <figcaption className="mt-3 text-sm md:text-base">
              {/* Customize the text content based on the actual context */}
              hey
            </figcaption>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SecondHeader;
