import React from "react";
import StoreCard from "./StoreCard";

export default function Store() {
  const cardsData = [
    {
      imageSrc: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg",
      title: "30 days Netflix Subscription",
      coins: 30,
    },
    {
      imageSrc: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg",
      title: "Amazon Gift Cards",
      coins: 30,
    },
    {
      imageSrc: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg",
      title: "30% Discount on Bistro Spezia",
      coins: 30,
    },
    {
      imageSrc: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg",
      title: "Fitness Club Membership Discounts",
      coins: 30,
    },
    {
      imageSrc: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg",
      title: "30 days Netflix Subscription",
      coins: 30,
    },
    {
      imageSrc: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg",
      title: "Discounts on Sustainable Fashion Brands",
      coins: 30,
    },
    {
      imageSrc: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg",
      title: "$5 Off Coupon for Organic Coffee Beans",
      coins: 30,
    },
    {
      imageSrc: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg",
      title: "$15 Off Coupon for Zero-Waste Kitchen Essentials",
      coins: 30,
    },
    {
      imageSrc: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg",
      title: "$10 Off Coupon for Ethical Jewelry",
      coins: 30,
    },
    {
      imageSrc: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg",
      title: "$5 Off Coupon for Natural Health Supplements",
      coins: 30,
    },
  ];

  return (
    <div className="bg-black text-white py-8">
      <div className="text-8xl text-center py-4">Store</div>
      <div className="font-bold text-2xl text-center pb-14 pt-4">
        Redeem our products for free by using EcoPreserve Coins.
      </div>
      <div className="bg-black text-white flex flex-wrap gap-14 p-4 px-12 justify-around">
        {cardsData.map((card, index) => (
          <StoreCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            coins={card.coins}
          />
        ))}
      </div>
    </div>
  );
}
