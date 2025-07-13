import ItemCards from "./ItemCards";
import cardData from "../utils/MockData";
import { useState } from "react";
import SearchBox from "./SearchBox";
import ButtonText, { ButtonTextCostants } from "../utils/Constants"
const PageBody = () => {
  let newList = cardData.filter((item) => item.rating >= 4.0);

  const [topRatedList, setTopRatedList] = useState(cardData);

  const [buttonText, setButtonText] = useState(ButtonTextCostants.BUTTON_TEXT);

  const handleClick = () => {
    if (topRatedList === cardData) {
      setTopRatedList(newList);
      setButtonText(ButtonTextCostants.BUTTON_TEXT_ALL);
    } else {
      setTopRatedList(cardData);
      setButtonText(ButtonTextCostants.BUTTON_TEXT);
    }
  };

  return (
    <>
      <SearchBox handleClick={handleClick} buttonText={buttonText} />
      <div className="body-container">
        <div className="items-page">
          {topRatedList.map((item) => (
            <ItemCards key={item.idCategory} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default PageBody;
