import React, { useState } from 'react'
import style from "./footer.module.css"
import { FaFacebook,FaPinterest } from "react-icons/fa";
import { FaXTwitter,FaInstagram } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate=useNavigate()

    const[email,setEmail]=useState('')
    const handleClickEmail=(e)=>{
      setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted email:", email);
  };
  return (
      <div className={style.footer}>
      <div className={style.footerMain}>
        <div className={style.footerMain_infoBox}>
            <p className={style.footerMain_infoBox_title}>Our mission</p>
            <p className={style.footerMain_infoBox_mainText}>At Multi, we’re dedicated to providing our customers with the highest quality products and
            services on the market. We take pride in knowing that our products last and that our services 
            exceed expectations.</p>
            <em className={style.footerMain_infoBox_mainText}>This is a demonstration store. No orders will be fulfilled.</em>
        </div>
        <div className={style.footerMain_Link}>
            <p className={style.footerMain_title}>Shop</p>
            <ul className={style.footerMain_Link_ul}>
                <a href="" className={style.footerMain_Link_ul_links} >Laptop</a>
                <a href="" className={style.footerMain_Link_ul_links}>PC</a>
                <a href="" className={style.footerMain_Link_ul_links} >Computer Parts</a>
                <a href="" className={style.footerMain_Link_ul_links}>Headset</a>
                <a href="" className={style.footerMain_Link_ul_links}>Acsesories</a>
            </ul>
        </div>
        <div className={style.footerMain_Link}>
            <p className={style.footerMain_title}>Information</p>
            <ul className={style.footerMain_Link_ul}>
                <a href="" className={style.footerMain_Link_ul_links}>Search</a>
                <a href="" className={style.footerMain_Link_ul_links}>Contack</a>
                <a href="" className={style.footerMain_Link_ul_links} onClick={()=>navigate('/about')}>About Us</a>
            </ul>
        </div>
        <div className={style.footerMain_login}>
            <p className={style.footerMain_title}>NewsLetter</p>
            <div className={style.footerMain_login_inputBox}>
            <form onSubmit={handleSubmit} className={style.footerMain_login_inputBox}>
              <input
                type="email"
                value={email}
                required
                onChange={handleClickEmail}
                className={style.footerMain_login_inputBox_input}
                placeholder='Enter your e-mail'
              />
            </form>
            </div>
            <p className={style.footerMain_login_text}>Join our newsletter and never miss out on the latest trends and promotions.</p>
            <div className={style.footerMain_login_contackLogo}>
                <FaFacebook className={style.footerMain_login_contackLogo_icon} href='https://www.facebook.com/shopify'/>
                <FaXTwitter className={style.footerMain_login_contackLogo_icon} href='https://www.twitter.com/shopify/'/>
                <FaPinterest className={style.footerMain_login_contackLogo_icon} href='https://www.pinterest.com/shopify/'/>
                <FaInstagram className={style.footerMain_login_contackLogo_icon} href='https://www.instagram.com/shopify/'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
