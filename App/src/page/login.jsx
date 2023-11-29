import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <div className="w-full h-screen relative">
      <div className="bg-[#EEEEEE] w-[552px] h-[457px] rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-[#393E46]">
        <img src="../public/login_page/Senimall_logo.svg" className="mx-auto mt-10" alt="" />
        <form action="" className="mt-5 w-3/4 mx-auto">
          <div className="flex">
            <label htmlFor="email" className=" flex mb-3 items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <p className="text-2xl font-medium text-[#393E46]">E-mail</p>
            </label>
          </div>
          <input type="email" id="email" className="block text-lg w-full py-2 px-3 h-10 border-2 outline-none border-[#393E46] bg-transparent rounded-xl" />
          <div className="flex mt-5">
            <label htmlFor="email" className=" flex mb-3 items-center gap-3">
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
          <div className="border-2 border-[#393E46] rounded-xl flex items-center">
            <input type="text" id="email" className="block text-lg w-5/6 py-2 px-3 h-10 outline-none bg-transparent rounded-xl" />
            <svg className="ml-3" width="30" height="20" viewBox="0 0 30 20" fill="red" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.9137 9.595C29.87 9.49625 28.8112 7.1475 26.4575 4.79375C23.3212 1.6575 19.36 0 15 0C10.64 0 6.67874 1.6575 3.54249 4.79375C1.18874 7.1475 0.124988 9.5 0.086238 9.595C0.0293795 9.72289 0 9.86129 0 10.0012C0 10.1412 0.0293795 10.2796 0.086238 10.4075C0.129988 10.5062 1.18874 12.8538 3.54249 15.2075C6.67874 18.3425 10.64 20 15 20C19.36 20 23.3212 18.3425 26.4575 15.2075C28.8112 12.8538 29.87 10.5062 29.9137 10.4075C29.9706 10.2796 30 10.1412 30 10.0012C30 9.86129 29.9706 9.72289 29.9137 9.595ZM15 18C11.1525 18 7.79124 16.6012 5.00874 13.8438C3.86704 12.7084 2.89572 11.4137 2.12499 10C2.89551 8.58617 3.86686 7.29147 5.00874 6.15625C7.79124 3.39875 11.1525 2 15 2C18.8475 2 22.2087 3.39875 24.9912 6.15625C26.1352 7.2912 27.1086 8.5859 27.8812 10C26.98 11.6825 23.0537 18 15 18ZM15 4C13.8133 4 12.6533 4.35189 11.6666 5.01118C10.6799 5.67047 9.91084 6.60754 9.45671 7.7039C9.00259 8.80026 8.88377 10.0067 9.11528 11.1705C9.34679 12.3344 9.91823 13.4035 10.7573 14.2426C11.5965 15.0818 12.6656 15.6532 13.8294 15.8847C14.9933 16.1162 16.1997 15.9974 17.2961 15.5433C18.3924 15.0892 19.3295 14.3201 19.9888 13.3334C20.6481 12.3467 21 11.1867 21 10C20.9983 8.40921 20.3657 6.88405 19.2408 5.75919C18.1159 4.63433 16.5908 4.00165 15 4ZM15 14C14.2089 14 13.4355 13.7654 12.7777 13.3259C12.1199 12.8864 11.6072 12.2616 11.3045 11.5307C11.0017 10.7998 10.9225 9.99556 11.0768 9.21964C11.2312 8.44372 11.6122 7.73098 12.1716 7.17157C12.731 6.61216 13.4437 6.2312 14.2196 6.07686C14.9956 5.92252 15.7998 6.00173 16.5307 6.30448C17.2616 6.60723 17.8863 7.11992 18.3259 7.77772C18.7654 8.43552 19 9.20887 19 10C19 11.0609 18.5786 12.0783 17.8284 12.8284C17.0783 13.5786 16.0609 14 15 14Z"
                fill="black"
              />
            </svg>
          </div>
          <button className="bg-[#183D3D] hover:bg-[#225555] h-14 mt-6 mb-10 w-full rounded-2xl flex justify-center items-center gap-3">
            <img src="../public/login_page/VectorLogout.svg" alt="" className="" />
            <span className="text-white text-2xl font-semibold">Login</span>
          </button>
        </form>
      </div>
    </div>
  );
}
