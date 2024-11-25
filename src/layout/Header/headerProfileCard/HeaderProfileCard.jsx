import React, { useEffect, useState } from "react";
import style from "./headerProfileCard.module.css";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const HeaderProfileCard = () => {
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUserName = localStorage.getItem("userName");
    if (savedUserName) {
      setUserName(savedUserName);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <div className={style.HeaderProfileCard}>
      <div className={style.headerProfileCardHead}>
        <RxAvatar className={style.headerProfileCardHead_icon} />
        <span>{userName ? userName : "Lorem"}</span>
      </div>
      <div
        className={style.headerProfileCardtitle}
        onClick={() => navigate("/profil")}
      >
        Mənim elanlarım
      </div>
      <div className={style.headerProfileCardtitle}>Şəxsi hesabı artır</div>
      <div
        className={style.headerProfileCardtitle}
        onClick={() => navigate("/likedPage")}
      >
        Seçilmişlər
      </div>
      <div className={style.headerProfileCardtitle} onClick={handleLogout}>Çıxış</div>
    </div>
  );
};

export default HeaderProfileCard;
