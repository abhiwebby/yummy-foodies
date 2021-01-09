import React from "react";

export default function Dataservice() {
  const categoryData = [
    {
      _id: 1,
      categoryName: "Fries",
      imgUrl: "../assets/img/icons/Fries.png",
    },
    {
      _id: 2,
      categoryName: "Pizza",
      imgUrl: "../assets/img/icons/Pizza.png",
    },
    {
      _id: 3,
      categoryName: "Burger",
      imgUrl: "../assets/img/icons/Burger.png",
    },
    {
      _id: 4,
      categoryName: "Sandwich",
      imgUrl: "../assets/img/icons/Sandwich.png",
    },
    {
      _id: 5,
      categoryName: "Coffee",
      imgUrl: "../assets/img/icons/Coffee.png",
    },
  ];

  return (
    <div>
      <h1>gdfgd</h1>
      {/* {categoryData.map((categoryItem, idx) => (
        <ul>
          <li key={idx}>{categoryItem._id}</li>
          <li>{categoryItem.categoryName}</li>
          <li>
            <img src={categoryItem.imgUrl} width="100" height="100" alt="" />
          </li>
        </ul>
      ))} */}
    </div>
  );
}
