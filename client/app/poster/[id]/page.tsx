"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { posters } from "@/lib/data";
import { useCart } from "@/lib/CartContext";

export default function PosterDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const poster = posters.find((p) => p.id === params.id);

  const [selectedSize, setSelectedSize] = useState(
    poster?.sizes[0] || "A4"
  );
  const [selectedImage, setSelectedImage] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!poster) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Poster not found</h1>
          <Link href="/shop" className="text-blue-600 hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: poster.id,
      title: poster.title,
      price: poster.price,
      image: poster.image,
      size: selectedSize,
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const relatedPosters = posters
    .filter((p) => p.category === poster.category && p.id !== poster.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          Added to cart!
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-gray-900">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{poster.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={poster.images[selectedImage]}
                alt={poster.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            {poster.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {poster.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-[3/4] rounded-lg overflow-hidden ${
                      selectedImage === index
                        ? "ring-2 ring-black"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${poster.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="text-sm text-gray-500 uppercase tracking-wide">
                {poster.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {poster.title}
            </h1>
            <p className="text-3xl font-bold text-gray-900 mb-6">
              ${poster.price}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {poster.description}
            </p>

            {/* Size Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Select Size
              </label>
              <div className="flex flex-wrap gap-3">
                {poster.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-lg border-2 font-semibold transition ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 bg-white text-gray-900 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition mb-4"
            >
              Add to Cart
            </button>

            <button
              onClick={() => router.push("/cart")}
              className="w-full bg-white text-black py-4 rounded-lg font-semibold border-2 border-black hover:bg-gray-50 transition"
            >
              View Cart
            </button>

            {/* Product Details */}
            <div className="mt-8 border-t pt-8">
              <h3 className="font-semibold text-gray-900 mb-4">
                Product Details
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium quality print</li>
                <li>• Museum-grade paper</li>
                <li>• Fade-resistant inks</li>
                <li>• Frame not included</li>
                <li>• Ships within 2-3 business days</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Posters */}
        {relatedPosters.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPosters.map((relatedPoster) => (
                <Link
                  key={relatedPoster.id}
                  href={`/poster/${relatedPoster.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={relatedPoster.image}
                        alt={relatedPoster.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {relatedPoster.title}
                      </h3>
                      <p className="text-lg font-bold text-gray-900">
                        ${relatedPoster.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
