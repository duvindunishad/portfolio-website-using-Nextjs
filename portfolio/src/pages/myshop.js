import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { FiShoppingCart, FiHeart, FiStar, FiArrowRight } from "react-icons/fi";
import TransitionEffect from "@/component/TransitionEffect";

const products = [
  {
    id: 1,
    name: "Premium Coding Templates",
    price: 49.99,
    description: "Professional React & Next.js templates for your projects",
    image: "/images/products/template-pack.jpg",
    rating: 4.8,
    category: "Templates",
    featured: true,
    discount: 20,
  },
  {
    id: 2,
    name: "JavaScript Mastery Course",
    price: 99.99,
    description: "Comprehensive ES6+ and advanced patterns course",
    image: "/images/products/js-course.jpg",
    rating: 4.9,
    category: "Courses",
    featured: false,
  },
  {
    id: 3,
    name: "UI Component Library",
    price: 29.99,
    description: "Reusable React components for rapid development",
    image: "/images/products/ui-library.jpg",
    rating: 4.7,
    category: "Libraries",
    featured: true,
    discount: 15,
  },
  {
    id: 4,
    name: "Next.js Optimization Guide",
    price: 39.99,
    description: "Performance optimization techniques for Next.js apps",
    image: "/images/products/nextjs-guide.jpg",
    rating: 4.6,
    category: "E-books",
    featured: false,
  },
  {
    id: 5,
    name: "React Animation Toolkit",
    price: 24.99,
    description: "Pre-built animations for React applications",
    image: "/images/products/animation-toolkit.jpg",
    rating: 4.5,
    category: "Libraries",
    featured: false,
  },
  {
    id: 6,
    name: "Full-Stack Project Blueprint",
    price: 79.99,
    description: "Complete architecture for full-stack applications",
    image: "/images/products/blueprint.jpg",
    rating: 4.8,
    category: "Templates",
    featured: true,
    discount: 25,
  },
];

const ProductCard = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

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
      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
          {product.discount}% OFF
        </div>
      )}

      {/* Featured Ribbon */}
      {product.featured && (
        <div className="absolute top-0 right-3 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-b-lg z-10 shadow-md">
          Featured
        </div>
      )}

      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Quick Actions Overlay */}
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
              ${product.price}
            </span>
          </div>
        </div>

        <motion.button
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => addToCart(product)}
        >
          Add to Cart <FiShoppingCart />
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
          content="Premium developer resources and tools"
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
              Accelerate your projects with our professionally crafted tools and
              learning materials
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
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
