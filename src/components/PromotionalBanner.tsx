
import React from 'react';

const PromotionalBanner = () => {
  return (
    <section className="mt-16 bg-gradient-to-r from-green-100 to-orange-100 dark:from-green-900/30 dark:to-orange-900/30 rounded-2xl p-8 text-center border border-green-200 dark:border-green-800 transition-colors duration-300">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        🎉 Special Offer: Free Delivery on Orders Above ₹500!
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Get your groceries delivered for free. Limited time offer!
      </p>
      <button className="gradient-primary px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg">
        Shop Now & Save
      </button>
    </section>
  );
};

export default PromotionalBanner;
