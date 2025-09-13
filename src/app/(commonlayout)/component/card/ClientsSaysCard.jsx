'use client'
import React from "react";
import { Star } from "lucide-react";

const ClientsSaysCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 h-64">
      {/* Profile */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.role}</p>
        </div>
      </div>

      {/* Number */}
<div className="flex items-center ">
  <p className="text-sm text-gray-400 font-semibold border-t p-2 rounded-full">{item.number}</p>
  <div className="flex-1 h-0.5 bg-gray rounded-full"></div>
</div>

     

      {/* Feedback */}
      <p className="text-gray-600 text-sm mb-4">{item.feedback}</p>

      {/* Rating */}
      <div className="flex items-center gap-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-gray-500">({item.rating}/5)</span>
      </div>
    </div>
  );
};

export default ClientsSaysCard;
