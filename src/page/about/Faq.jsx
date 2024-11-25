import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import style from "./aboutPage.module.css"
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Faq = () => {
  const navigate=useNavigate()
  const [openIndex, setOpenIndex] = useState(null);

  const clickBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Elanı necə silim ?",
      answer: "Bunun üçün silmək istədiyiniz elanı tapın. Elanı tapmağın ən asan yolu elan kodunu axtarış xanası ilə axtarmaqdır. Elanı tapdıqdan sonra elanı sil düyməsinə tıklayın."
    },
    {
      question: "Niyə elanım silindi ?",
      answer: "Elan yerləşdirilən zaman qaydalar yazılıb, onları mütləq oxuyun. Yazılan qaydalardan hır hansı 1-i pozulsa sizin elan silinəcək."
    },
    {
      question: "Elandakı məlumatları necə dəyişim ?",
      answer: "Bunun üçün dəyişmək istədiyiniz elanı tapın. Elanı tapmağın ən asan yolu elan kodunu axtarış xanası ilə axtarmaqdır. Elanı tapdıqdan sonra 'Düzəliş et' düyməsinə tıklayın. Elanı öz hesabınıza daxil olmaqla dəyişə bilərsiniz."
    }
  ];

  return (
    <div className={style.faq_container}>
      <div className='container'>
      <p className={style.AboutPage_goBack} onClick={()=>navigate(-1)}><MdOutlineKeyboardArrowLeft/>Go Back</p>
        {faqItems.map((item, index) => (
          <section key={index} className={style.faq_card}>
            <h4
              className={style.faq_card_title}
              onClick={() => clickBox(index)}
            >
              {item.question} <IoIosArrowDown className={`${style.faq_card_icon} ${openIndex === index ? style.faq_card_icon_rotate : ""}`} />
            </h4>
            <p className={`${style.faq_card_subtitle} ${openIndex === index ? style.faq_card_subtitle_disBlock : ""}`}>
              {item.answer}
            </p>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Faq
