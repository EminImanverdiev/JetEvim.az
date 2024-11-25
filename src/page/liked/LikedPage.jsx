import React, { useEffect, useState } from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/footer/Footer';
import style from "./likedPage.module.css";
import { FaHeart } from "react-icons/fa6";
import { BsShop } from "react-icons/bs";
import { IoCalendarNumber } from "react-icons/io5";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import FooterResponsive from '../../layout/footer_responsive/FooterResponsive';
import data from "../../data.json"; // Assuming this is your main product data
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addLikedProduct } from '../../redux/likedSlice'; // Assuming you already have this slice


const LikedPage = () => {
    const navigate = useNavigate();
    const [likedProducts, setLikedProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const likedProductsFromStorage = localStorage.getItem('likedProducts');
        if (likedProductsFromStorage) {
            setLikedProducts(JSON.parse(likedProductsFromStorage));
        }
    }, []);
    const toggleLiked = (productItem) => {
        const isLiked = likedProducts.some((likedProduct) => likedProduct.id === productItem.id);
        let updatedLikedProducts;

        if (isLiked) {
            updatedLikedProducts = likedProducts.filter((likedProduct) => likedProduct.id !== productItem.id);
        } else {
            updatedLikedProducts = [...likedProducts, productItem];
        }

        setLikedProducts(updatedLikedProducts);
        localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
        dispatch(addLikedProduct(productItem));
    };
    const filteredProducts = data.filter(product =>
        likedProducts.some(likedProduct => likedProduct.id === product.id)
    );

    return (
        <div>
            <div className={style.likedPage}>
                <Header />
                <div className="container">
                    <p className={style.productCard_goBack} onClick={() => navigate(-1)}>
                        <MdOutlineKeyboardArrowLeft /> Go Back
                    </p>
                    <div className={style.productCard_container}>
                        {
                            filteredProducts.length > 0 ? (
                                filteredProducts.map((item) => (
                                    <div className={style.productCard} key={item.id}>
                                            <div className={style.productCard_imgBox}>
                                                <img src={item.thumbnail} alt="" className={style.productCard_imgBox_img} />
                                                <FaHeart 
                                                    className={style.productCard_imgBox_heartIcon}
                                                    onClick={() => toggleLiked(item)} // Allow toggling like status
                                                />
                                                <div className={style.productCard_imgBox_title}><BsShop /> Magaza</div>
                                            </div>
                                        <Link to={`/product-details/${item.id}`}>
                                            <div className={style.productCard_title}>
                                                <span className={style.productCard_title_pirce}>{item.price} AZN</span>
                                                <div className={style.productCard_title_dayBox}><IoCalendarNumber /> 1 Gun</div>
                                            </div>
                                            <p className={style.productCard_subTitle}>{item.title}</p>
                                            <p className={style.productCard_text}>Baki</p>
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <p className={style.noLikedItems}>You haven't liked any products yet.</p>
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer />
            <FooterResponsive />
        </div>
    );
};

export default LikedPage;
