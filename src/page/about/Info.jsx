import React from 'react'
import style from "./aboutPage.module.css"
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


const Info = () => {
  const navigate=useNavigate()

  return (
    <div className={style.Info_container}>
      <div className="container">
      <div className={style.aboutPage_main}>
        <h3 className={style.aboutPage_main_title}>Layihə haqqında</h3>
        <p className={style.AboutPage_goBack} onClick={()=>navigate(-1)}><MdOutlineKeyboardArrowLeft/>Go Back</p>
        <p className={style.aboutPage_main_subtitle}>RENTERMMC.COM lahiyəsi Azərbaycanda yalniz icarə üçün nəzərdə tutulmuş ümumi icarə platformasidir.</p>
        <p className={style.aboutPage_main_subtitle}>Hər bir istifadəçi RENTERMMC.COM saytindan istifadə etməklə 20 dən artiq kateqoriya üzrə məhsullari icariyə gotürə və axdara bilər.        </p>
        <p className={style.aboutPage_main_subtitle}>RENTERMMC.COM-da şirkətlər və fərdi sahibkarlarla yanaşi fərdi şəxslərdə öz məhsullarini yerləşdirə bilərlər.        </p>
        <p className={style.aboutPage_main_subtitle}>Hər hansi bir mövzuda irad və təklifiniz olarsa bu nömrələr ilə <strong>077-613-59-59;</strong> <strong>070-613-59-59</strong> əlaqə saxliya bilərsiniz.</p>
        <h3 className={style.aboutPage_main_title}>Administrasiya</h3>
        <p className={style.aboutPage_main_subtitle}>Servisin inzibatçılığını Azərbaycan Respublikasının qanunvericiliyinə uyğun olaraq yaradılmış və qeydiyyatdan keçmiş “RENTER MMC” Şirkəti (VÖEN: 2007660461) həyata keçirir. Servisə dair bütün mülkiyyət hüquqları müstəsna olaraq Şirkətə aiddir.</p>
      </div>
    </div>
    </div>
  )
}

export default Info
