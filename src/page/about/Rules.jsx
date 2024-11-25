import React from 'react'
import style from "./aboutPage.module.css"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Rules = () => {
    const navigate=useNavigate()
  return (
    <div className={style.rules_container}>
        <div className='container'>
            <h3 className={style.rulesPage_title}>EasySaleApp QAYDALAR</h3>
            <p className={style.AboutPage_goBack} onClick={()=>navigate(-1)}><MdOutlineKeyboardArrowLeft/>Go Back</p>
        <section>
            <h4 className={style.rulesPage_subtitle}>Elanin yerlesidirlmesi</h4>
            <p className={style.rulesPage_text}>Bir ay(30gün) ərzində isdifadəçi saytin qaydalarina zidd olmayan katiqoriya və subkatiqoriyaya aid ödənişiz şəkildə yalniz bir əded elan paylaşa bilər.</p>
            <p className={style.rulesPage_text}>Əger elanin müddəti bitibsə isdifadəçi elani bərpa edə bilər şəxsi kabinetinə daxil olaraq və ya yeni elanla əvəz edə billər.</p>
            <p className={style.rulesPage_text}>Elan yerləşdirildikdə elan saytin qaydalarina tam olaraq uyuğun olmalidi.</p>
            <p className={style.rulesPage_text}>Elan yerləşdirdikdən sonra adminstrasiya tərefindən yoxlanilir və qayda pozuntusu aşkar edilməse təsdiqlənir.</p>
            <p className={style.rulesPage_text}>Aliş və satiş tipli elanlarin sayta yerləşdirilməsi qadağandir.</p>
            <p className={style.rulesPage_text}>Isdifadəçi sayta yerləşdiridiyi hər bir elana görə şəxsən məsuliyyət daşiyir.</p>
            <p className={style.rulesPage_text}>QAYDALARIN POZULMASI HALINDA HƏDDA ÖDƏNIŞIN HƏYATA KEÇIRILMIŞ ELANLARDA ADMINSTRASIYA TƏRƏFINDƏN SILINƏ BILƏR.</p>
        </section>
        <section>
            <h4 className={style.rulesPage_subtitle}>TƏSVIR</h4>
            <p className={style.rulesPage_text}>Elanin təsviri tam olaraq elanin şəklinə və təklif olunan məhsulun təsvirinə tam uyğun olmalidir.</p>
            <p className={style.rulesPage_text}>Bir elanda yalniz bir məhsul qeyd olunmalidir.</p>
            <p className={style.rulesPage_text}>Əgər isdifadəci bir necə məhsul təklif edirsə hərbir məhsul ücün yeni elan yaradilmalidir.</p>
            <p className={style.rulesPage_text}>Elanin təsvirində məshul haqqinda dəqiq və ətrafli məlumat qeyd olunmalidir.</p>
            <p className={style.rulesPage_text}>Elanin təsvirində link əlavə etmək qadağandir.</p>
        </section>
        <section>
            <h4 className={style.rulesPage_subtitle}>QIYMƏT</h4>
            <p className={style.rulesPage_text}>Elani yerləşdirdikdə məhsulun qiymətini müvaffiq xanada qeyd edin.</p>
            <p className={style.rulesPage_text}>Məhsulun qiymətini şərti olaraq görsətmək qadağandi əks halda elaniniz adminstrasiya tərəfindən silinə bilər.</p>
        </section>
        <section>
            <h4 className={style.rulesPage_subtitle}>ŞƏKILLƏR</h4>
            <p className={style.rulesPage_text}>Şəkillər keyfiyyətli olmalidir.</p>
            <p className={style.rulesPage_text}>Şəkillərin maksimal sayi 20-dir, minimum 1 şəkil olmalidir.</p>
            <p className={style.rulesPage_text}>Şəkil elanina məzmununa uyğun olamlidir.</p>
            <p className={style.rulesPage_text}>Şəkildə yalniz təklif olunnan məhsul gösdərilməlidir.</p>
            <p className={style.rulesPage_text}>Qaydalara uyğun olmayan şəkillerin yerləşdirilməsi qadağandir.</p>
        </section>
        <section>
            <h4 className={style.rulesPage_subtitle}>ƏLAQƏ</h4>
            <p className={style.rulesPage_text}>Əlaqə vasitəlerinizi yalniz müvafiq xanada qeyd edin.</p>
            <p className={style.rulesPage_text}>Əlaqə vasitələrizin doğruluğuna diqqət yetirin(mobil nömrə,ad,elektron poct,ünvan)</p>
            <p className={style.rulesPage_text}>Əlaqə vasitələrinizin işlək vəziyətdə olmasina diqqət yetirin,əks halda Pin kodu əlde etmək mümkün olmayacaq.</p>
        </section>
        <p className={style.rulesPage_rulesText}>EasySaleApp saytinin rəhbərliyi tərəfindən xəbərdarliq etmədən,birtərəfli qaydada istənilən vaxt qaydalari dəyişə bilər.</p>
        </div>
    </div>
  )
}

export default Rules
