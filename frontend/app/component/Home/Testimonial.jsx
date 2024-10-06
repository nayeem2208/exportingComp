import React from "react";

function Testimonial() {
  const testimonials = [
    {
      text: "Roms N Raks has become my go-to pet store, and for good reason. Their range of products is unmatched, and I always find high-quality items for my furry friend. What impresses me the most is the level of care and attention provided by the customer support team.",
      name: 'Appu Nair',
      rating: 4, // Example rating
    },
    {
      text: "Discovering Roms N Raks was a game-changer for me and my furry companion. Their store is a treasure trove of top-notch pet supplies, and I always find exactly what I need. The customer support team is fantastic - knowledgeable, friendly, and always willing to go the extra mile to assist. Shopping here is not just a transaction; it's an experience filled with care and attention. Highly recommended to all pet owners out there!",
      name: 'Nadir Shah',
      rating: 5, // Example rating
    },
    {
      text: "Roms N Raks is where I turn to for all my pet's needs, and they never disappoint. Their selection is extensive, with everything from essentials to luxury items available. What truly sets them apart is their exceptional customer service. The team is incredibly helpful and passionate about pets, making every visit a delight. It's rare to find such dedication and care in today's world. Roms N Raks has earned my trust and loyalty.",
      name: 'Anil Chandrasekhar',
      rating: 5, // Example rating
    },
  ];

  return (
    <div
      className="p-4 mt-8 flex justify-center items-center testimonial"
      style={{ height: "auto", minHeight: "50vh" }}
      aria-labelledby="testimonial-title"
    >
      <div className="w-11/12 md:w-full">
        <h2 id="testimonial-title" className="sr-only">Customer Testimonials</h2>
        <p className="text-xl md:text-3xl font-semibold my-12 text-center">
          Our customers love us!
        </p>
        <div className="flex flex-col md:flex-wrap md:flex-row justify-center ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-none flex flex-col md:m-6  border border-gray-200 p-8 mb-4 md:mb-0 text-center  text-stone-400 md:max-w-[450px]"
              style={{ width: "100%" }} // Responsive width
            >
              <div className="flex-grow mb-2">
                <p className="text-base font-medium">{testimonial.text}</p>
              </div>
              <p className="text-center font-semibold text-black text-lg">{testimonial.name}</p>
              {/* Star Rating */}
              <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`text-yellow-500 text-lg ${starIndex < testimonial.rating ? "★" : "☆"}`}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
