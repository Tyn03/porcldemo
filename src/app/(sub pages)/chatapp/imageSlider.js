"use client"
import React, { useState } from "react";
import Image from "next/image";

const images = [
  "/background/halo.png",
  "/background/chat.png",
  "/background/setava.png"
]; // Thay thế bằng đường dẫn hình ảnh của bạn

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hàm xử lý khi nhấn "Next"
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Hàm xử lý khi nhấn "Prev"
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Slider Container */}
      <div className="relative w-full h-2/3 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          width={800}
          height={400}
          priority
        />
      </div>

      {/* Nút Prev */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition -z-50"
        style={{ zIndex: 10 }} // Đảm bảo nút nằm trên hình ảnh
      >
        ❮
      </button>

      {/* Nút Next */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition z-10"
        style={{ zIndex: 10 }} // Đảm bảo nút nằm trên hình ảnh
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
