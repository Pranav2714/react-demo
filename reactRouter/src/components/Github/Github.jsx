import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  //   const [data, setData] = useState([]);
  const data = useLoaderData();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="flex justify-center flex-row ">
      <h1 className="text-4xl text-center">
        Github Followers : {data.followers}
      </h1>
      <img src={data.avatar_url} alt="" />
    </div>
  );
};

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
