import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const passwordType = useRef();
  const MySwal = withReactContent(Swal);

  const token = localStorage.getItem("token"); // Ubah sesuai dengan cara penyimpanan token Anda
  useEffect(() => {
    if (token === "owner") {
      navigate("/owner");
    } else if (token === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5173/admin?username=${userName}&&password=${password}`);
      const data = response.data[0];

      console.log(data);

      if (data) {
        if (data.role === "owner") {
          console.log("Logging in as owner...");
          navigate("/owner", { state: data.name });
          localStorage.setItem("token", data.role);
        } else {
          console.log("Logging in as admin...");
          navigate("/admin", { state: data.name });
          localStorage.setItem("token", data.role);
        }
      } else {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username dan Password tidak cocok!",
        });
      }
    } catch (error) {
      console.log("Login Error:", error);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    !showPassword ? (passwordType.current.type = "password") : (passwordType.current.type = "text");
  };

  return (
    <div className="w-full h-screen relative">
      <div className="bg-[#EEEEEE] w-[552px] h-[457px] rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-[#393E46]">
        <img src="../public/login_page/Senimall_logo.svg" className="mx-auto mt-10" alt="" />

        <form action="" className="mt-5 w-3/4 mx-auto" onSubmit={handleLogin}>
          {/* Input Email */}
          <div className="flex">
            <label htmlFor="email" className=" flex mb-3 items-center gap-3">
              <img src="/login_page/usernameicon.svg" alt="icon artis" className="w-6" />
              <p className="text-2xl font-medium text-[#393E46]">Username</p>
            </label>
          </div>

          <input
            type="text"
            id="text"
            required
            onChange={(e) => setUserName(e.target.value)}
            className="block text-lg w-full py-2 px-3 h-10 border-2 outline-none border-[#393E46]  focus:border-[#393E46] focus:ring-0 bg-transparent rounded-xl"
          />

          {/* Input Password */}
          <div className="flex mt-5">
            <label htmlFor="password" className=" flex mb-3 items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <p className="text-2xl font-medium text-[#393E46]">Password</p>
            </label>
          </div>
          <div className="border-2 border-[#393E46] rounded-xl flex items-center h-10 ">
            <input
              ref={passwordType}
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="block text-lg w-11/12 py-2 px-3 border-none focus:border-none focus:ring-0 outline-transparent bg-transparent rounded-xl"
            />

            {showPassword ? (
              <svg onClick={handleShowPassword} width="23" height="23" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.9137 9.595C29.87 9.49625 28.8112 7.1475 26.4575 4.79375C23.3212 1.6575 19.36 0 15 0C10.64 0 6.67874 1.6575 3.54249 4.79375C1.18874 7.1475 0.124988 9.5 0.086238 9.595C0.0293795 9.72289 0 9.86129 0 10.0012C0 10.1412 0.0293795 10.2796 0.086238 10.4075C0.129988 10.5062 1.18874 12.8538 3.54249 15.2075C6.67874 18.3425 10.64 20 15 20C19.36 20 23.3212 18.3425 26.4575 15.2075C28.8112 12.8538 29.87 10.5062 29.9137 10.4075C29.9706 10.2796 30 10.1412 30 10.0012C30 9.86129 29.9706 9.72289 29.9137 9.595ZM15 18C11.1525 18 7.79124 16.6012 5.00874 13.8438C3.86704 12.7084 2.89572 11.4137 2.12499 10C2.89551 8.58617 3.86686 7.29147 5.00874 6.15625C7.79124 3.39875 11.1525 2 15 2C18.8475 2 22.2087 3.39875 24.9912 6.15625C26.1352 7.2912 27.1086 8.5859 27.8812 10C26.98 11.6825 23.0537 18 15 18ZM15 4C13.8133 4 12.6533 4.35189 11.6666 5.01118C10.6799 5.67047 9.91084 6.60754 9.45671 7.7039C9.00259 8.80026 8.88377 10.0067 9.11528 11.1705C9.34679 12.3344 9.91823 13.4035 10.7573 14.2426C11.5965 15.0818 12.6656 15.6532 13.8294 15.8847C14.9933 16.1162 16.1997 15.9974 17.2961 15.5433C18.3924 15.0892 19.3295 14.3201 19.9888 13.3334C20.6481 12.3467 21 11.1867 21 10C20.9983 8.40921 20.3657 6.88405 19.2408 5.75919C18.1159 4.63433 16.5908 4.00165 15 4ZM15 14C14.2089 14 13.4355 13.7654 12.7777 13.3259C12.1199 12.8864 11.6072 12.2616 11.3045 11.5307C11.0017 10.7998 10.9225 9.99556 11.0768 9.21964C11.2312 8.44372 11.6122 7.73098 12.1716 7.17157C12.731 6.61216 13.4437 6.2312 14.2196 6.07686C14.9956 5.92252 15.7998 6.00173 16.5307 6.30448C17.2616 6.60723 17.8863 7.11992 18.3259 7.77772C18.7654 8.43552 19 9.20887 19 10C19 11.0609 18.5786 12.0783 17.8284 12.8284C17.0783 13.5786 16.0609 14 15 14Z"
                  fill="black"
                />
              </svg>
            ) : (
              <svg onClick={handleShowPassword} width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L22 22" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
          <button className="bg-[#183D3D] hover:bg-[#225555] h-12 mt-6 mb-10 w-full rounded-2xl flex justify-center items-center gap-3">
            <img src="../public/login_page/VectorLogout.svg" alt="" className="" />
            <span className="text-white text-2xl font-semibold">Login</span>
          </button>
        </form>
      </div>
    </div>
  );
}
