import { useEffect, useState } from "react";
//import { Items } from "./components/Data";
import EmptyCart from "../assets/emptyCart.png"
import UserHeader from "./UserHeader";
import Delivery from "../assets/delivery.png";
import SubMenuContainer from "./SubMenuContainer";
import FoodMenuCard from "./FoodMenuCard";
import { MenuItems, Items } from "./Data";
import FoodItems from "./FoodItems";
import Debit from "./Debit";
import CartItems from "./CartItems";
import { useStateValue } from "./StateProvider";
import { actionType } from "./Reducer";
import RightMenu from './RightMenu'


const Main = () => {
    const [itemsData, setItemsData] = useState(
    Items.filter((el) => el.itemId === "buger01")
  );

  const [{ cart, total, favourites }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    if (cart && cart.length > 0) {
      const calculatedTotal = cart.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
      );
      return calculatedTotal;
    }
    return 0;
  };

  const handleAddToCart = (item) => {
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);
    if (itemInCart) {
      dispatch({
        type: actionType.UPDATE_ITEM_QUANTITY,
        itemId: item.id,
        quantity: itemInCart.quantity + 1,
      });
    } else {
      dispatch({
        type: actionType.ADD_TO_CART,
        item: { ...item, quantity: 1 },
      });
    }
    dispatch({
      type: actionType.SET_TOTAL,
      total: calculateTotalPrice(),
    });
    const calculatedTotal = calculateTotalPrice();
    setTotalPrice(calculatedTotal);
  };

const handleToggleFavourite = (item) => {
  const itemInFavorites = favourites.find(
    (favouriteItem) => favouriteItem.id === item.id
  );
  if (itemInFavorites) {
    dispatch({
      type: actionType.REMOVE_FROM_FAVOURITES,
      itemId: item.id,
    });
  } else {
    dispatch({
      type: actionType.ADD_TO_FAVOURITES,
      item: item,
    });
  }
};


  useEffect(() => {
    const menuLi = document.querySelectorAll("#bottom li");

    function menuIsActive() {
      menuLi.forEach((li) => li.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((li) => li.addEventListener("click", menuIsActive));

    //toggle foodmenucard active
    const foodmenuactive = document
      .querySelector("#foodrow")
      .querySelectorAll(".foodmenucard");

    function menuCardActive() {
      foodmenuactive.forEach((li) => li.classList.remove("active"));
      this.classList.add("active");
    }

    foodmenuactive.forEach((li) =>
      li.addEventListener("click", menuCardActive)
    );
  }, [itemsData, cart, total, totalPrice]);

  function setItems(itemId) {
    setItemsData(Items.filter((el) => el.itemId === itemId));
  }
  return (
    <>
      
      <main className="h-auto w-full mt-20 main lg:py-2 lg:px-7 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        <div
          className="w-full rounded-xl relative flex items-center justify-center m-auto"
          id="userdiv"
        >
          <UserHeader name={"Godwin"} discount={"5000"} link={"#"} />
          <img
            src={Delivery}
            alt=""
            className="absolute h-36 md:h-48 right-0 z-0"
          />
        </div>
        <div className="w-full py-2">
          <div className="flex items-center justify-between w-full subMenuContainer">
            <SubMenuContainer name={"Menu Category"} />
          </div>
          <div
            className="flex items-center md:justify-between overflow-x-scroll overflow-y-hidden my-2 py-2 space-x-3"
            id="foodrow"
          >
            {MenuItems &&
              MenuItems.map((data) => (
                <div key={data.id} onClick={() => setItems(data.itemId)}>
                  <FoodMenuCard
                    imgSrc={data.imgSrc}
                    name={data.name}
                    isActive={data.id === 1 ? true : false}
                  />
                </div>
              ))}
          </div>
          <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-4 grid-cols-1 vs:grid-cols-2 justify-evenly sm:grid-cols-3 justify-items-center">
            {itemsData &&
              itemsData.map((data) => (
                <FoodItems
                  imgSrc={data.imgSrc}
                  name={data.name}
                  price={data.price}
                  ratings={data.ratings}
                  key={data.id}
                  itemId={data.id}
                  handleAddToCart={handleAddToCart}
                  calculateTotalPrice={calculateTotalPrice}
                  handleToggleFavourite={handleToggleFavourite}
                  isFavourited={favourites.some((item) => item.id === data.id)}
                />
              ))}
          </div>
        </div>
        <RightMenu cart={cart} calculateTotalPrice={calculateTotalPrice} />
      </main>
    </>
  );
}

export default Main;
