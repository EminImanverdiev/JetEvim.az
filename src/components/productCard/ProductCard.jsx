import React, { useState, useEffect } from "react";
import style from "./productCard.module.css";
import { FaHeart } from "react-icons/fa6";
import { BsFillHeartFill, BsShop } from "react-icons/bs";
import { IoCalendarNumber } from "react-icons/io5";
import data from "../../data.json";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLikedProduct } from "../../redux/likedSlice";

const ProductCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLiked = (productItem) => {
    const savedUserName = localStorage.getItem("userName");
    if (!savedUserName) {
      navigate("/login"); // Redirect to login if not logged in
      return;
    }

    const isLiked = likedProducts.some(
      (likedProduct) => likedProduct.id === productItem.id
    );

    let updatedLikedProducts;
    if (isLiked) {
      updatedLikedProducts = likedProducts.filter(
        (likedProduct) => likedProduct.id !== productItem.id
      );
    } else {
      updatedLikedProducts = [...likedProducts, productItem];
    }

    setLikedProducts(updatedLikedProducts);
    localStorage.setItem("likedProducts", JSON.stringify(updatedLikedProducts));
    dispatch(addLikedProduct(productItem));
  };

  useEffect(() => {
    const likedProductsFromStorage = localStorage.getItem("likedProducts");
    if (likedProductsFromStorage) {
      setLikedProducts(JSON.parse(likedProductsFromStorage));
    }
  }, []);

  return (
    <div className="container">
      <div className={style.productCard_container}>
        {data.map((item) => (
          <div className={style.productCard} key={item.id}>
            <Link to={`/product-details/${item.id}`}>
              <div className={style.productCard_imgBox}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className={style.productCard_imgBox_img}
                />
                {likedProducts.some(
                  (likedProduct) => likedProduct.id === item.id
                ) ? (
                  <BsFillHeartFill
                    className={style.productCard_imgBox_heartIcon_check}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation on click
                      toggleLiked(item);
                    }}
                  />
                ) : (
                  <FaHeart
                    className={style.productCard_imgBox_heartIcon}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation on click
                      toggleLiked(item);
                    }}
                  />
                )}
                <div className={style.productCard_imgBox_title}>
                  <BsShop /> Magaza
                </div>
              </div>
              <div className={style.productCard_title}>
                <span className={style.productCard_title_price}>
                  {item.price} AZN
                </span>
                <div className={style.productCard_title_dayBox}>
                  <IoCalendarNumber /> 1 Gun
                </div>
              </div>
              <p className={style.productCard_subTitle}>{item.title}</p>
              <p className={style.productCard_text}>Baki</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
