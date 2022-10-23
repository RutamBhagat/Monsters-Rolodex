import React from "react";

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div
      key={id}
      className="flex flex-col justify-center w-80 h-96 mx-4 my-4 rounded-md bg-teal-300"
    >
      <img
        className="w-3/4 mx-auto mt-0 mb-5"
        src={`https://robohash.org/${id*1000}?set=set2`}
        alt="monster"
      />
      <h1 className="text-center text-gray-800 text-2xl mb-5">{name}</h1>
      <p className="text-center text-gray-800">{email}</p>
    </div>
  );
};

export default Card;
