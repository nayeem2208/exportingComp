import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5";

function Footer() {
  return (
    <footer
      className="p-4 pt-14 mt-14 flex justify-center items-center"
      style={{
        borderTop: "1px solid rgba(0, 0, 0, 0.2)",
      }}
      aria-labelledby="footer-title"
    >
      <div className="w-11/12 md:w-9/12">
        <h2 id="footer-title" className="sr-only">Footer</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-4/12 font-semibold text-sm mb-8 md:mb-0">
            <img
              src="/c7a79da3-26ee-412c-914e-500bda6087f1.webp"
              alt="Logo of ROMS N RAKS"
              className="mb-4"
            />
            <p>
              Since our establishment in 2018, ROMS N RAKS has swiftly risen
              as India's leading hub for pet parents. With a wide array of pet
              food, treats, toys, grooming essentials, and top-notch grooming
              services, we fulfill all your pet's requirements with unparalleled
              quality and attention. With a presence in 12 physical retail
              outlets spanning Kerala and Karnataka, we're continually expanding
              our reach to serve you better.
            </p>
          </div>
          <div className="w-full md:w-3/12 mb-8 md:mb-0">
            <h3 className="font-semibold text-2xl">LINKS</h3>
            <ul className="mt-4 font-semibold">
              <li className="my-4">Shop For Dogs</li>
              <li className="my-4">Shop For Cats</li>
              <li className="my-4">Shop For Other Pets</li>
            </ul>
          </div>
          <div className="w-full md:w-3/12">
            <h3 className="font-semibold text-2xl">Contact Us</h3>
            <ul className="mt-4">
              <li className="text-lg">Call Us at +917736907773</li>
              <li className="text-lg">hello@romsnraks.com</li>
            </ul>
            <div className="flex mt-4 space-x-4">
              <a href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <RiInstagramFill className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com" aria-label="YouTube">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://www.apple.com/app-store/" aria-label="Apple Store">
                <IoLogoApple className="w-6 h-6" />
              </a>
              <a href="https://play.google.com/store" aria-label="Google Play Store">
                <IoLogoGooglePlaystore className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center my-16">© 2024 Matcel Trading Private Limited</p>
      </div>
    </footer>
  );
}

export default Footer;
