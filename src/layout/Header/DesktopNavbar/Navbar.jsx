import React, { useState, useEffect } from 'react';
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoSearchSharp, IoAddSharp, IoFilter } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import data from "../../../data.json";
import HeaderFilterCard from '../headerFilterCard/HeaderFilterCard';
import CategoryModal from '../CategoryModal/CategoryModal';
import style from './navbar.module.css';

const Navbar = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [isFilterCardOpen, setFilterCardOpen] = useState(false);
    const [input, setInput] = useState("");
    const [filterData, setFilterData] = useState([]);
    const navigate = useNavigate();

    const cities = ['Bakı', 'Gəncə', 'Sumqayıt', 'Şəki', 'Lənkəran'];

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const openModal = () => setModalOpen(true);

    const closeModal = () => setModalOpen(false);

    const toggleFilterCard = () => setFilterCardOpen((prev) => !prev);

    useEffect(() => {
        if (input.trim() !== "") {
            const filtered = data.filter((item) =>
                item.title.toLowerCase().includes(input.trim().toLowerCase())
            );
            setFilterData(filtered);
        } else {
            setFilterData([]);
        }
    }, [input]);

    return (
        <>
            <nav className={style.navbar}>
                <div className="container">
                    <div className={style.navbar_container}>
                        <p className={style.navbarBrand} onClick={() => navigate("/")}>
                            JetEvimiz
                        </p>
                        <div className={style.offcanvasBody}>
                            <div className={style.categoryBox} onClick={openModal}>
                                <BiSolidCategoryAlt /> Kategoriya
                            </div>
                            <div className={style.inputGroup}>
                                <select
                                    value={selectedCity}
                                    onChange={handleCityChange}
                                    className={style.navBar_selectBox}
                                >
                                    <option value="">--Şəhər seçin--</option>
                                    {cities.map((city, index) => (
                                        <option key={index} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    placeholder="Əşya və ya xidmət axtarışı"
                                    type="text"
                                    className={style.searchInput}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <button className={style.searchBtn}>
                                    <IoSearchSharp className={style.icon} />
                                </button>
                            </div>
                        </div>
                        <div className={style.advertsBox}>
                            <button
                                className={style.advertsBox_btn_new}
                                onClick={() => navigate('/yeniElan')}
                            >
                                <IoAddSharp /> Yeni Elan
                            </button>
                            <button
                                className={style.advertsBox_btn_filter}
                                onClick={toggleFilterCard}
                            >
                                <IoFilter /> Filter
                            </button>
                        </div>
                        <FaBars
                            className={style.bar_icon}
                            onClick={() => navigate('/headerBox')}
                        />
                    </div>
                </div>
            </nav>

            {isFilterCardOpen && <HeaderFilterCard isFilterCardOpen={isFilterCardOpen} />}
            {isModalOpen && <CategoryModal closeModal={closeModal} />}
        </>
    );
};

export default Navbar;
