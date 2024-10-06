"use client";
// CarouselComponent.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  return (
    <section
      aria-label="Banner Slider"
      style={{ width: '100%', overflow: 'hidden', maxHeight: '550px' }}
      className="px-8 py-16 shadow-md"
    >
      <Slider
        dots={true}
        infinite={true}
        speed={500} // Set transition speed to 500ms for smooth transition
        slidesToShow={1}
        slidesToScroll={1}
        draggable={true}
        swipe={true}
        swipeToSlide={true}
        touchThreshold={10}
        autoplay={true}
        autoplaySpeed={4000} // Autoplay every 4 seconds
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {/* Slide 1 */}
        <article className="bg-red-600 h-full w-full">
          <figure>
            <img
              src="/export-management-companies.jpg"
              alt="Export Management Companies Overview"
              className="w-full h-full"
              style={{ objectFit: 'cover' }}
              loading="lazy" // Lazy loading for optimization
            />
            <figcaption className="sr-only">
              Overview of Export Management Companies
            </figcaption>
          </figure>
        </article>

        {/* Slide 2 */}
        <article className="bg-red-600 h-full w-full">
          <figure>
            <img
              src="/Banner.jpg"
              alt="Global Trade Banner"
              className="w-full h-full"
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
            <figcaption className="sr-only">
              Global Trade Services Banner Image
            </figcaption>
          </figure>
        </article>

        {/* Slide 3 */}
        <article className="bg-red-600 h-full w-full">
          <figure>
            <img
              src="/about.jpg"
              alt="About Our Company"
              className="w-full h-full"
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
            <figcaption className="sr-only">
              About Our Company - Company Introduction
            </figcaption>
          </figure>
        </article>
      </Slider>
    </section>
  );
};

export default BannerSlider;
