import React,{useState,useEffect}from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { FaHeart, FaCartShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import style from "./headerNavBox.module.css"
import { FaEarthOceania } from "react-icons/fa6";


const HeaderNavBox = () => {
const navigate = useNavigate();
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);


  useEffect(() => {
    const savedUserName = localStorage.getItem("userName");
    if (savedUserName) {
      setUser(savedUserName);
    }
    setLoading(false);
  }, []);

  const handleLoginClick = () => {
    if (user) {
     {
       navigate('/profil')
      }
    } else {
      navigate("/login");
    }
  };


  return (
    <div className={style.nawBar_responsive}>
        <div className={style.nawBar_responsive_header}>
            <span>EasySaleApp</span>
            <IoMdCloseCircle className={style.nawBar_responsive_header_icon} onClick={()=>navigate(-1)}/>
        </div>
        <div className={style.nawBar_responsive_main}>
            <div className={style.nawBar_responsive_main_box} onClick={handleLoginClick}>
                <IoMdPerson /> {
                    loading
                    ? "Yukleniyor..."
                    : user
                    ? `${user}`
                    :"Giriş"
                } 
            </div>
            <div className={style.nawBar_responsive_main_box} onClick={() => navigate('/likedPage')}>
                <FaHeart /> Beyendiklerim
            </div>
            <div className={style.nawBar_responsive_main_box}>
                <FaCartShopping /> Paketler
            </div>
            <p className={style.emptyBox}></p>
            <div className={style.nawBar_langBox}><FaEarthOceania/>Dil</div>
            <div>Az</div>
            <div>Rus</div>
            <div>En</div>
            <p className={style.emptyBox}></p>
            <div className={style.nawBar_responsive_main_box} onClick={()=>navigate('/info')}>Hakkimizda</div>
            <div className={style.nawBar_responsive_main_box} onClick={()=>navigate('/contack')}>Bizimle Elaqe</div>
            <div className={style.nawBar_responsive_main_box} onClick={()=>navigate('/rules')}>Qaydalar</div> 
            <div className={style.nawBar_responsive_main_box} onClick={()=>navigate('/termcondition')}>Istifadeki Razilasmasi</div> 
            <div className={style.nawBar_responsive_main_box} onClick={()=>navigate('/faq')}>Faq</div> 
        </div>
    </div>
  )
}

export default HeaderNavBox
