import React from "react";
import Image from "next/image";
import projectImage from "../../../../public/background/haugai.png"; // Thay bằng hình ảnh dự án của bạn
import den from "../../../../public/background/den.jpg"
import ImageSlider from "./imageSlider";
const page = () => {
  return (
    <div className="relative w-full min-h-screen bg-black">
        <Image
                    src={den}
                    alt="Next.js Portfolio website's about page background image"
                    className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-100"
                    priority
                    sizes="100vw"
                  />
      {/* Navigation */}
      

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8">
        {/* Image Section */}
        <div className="mb-8">
          <ImageSlider />
        </div>

        {/* Short description */}
        <p className="text-lg text-white italic text-center mb-6">
          Simple Reddit, no?
        </p>

        {/* The short run section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">The short run</h2>
          <div class="container mx-auto p-4">
  <p class="text-lg text-gray-300 leading-relaxed">
    I developed a simple e-commerce website that allows users to buy and sell products online. The website includes the following basic features:
  </p>

  <ul class="list-disc pl-6 mt-4 text-gray-200">
    <li class="mb-2">
      <strong class="text-white">Product Listing Page:</strong> Displays a list of products with images, prices, and detailed descriptions.
    </li>
    <li class="mb-2">
      <strong class="text-white">Shopping Cart:</strong> Allows users to add, modify, or remove products from the cart.
    </li>
    <li class="mb-2">
      <strong class="text-white">Checkout Process:</strong> Integrates a simple checkout flow for completing orders.
    </li>
    <li class="mb-2">
      <strong class="text-white">Product Management Page (for sellers):</strong> Enables sellers to add, edit, or delete products.
    </li>
  </ul>
</div>

          
        </section>

        {/* Additional details */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Tech Stack & Learnings</h2>
          <ul className="list-disc list-inside text-lg text-gray-300">
            <li>
              **Backend**: Worked with Node.js for building APIs.
            </li>
            <li>
              **Frontend**: React.js for dynamic UI, using component-based
              architecture.
            </li>
            <li>
              **Communication**: APIs for connecting backend and frontend.
            </li>
            
          </ul>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            The project taught me the importance of modularity, as each feature
            had its own structure (e.g., controllers, models, etc.).
          </p>
        </section>

        {/* Reflection Section */}
        
      </div>
    </div>
  );
};

export default page;
