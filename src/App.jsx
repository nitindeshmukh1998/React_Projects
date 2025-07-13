import { useState } from "react";
import Logo from "./assets/Logo.png";
import "./App.css";

const cardData = [
  {
    idCategory: "2",
    strCategory: "Chicken",
    dishPrice: "100",
    strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
    strCategoryDescription: "Chicken is a type of domesticated fowl",
  },
  {
    idCategory: "1",
    strCategory: "Dessert",
    dishPrice: "150",
    strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",
    strCategoryDescription: "Dessert is a course that concludes a meal. ",
  },
  {
    idCategory: "3",
    strCategory: "Beef",
    dishPrice: "190",
    strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
    strCategoryDescription: "Beef is the culinary name for meat from cattle",
  },
  {
    idCategory: "4",
    strCategory: "Lamb",
    dishPrice: "150",
    strCategoryThumb: "https://www.themealdb.com/images/category/lamb.png",
    strCategoryDescription:
      "Lamb, hogget, and mutton are the meat of domestic sheep ",
  },
  {
    idCategory: "5",
    strCategory: "Miscellaneous",
    dishPrice: "120",
    strCategoryThumb:
      "https://www.themealdb.com/images/category/miscellaneous.png",
    strCategoryDescription:
      "General foods that don't fit into another category",
  },
  {
    idCategory: "6",
    strCategory: "Pasta",
    dishPrice: "120",
    strCategoryThumb: "https://www.themealdb.com/images/category/pasta.png",
    strCategoryDescription:
      "Pasta is a staple food of traditional Italian cuisine",
  },
  {
    idCategory: "7",
    strCategory: "Pork",
    dishPrice: "140",
    strCategoryThumb: "https://www.themealdb.com/images/category/pork.png",
    strCategoryDescription:
      "Pork is the culinary name for meat from a domestic pig",
  },
  {
    idCategory: "8",
    strCategory: "Seafood",
    dishPrice: "100",
    strCategoryThumb: "https://www.themealdb.com/images/category/seafood.png",
    strCategoryDescription: "Seafood is any form of sea life.",
  },
  {
    idCategory: "9",
    strCategory: "Side",
    dishPrice: "1900",
    strCategoryThumb: "https://www.themealdb.com/images/category/side.png",
    strCategoryDescription:
      "A side dish, sometimes referred to as a side order",
  },
  {
    idCategory: "10",
    strCategory: "Starter",
    dishPrice: "200",
    strCategoryThumb: "https://www.themealdb.com/images/category/starter.png",
    strCategoryDescription: "An entrée in modern French table service ",
  },
  {
    idCategory: "11",
    strCategory: "Vegan",
    dishPrice: "400",
    strCategoryThumb: "https://www.themealdb.com/images/category/vegan.png",
    strCategoryDescription: "Veganism is both the practice good for helth",
  },
  {
    idCategory: "12",
    strCategory: "Vegetarian",
    dishPrice: "200",
    strCategoryThumb:
      "https://www.themealdb.com/images/category/vegetarian.png",
    strCategoryDescription: "Vegetarianism is the practice of abstaining ",
  },
  {
    idCategory: "13",
    strCategory: "Breakfast",
    dishPrice: "100",
    strCategoryThumb: "https://www.themealdb.com/images/category/breakfast.png",
    strCategoryDescription: "Breakfast is the first meal of a day.",
  },
  {
    idCategory: "14",
    strCategory: "Goat",
    dishPrice: "130",
    strCategoryThumb: "https://www.themealdb.com/images/category/goat.png",
    strCategoryDescription: "The domestic goat or simply goat",
  },
];

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="brand-name">
        <img src={Logo} alt="company Logo" className="brand-logo" />
        <h1> Nitin's Food Gallery</h1>
      </div>

      <ul className="nav-tabs">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROFILE</li>
        <li>HISTORY</li>
        <li>WALLET</li>
        <li>CART</li>
      </ul>
    </div>
  );
};
const SearchBox = () => {
  return (
    <div className="search-box">
      <label htmlFor="input">Search: </label>
      <input type="text" placeholder="Search Items"></input>
    </div>
  );
};

const ItemCards = (props) => {
  const { strCategory, strCategoryDescription, strCategoryThumb ,dishPrice} =
    props;
  console.log(props);
  return (
    <div className="item-cards">
      <img src={strCategoryThumb} alt="item" />

      <div className="item-details">
        <p>{strCategoryDescription}</p>
        <h4>{strCategory}</h4>
        <h4>{`RS. ${dishPrice}`}</h4>
        <button>Add To CART</button>
      </div>
    </div>
  );
};
const PageBody = () => {
  return (
    <div className="body-container">
      <div className="items-page">
        {cardData.map((item) => (
          <ItemCards key={item.idCategory} {...item} />
        ))}
      </div>
    </div>
  );
};
const Footer = () => {
  return <h3>Footer</h3>;
};

function App() {
  return (
    <>
      <Navbar />
      <SearchBox />
      <PageBody />
      <Footer />
    </>
  );
}

export default App;
