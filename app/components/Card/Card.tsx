import React from "react";
import "./Card.css";
import { CardProps } from "@/app/types/cardProps";


const Card: React.FC<CardProps> = ({ title, shortdes, date, children,  }) => {

  return (
    <div className="bg-F1F0E8 p-4 rounded-md shadow-md inline-block">
      <h2 className="text-lg font-semibold mb-4 cursor-pointer">{title}</h2>
      <p className="text-sm mb-6 cursor-pointer">{shortdes}</p>
      <p className="text-xs mb-6 text-gray-500 cursor-pointer">{date}</p>
      {children}
    </div>
  );
};

export default Card;
