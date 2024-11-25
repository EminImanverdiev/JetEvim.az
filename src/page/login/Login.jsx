import React, { useState } from "react";
import userIcon from "../../img/user.svg";
import passwordIcon from "../../img/password.svg";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import backImg from "../../img/loginImg.png";


const Login = () => {
  const errorMessages = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message || "Kullanıcı bulunamadı, lütfen kayıt olun.",
      footer: '<a href="/signup">Kayıt olmak için buraya tıklayın!</a>',
    });
  };

  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (data.userName && data.password) {

      try {
        const response = await axios.post(
          "http://restartbaku-001-site3.htempurl.com/api/auth",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );


        if (response.status === 200 && response.data.isSuccessful) {
          const userName = response.data.data.userModel?.userName;
          if (userName) {
            localStorage.setItem("userName", userName); // Kullanıcı adını kaydet
          } else {
            console.error("Kullanıcı adı bulunamadı.");
          }

          localStorage.setItem("authToken", response.data.token); // Token'i kaydet
          navigate("/"); // Ana sayfaya yönlendir
        } else {
          errorMessages("Kullanıcı bulunamadı.");
        }
      } catch (error) {
        console.error("Login error", error);
        errorMessages();
      }
    } else {
      errorMessages("Lütfen kullanıcı adı ve şifreyi doldurun.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form
          className={styles.formLogin}
          onSubmit={submitHandler}
          autoComplete="off"
        >
          <h2>Giriş Yap</h2>
          <div>
            <div className={styles.Input}>
              <input
                type="text"
                name="userName"
                value={data.userName}
                placeholder="Istifadeci Email"
                onChange={changeHandler}
              />
              <img src={userIcon} alt="Kullanıcı İkonu" />
            </div>
          </div>
          <div>
            <div className={styles.Input}>
              <input
                type="password"
                name="password"
                value={data.password}
                placeholder="Şifre"
                onChange={changeHandler}
              />
              <img src={passwordIcon} alt="Şifre İkonu" />
            </div>
          </div>
          <button type="submit" className={styles.loginBtn}>
            Giriş Yap
          </button>
          <div>
            <span>
              Hesabınız yok mu?{" "}
              <Link to="/signup">Hesap oluşturun</Link>
            </span>
          </div>
        </form>
      </div>
      <img src={backImg} alt="Background" className={styles.LoginSignUpBackImg} />
    </div>
  );
};

export default Login;
