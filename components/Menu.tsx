import Image from "next/image";
import React from "react";
import MenuCard from "./MenuCard";
import { momoItems } from "@/constants/momoItems";

const Menu = () => {


  return (
    <div className="flex m-5 justify-center items-center">
      <div className="flex justify-between w-[90%] flex-wrap">
        {momoItems.map((momoItem,index)=>(
          <MenuCard stars={momoItem.stars} reviews={momoItem.reviews} tasteRating={momoItem.tasteRating} momoHeading={momoItem.momoHeading} momoSubHeading={momoItem.momoSubHeading} momoDesc={momoItem.momoDesc} price={momoItem.price} offerText={momoItem.offerText} imageSrc={momoItem.imageSrc} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Menu;
