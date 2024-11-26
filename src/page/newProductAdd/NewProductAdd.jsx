import React, { useState, useEffect } from 'react';
import Footer from '../../layout/footer/Footer';
import FooterResponsive from '../../layout/footer_responsive/FooterResponsive';
import style from "./newProductAdd.module.css";
import HeaderTop from '../../layout/Header/HeaderTop/HeaderTop';

const NewProductAdd = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [parameters, setParameters] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingParameters, setLoadingParameters] = useState(false);
  const [images, setImages] = useState([]);

  const cities = ['Bakı', 'Gəncə', 'Sumqayıt', 'Şəki', 'Lənkəran'];

  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        const response = await fetch('http://restartbaku-001-site3.htempurl.com/api/Category/get-all-categories?LanguageCode=1');
        const data = await response.json();
        setCategories(data.data || []);
      } catch (error) {
        console.error("Hata oluştu:", error);
      } finally {
        setLoadingCategories(false); 
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchParameters = async () => {
      if (selectedCategory) {
        setLoadingParameters(true);
        try {
          const response = await fetch(`http://restartbaku-001-site3.htempurl.com/api/Category/get-parameters?LanguageCode=1&CategoryId=${selectedCategory}&RequestFrontType=add`);
          const data = await response.json();
          setParameters(data.data || []);
        } catch (error) {
          console.error("Hata oluştu:", error);
        } finally {
          setLoadingParameters(false);
        }
      }
    };

    fetchParameters();
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const renderParameterInput = (parameter) => {
    const commonClass = style.addBox_left_box_top_card_item;
  
    switch (parameter.parameterTypeId) {
      case 1:   
        const options = parameter.parameterMasks?.map((mask) => ({
          value: mask.parameterMaskId,
          label: mask.parameterMaskData,
        })) || [];
  
        return (
          <select
            key={parameter.parameterId}
            className={commonClass}
            placeholder={parameter.parameterKey || "--Seçin--"}
            defaultValue=""
          >
            <option value="" disabled>
              {parameter.parameterKey || "--Seçin--"}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
  
      case 2: // Number input
        return (
          <input
            key={parameter.parameterId}
            type="number"
            className={commonClass}
            placeholder={parameter.parameterKey || "Rəqəm daxil edin"}
            defaultValue={parameter.parameterValue || ""}
          />
        );
  
      case 3: // Text input
        return (
          <input
            key={parameter.parameterId}
            type="text"
            className={commonClass}
            placeholder={parameter.parameterKey || "Məlumat daxil edin"}
            defaultValue={parameter.parameterValue || ""}
          />
        );
  
      default:
        return null; // Digər hallarda heç bir element qaytarmırıq
    }
  };
  
  

  return (
    <div className={style.addBox_main_container}>
      <HeaderTop />
      <div className="container">
        <div className={style.addBox_container}>
          <p className={style.addBox_title}>Yeni elan</p>
          <div className={style.addBox}>
            <div className={style.addBox_left}>
              <div className={style.addBox_left_box_top}>
                {/* Categories Dropdown */}
                <div className={style.addBox_left_box_top_card}>
                  Kateqoriya
                  <select
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      className={style.addBox_left_box_top_card_item}
                      disabled={loadingCategories}
                    >
                    <option value="">--Kateqoriya seçin--</option>
                    {loadingCategories ? (
                      <option disabled>Yüklənir...</option>
                    ) : (
                      categories.map((category) => (
                        <React.Fragment key={category.categoryId}>
                          <option value={category.categoryId} className={style.parentCategoryTitle} disabled>
                            {category.categoryTitle}
                          </option>
                          {category.childCategories?.map((child) => (
                            <option key={child.categoryId} value={child.categoryId}>
                              -- {child.categoryTitle}
                            </option>
                          ))}
                        </React.Fragment>
                      ))
                    )}
                  </select>
                </div>

                {/* City Dropdown
                <div className={style.addBox_left_box_top_card}>
                  Şəhər
                  <select
                    value={selectedCity}
                    onChange={handleCityChange}
                    className={style.addBox_left_box_top_card_item}
                  >
                    <option value="">--Şəhər seçin--</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                    ))}
                  </select>
                </div> */}

                <div className={style.addBox_left_box_top_card}>
                  Qiymət, AZN
                  <div className={style.addBox_left_box_top_card_item}>
                    <input required type="text" className={style.addBox_left_box_top_card_item_input} />
                  </div>
                </div>

                <div className={style.addBox_left_box_top_card}>
                  Məzmun
                  <textarea
                    className={style.addBox_left_box_top_card_item_textArea}
                    name="content"
                    id="content"
                  ></textarea>
                </div>

             

                {loadingParameters ? (
                  <div className={style.addBox_left_box_top_card}>Parametrlər yüklənir...</div>
                ) : (
                  parameters.length > 0 && parameters.map(parameter => (
                    <div className={style.addBox_left_box_top_card} key={parameter.parameterId}>
                      {parameter.parameterTitle}
                      {renderParameterInput(parameter)}
                    </div>
                  ))
                )}
              </div>
              <div className={style.addBox_left_box_top_card}>
                  <p>Şəkil əlavə et</p>
                  <div className={style.addBox_image_upload_container}>
                    {images.map((image, index) => (
                      <div key={index} className={style.addBox_image_preview}>
                        <img src={image} alt={`Preview ${index}`} className={style.addBox_image} />
                        <button className={style.addBox_image_remove} onClick={() => removeImage(index)}>×</button>
                      </div>
                    ))}
                    <label className={style.addBox_image_add}>
                      +
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className={style.addBox_image_input}
                      />
                    </label>
                  </div>
                </div>
              {/* Contact Info */}
              <div className={style.addBox_left_box_main}>
                <p className={style.addBox_left_box_main_title}>Əlaqə məlumatları</p>
                <div className={style.addBox_left_box_main_card}>
                  Adınız
                  <input type="text" className={style.addBox_left_box_top_card_item} required />
                </div>
                <div className={style.addBox_left_box_main_card}>
                  E-mail
                  <input type="email" className={style.addBox_left_box_top_card_item} required />
                </div>
                <div className={style.addBox_left_box_main_card}>
                  Mobil nömrə
                  <input type="tel" className={style.addBox_left_box_top_card_item} required />
                </div>
              </div>

              {/* Submit Button */}
              <div className={style.addBox_left_box_bottom}>
                <p>Elan yerləşdirərək, siz JetEvimiz-ın İstifadəçi razılaşması ilə razı olduğunuzu təsdiq edirsiniz.</p>
                <button className={style.addBox_left_box_bottom_btn}>Elanı əlavə et</button>
              </div>
            </div>

            {/* Rules */}
            <div className={style.addBox_right}>
              <p className={style.addBox_right_title}>JetEvimiz-ın sadə qaydaları</p>
              <p className={style.addBox_right_subTitle}>* Eyni elanı bir neçə dəfə təqdim etməyin.</p>
              <p className={style.addBox_right_subTitle}>* Təsvir və ya şəkillərdə telefon, email və ya sayt ünvanı göstərməyin.</p>
              <p className={style.addBox_right_subTitle}>* Ad yerində qiymət yazmayın - bunun üçün ayrıca yer var.</p>
              <p className={style.addBox_right_subTitle}>* Təqdim etməzdən əvvəl elanı yoxlayın.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FooterResponsive />
    </div>
  );
};

export default NewProductAdd;
