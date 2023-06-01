import { Favorite, AddRounded, StarRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Items } from "./Data";
import { useStateValue } from "./StateProvider";
import { actionType } from "./Reducer";
let cartData = []

const FoodItems = ({
  name,
  price,
  imgSrc,
  ratings,
  itemId,
  handleAddToCart,
  calculateTotalPrice,
  handleToggleFavourite,
  isFavourited
}) => {

  //console.log(handleToggleFavourite)
  const [isFavourite, setIsFavourite] = useState(false);
  const [rated, isRated] = useState(Math.floor(ratings));
  const [cartp, setCartp] = useState(null);
  const [{}, dispatch] = useStateValue();
  

  const addToCart = () => {
    const item = {
      imgSrc: imgSrc,
      name: name,
      price: price,
      id: itemId,
      //quantity: quantity,
    };
    handleAddToCart(item);
    dispatch({
      type: actionType.SET_CART,
      item: item,
    });
    const calculatedTotal = calculateTotalPrice();
    dispatch({
      type: actionType.SET_TOTAL,
      total: calculatedTotal,
    });
  };


  useEffect(() => {
    if (cartp) {
      cartData.push(cartp);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [cartp,]);
  function favouriteItem() {
    setIsFavourite(!isFavourite);
  }

  function handleRating(value) {
    isRated(value);
  }
  return (
    <>
      <div
        className="w-[180px] relative h-[180px] flex items-center justify-end my-2 flex-col mb-24"
        id={itemId}
      >
        <span
          className="absolute top-[45%] right-4 flex items-center justify-center"
          id="favspan"
        >
          {/* <Favorite
            className={`text-red-400 cursor-pointer ${
              isFavourite ? "active" : ""
            }`}
            //onClick={favouriteItem}
            onClick={() =>
              handleToggleFavourite({ name, imgSrc, price, id: itemId })
            }
            id="favIcon"
          /> */}
          {isFavourited ? (
            <Favorite
              className="cursor-pointer text-red-600"
              onClick={() =>
                handleToggleFavourite({ name, imgSrc, price, id: itemId })
              }
            />
          ) : (
            <Favorite
              className="cursor-pointer text-red-400"
              onClick={() =>
                handleToggleFavourite({ name, imgSrc, price, id: itemId })
              }
            />
          )}
        </span>
        <div className="w-24 h-24 rounded-full flex items-center justify-center absolute bottom-24">
          <img
            src={imgSrc}
            alt=""
            className="w-full h-full object-contain p-1 absolute top-2"
          />
        </div>
        <div className="bg-white shadow-xl p-2 pt-12 rounded-xl w-[160px]">
          <p className="font-bold text-lg ">{name}</p>
          <div className="flex items-center justify-between">
            <div>
              {Array.apply(null, { length: 5 }).map((e, i) => (
                <i
                  key={i}
                  id="star"
                  onClick={() => handleRating(i + 1)}
                  className={`${rated > i ? "gold" : "grey"}`}
                >
                  <StarRounded />
                </i>
              ))}
              <p className="font-bold">
                <span className="text-xs text-cyan-500 font-normal">
                  &#8358;
                </span>
                {price}
              </p>
            </div>
            <i
              className="bg-cyan-400 text-white rounded-full flex items-center justify-center"
              id="addc"
              onClick={() => setCartp(Items.find((n) => n.id == itemId))}
            >
              <AddRounded className="cursor-pointer" onClick={addToCart} />
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItems;
