import React from "react";
import { useSelector } from "react-redux";

function Card({ item }) {
  const { dark } = useSelector((state) => state.darkMode);

  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div
          className={`card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 ${
            dark ? 'text-black border' : ''
          }`}
        >
          <figure>
            <img src={item.image} width={"300px"} height={"300px"} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.info}</div>
            </h2>
            <p>{item.price}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
