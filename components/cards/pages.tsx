import React from "react";

const Cards = () => {
  return (
    <div className="bg-white py-20 mt-[400px]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-[#49423D] font-bold text-3xl sm:text-4xl mb-12">
          Типы строений
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <img src="/card1.png" alt="Image" className="w-full h-auto object-cover rounded-md" />
          <img src="/card2.png" alt="Image" className="w-full h-auto object-cover rounded-md" />
          <img src="/card3.png" alt="Image" className="w-full h-auto object-cover rounded-md" />
          <img src="/card4.png" alt="Image" className="w-full h-auto object-cover rounded-md" />
          <img src="/card5.png" alt="Image" className="w-full h-auto object-cover rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
