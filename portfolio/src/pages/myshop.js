import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { FiShoppingCart, FiHeart, FiStar, FiArrowRight } from "react-icons/fi";
import TransitionEffect from "@/component/TransitionEffect";
import img1 from "../images/products/125453_5.jpg@1200w_0e.jpg";

const ProductCard = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imgSrc, setImgSrc] = useState(product.image);

  const handleBuyNow = () => {
    window.location.href = `https://buymeacoffee.com/digitalcodehub/e/${product.id}`;
  };

  return (
    <motion.div
      className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300"
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {product.discount && (
        <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
          {product.discount}% OFF
        </div>
      )}

      {product.featured && (
        <div className="absolute top-0 right-3 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-b-lg z-10 shadow-md">
          Featured
        </div>
      )}

      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={imgSrc}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={typeof imgSrc === "string" && imgSrc.endsWith(".gif")}
          onError={() =>
            setImgSrc(product.fallbackImage || "/placeholder-product.png")
          }
        />

        <motion.div
          className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <motion.button
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
          >
            <FiHeart
              className={`w-5 h-5 ${
                isLiked ? "text-red-500 fill-red-500" : "text-gray-600"
              }`}
            />
          </motion.button>

          <motion.button
            className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium shadow-lg flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(product)}
          >
            <FiShoppingCart className="w-5 h-5" />
            Quick Add
          </motion.button>
        </motion.div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-1">
            {product.name}
          </h3>
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full whitespace-nowrap">
            {product.category}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            <FiStar className="text-yellow-500 mr-1" />
            <span className="font-medium text-sm">{product.rating}</span>
            <span className="text-gray-500 dark:text-gray-400 text-xs ml-1">
              /5.0
            </span>
          </div>
          <div className="flex items-end">
            {product.discount && (
              <span className="text-gray-400 dark:text-gray-500 line-through text-sm mr-2">
                ${(product.price * (1 + product.discount / 100)).toFixed(2)}
              </span>
            )}
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>

        <motion.button
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleBuyNow}
        >
          Buy Now <FiShoppingCart />
        </motion.button>
      </div>
    </motion.div>
  );
};

const MyShop = () => {
  const [cart, setCart] = useState([]);
  const [showCartNotification, setShowCartNotification] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  return (
    <>
      <Head>
        <title>Duvindu | Shop</title>
        <meta
          name="description"
          content="Premium developer resources and templates"
        />
      </Head>
      <main className="w-full -mb-14 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <TransitionEffect />
        <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-6xl sm:text-3xl font-bold mb-4 bg-gradient-to-r dark:text-white text-black bg-clip-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Premium Developer Resources
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "10rem" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <motion.p
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Accelerate your projects with our professionally crafted templates
              and resources
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {/* Tattoo Booking Website */}
            <ProductCard
              product={{
                id: 404760,
                name: "Tattoo Booking Website (HTML, CSS, JS, PHP)",
                price: 5.0,
                description:
                  "Complete guide to building a tattoo booking website with full functionality",
                image: img1,
                fallbackImage: "/images/products/125453_5.jpg@1200w_0e.jpg",
                rating: 4.7,
                category: "Website Template",
                featured: true,
              }}
              addToCart={addToCart}
            />

            {/* Color Changeable Portfolio Page */}
            <ProductCard
              product={{
                id: 402120,
                name: "Color Changeable Portfolio Page",
                price: 3.0,
                description:
                  "Dynamic portfolio page with customizable color schemes using HTML, CSS, JS",
                image: img1,
                fallbackImage: "/images/products/125453_5.jpg@1200w_0e.jpg",
                rating: 4.5,
                category: "Portfolio",
                featured: false,
              }}
              addToCart={addToCart}
            />

            {/* Login & Registration Page */}
            <ProductCard
              product={{
                id: 402091,
                name: "Login & Registration Page",
                price: 2.0,
                description:
                  "Complete login and registration system with validation",
                image: img1,
                rating: 4.6,
                category: "Auth System",
                featured: true,
              }}
              addToCart={addToCart}
            />

            {/* Christmas-Themed Login Page */}
            <ProductCard
              product={{
                id: 401755,
                name: "Christmas-Themed Login Page",
                price: 2.0,
                description:
                  "Festive UI design with animations for holiday season",
                image: img1,
                rating: 4.8,
                category: "Seasonal",
                featured: false,
              }}
              addToCart={addToCart}
            />

            {/* Valentine's Day Login Form */}
            <ProductCard
              product={{
                id: 401020,
                name: "Valentine's Day Login Form",
                price: 2.0,
                description:
                  "Animated hearts and romantic theme for Valentine's Day",
                image: img1,
                rating: 4.4,
                category: "Seasonal",
                featured: false,
              }}
              addToCart={addToCart}
            />

            {/* Transformers Login Page */}
            <ProductCard
              product={{
                id: 400682,
                name: "Transformers Login Page",
                price: 2.0,
                description:
                  "Autobot vs Decepticon animated form with cool effects",
                image: img1,
                rating: 4.9,
                category: "Themed",
                featured: true,
              }}
              addToCart={addToCart}
            />

            {/* Ben10 Omnitrix Login Form */}
            <ProductCard
              product={{
                id: 400232,
                name: "Ben10 Omnitrix Login Form",
                price: 2.0,
                description: "Alien inspired web design with Omnitrix effects",
                image: img1,
                rating: 4.7,
                category: "Themed",
                featured: false,
              }}
              addToCart={addToCart}
            />

            {/* Ocean Wave Login Form */}
            <ProductCard
              product={{
                id: 8,
                name: "Ocean Wave Login Form",
                price: 2.0,
                description: "Animated beach theme with wave effects",
                image: img1,
                rating: 4.5,
                category: "Themed",
                featured: false,
              }}
              addToCart={addToCart}
            />

            {/* 3D Card Hover Effect */}
            <ProductCard
              product={{
                id: 9,
                name: "3D Card Hover Effect",
                price: 1.0,
                description:
                  "Modern UI design tutorial with impressive 3D hover effects",
                image: img1,
                rating: 4.6,
                category: "UI Effect",
                featured: false,
              }}
              addToCart={addToCart}
            />

            {/* Cyberpunk Neon Login Form */}
            <ProductCard
              product={{
                id: 10,
                name: "Cyberpunk Neon Login Form",
                price: 2.0,
                description:
                  "Glowing effects & animations with cyberpunk aesthetic",
                image: img1,
                rating: 4.8,
                category: "Themed",
                featured: true,
              }}
              addToCart={addToCart}
            />

            {/* NEON GLOW Login Page */}
            <ProductCard
              product={{
                id: 11,
                name: "NEON GLOW Login Page",
                price: 1.0,
                description: "3D Effects with modern UI design and animations",
                image: img1,
                rating: 4.7,
                category: "Themed",
                featured: false,
              }}
              addToCart={addToCart}
            />

            {/* 350 WordPress Template Pack */}
            <ProductCard
              product={{
                id: 12,
                name: "350 WordPress Template Pack",
                price: 5.0,
                description:
                  "Massive collection of WordPress templates for various niches",
                image: img1,
                rating: 4.9,
                category: "Template Pack",
                featured: true,
              }}
              addToCart={addToCart}
            />

            {/* Professional POS System */}
            <ProductCard
              product={{
                id: 13,
                name: "Professional POS System",
                price: 5.0,
                description:
                  "Ready-to-use PHP, MySQL, Bootstrap system for education or business",
                image: img1,
                rating: 4.8,
                category: "Web Application",
                featured: true,
              }}
              addToCart={addToCart}
            />

            {/* Modern Portfolio Website */}
            <ProductCard
              product={{
                id: 14,
                name: "Modern Portfolio Website",
                price: 3.0,
                description:
                  "Clean, responsive portfolio using HTML, CSS, JavaScript",
                image: img1,
                rating: 4.6,
                category: "Portfolio",
                featured: false,
              }}
              addToCart={addToCart}
            />

            {/* 30+ Web Templates Pack */}
            <ProductCard
              product={{
                id: 15,
                name: "30+ Web Templates Pack",
                price: 2.0,
                description:
                  "Creative projects for beginners to advanced developers",
                image: img1,
                rating: 4.7,
                category: "Template Pack",
                featured: false,
              }}
              addToCart={addToCart}
            />

            {/* Login & Registration Website */}
            <ProductCard
              product={{
                id: 16,
                name: "Login & Registration Website",
                price: 3.0,
                description: "Complete auth system with PHP backend",
                image: img1,
                rating: 4.5,
                category: "Auth System",
                featured: false,
              }}
              addToCart={addToCart}
            />

            {/* Card Transition Effect */}
            <ProductCard
              product={{
                id: 17,
                name: "Card Transition Effect",
                price: 1.0,
                description: "Smooth card transitions using only HTML and CSS",
                image: img1,
                rating: 4.4,
                category: "UI Effect",
                featured: false,
              }}
              addToCart={addToCart}
            />

            {/* Responsive Login/Register Form */}
            <ProductCard
              product={{
                id: 18,
                name: "Responsive Login/Register Form",
                price: 3.0,
                description: "2023 modern design with JavaScript validation",
                image: img1,
                rating: 4.6,
                category: "Auth System",
                featured: true,
              }}
              addToCart={addToCart}
            />

            {/* Modern Auth Website */}
            <ProductCard
              product={{
                id: 19,
                name: "Modern Auth Website",
                price: 3.0,
                description:
                  "Complete login/registration with HTML, CSS, JS, PHP",
                image: img1,
                rating: 4.7,
                category: "Auth System",
                featured: false,
              }}
              addToCart={addToCart}
            />

            {/* React Login & Registration */}
            <ProductCard
              product={{
                id: 20,
                name: "React Login & Registration",
                price: 5.0,
                description: "Complete auth pages built with React",
                image: img1,
                rating: 4.8,
                category: "React",
                featured: true,
              }}
              addToCart={addToCart}
            />

            {/* HTML CSS Text Animation */}
            <ProductCard
              product={{
                id: 21,
                name: "HTML CSS Text Animation",
                price: 1.0,
                description:
                  "Create stunning text effects with step-by-step guide",
                image: img1,
                rating: 4.3,
                category: "UI Effect",
                featured: false,
              }}
              addToCart={addToCart}
            />

            {/* eBay Description Template */}
            <ProductCard
              product={{
                id: 22,
                name: "eBay Description Template",
                price: 2.0,
                description: "Professional template for eBay product listings",
                image: img1,
                rating: 4.2,
                category: "Template",
                featured: false,
              }}
              addToCart={addToCart}
            />

            {/* Analog Clock Tutorial */}
            <ProductCard
              product={{
                id: 23,
                name: "Analog Clock Tutorial",
                price: 2.0,
                description:
                  "Learn to create a functional analog clock with JS",
                image: img1,
                rating: 4.5,
                category: "Tutorial",
                featured: false,
              }}
              addToCart={addToCart}
            />

            {/* Modern Contact Us Page */}
            <ProductCard
              product={{
                id: 24,
                name: "Modern Contact Us Page",
                price: 2.0,
                description: "Responsive contact page with form validation",
                image: img1,
                rating: 4.6,
                category: "UI Component",
                featured: false,
              }}
              addToCart={addToCart}
            />
          </motion.div>

          {showCartNotification && (
            <motion.div
              className="fixed bottom-6 right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                  <FiShoppingCart className="w-5 h-5 text-green-600 dark:text-green-300" />
                </div>
                <div>
                  <p className="font-medium">Added to cart!</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {cart.length} {cart.length === 1 ? "item" : "items"} in cart
                  </p>
                </div>
                <button
                  className="ml-4 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg flex items-center gap-1 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  onClick={() => setShowCartNotification(false)}
                >
                  View <FiArrowRight />
                </button>
              </div>
            </motion.div>
          )}
        </section>
      </main>
    </>
  );
};

export default MyShop;
