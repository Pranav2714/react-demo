import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userId } = useParams();
  return (
    <>
      <div className="flex justify-center flex-nowrap ">
        <h1 className="text-4xl text-center ">Hello👋,{userId}</h1>
        <img
          src="https://avatar.iran.liara.run/public/39"
          width={200}
          height={100}
        ></img>
      </div>
    </>
  );
};

export default User;
