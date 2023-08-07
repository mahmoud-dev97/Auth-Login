import { useContext, useEffect } from "react";
import profileImg from "../assets/man.png";
import { AppContext } from "../context/AppContext";
import baseUrl from "../api/baseUrl";
import Cookies from "js-cookie";

function Home() {
  const { isAuth, logout } = useContext(AppContext);
  const userData = JSON.parse(user);
  useEffect(() => {
    baseUrl
      .post("/auth/google/profile", {
        headers: {
          authorization: `Bearer ${isAuth}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      window.location.href = `http://localhost:3002/${Cookies.get("Token")}}`;

  }, []);

  return (
    <>
      {/* {isAuth && (
        <div className="home flex-style d-flex">
          <div>
            <h1>Welcome Back</h1>
            <img src={profileImg} alt="profileImage" />
            <h2>Mahmoud</h2>
            <h3>example@example.com</h3>
            <button onClick={logout} className="btn logout">
              logout
            </button>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Home;
