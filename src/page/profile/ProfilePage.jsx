import React from 'react'
import Navbar from '../../layout/Header/DesktopNavbar/Navbar'
import style from "./profileCard.module.css"
import { PiCardsFill } from "react-icons/pi";
import { FcSimCardChip } from "react-icons/fc";
import { SlArrowLeft } from "react-icons/sl";
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate=useNavigate()

  return (
    <div className={style.profilePage}> 
      <Navbar/>
      <div className="container">
        <p className={style.profilePageHeader}><SlArrowLeft/>Go Back</p>
          <div className={style.profileHeader}>
              <p className={style.profileHeader_left}>Şəxsi kabinet</p>
              <div className={style.profileHeader_right}>
                  <div className={style.profileHeader_right_title}>
                      <p className={style.profileHeader_right_title_headText}>Şəxsi hesab</p>
                      <p className={style.profileHeader_right_title_text}>0,00 AZN</p>
                  </div>
                  <button className={style.profileHeader_right_btn}>Artir</button>
              </div>
          </div>
          <div className={style.profileMain}>
              <div className={style.profileMain_head}>
                  <span className={style.profileMain_head_item}><PiCardsFill/>Elanlar-(0)</span>
                  <span className={style.profileMain_head_item}><FcSimCardChip/>Kartlar-(0)</span>
              </div>
              <div className={style.profileMain_main}>
                <div className={style.profileMain_main_noItem}>
                  <p>Bu bölmədə elan yoxdur</p>
                  <button className={style.profileMain_main_noItemBtn} onClick={()=>navigate('/yeniElan')}><CiCirclePlus/>Yeni Elan</button>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ProfilePage
