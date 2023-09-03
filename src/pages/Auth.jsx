import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebaseConfig";
signInWithPopup;

const Auth = () => {
  const handleClick = () => {
    /*
     * kullanicinin saglayici(google,github vs) hesabini secmesi icin bir pencere açar,
     * hesabi sectikten sonra daha once hesabi varsa girs yapar
     * yoksa yeni bir hesap olusturur ve ona giris yapar
     * promise dondurur kullanici girerse kullanici bilgileri dondurur
     * hata olursa da hata yakalanmali uyari vs verebiliriz o bize kalmis
     */
    signInWithPopup(auth, provider)
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err));
  };

  return (
    <div className="auth">
      <h1> Chat Odasi </h1>
      <p>Devam Etmek İçin Giriş Yapın</p>
      <button onClick={handleClick}>
        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" />
        <span> Google ile gir</span>
      </button>
    </div>
  );
};

export default Auth;
