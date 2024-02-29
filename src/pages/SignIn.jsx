import { useState } from "react";
import { Exit, HideIcon, ShowIcon } from "../assets/icons";
import { IconButton } from "@mui/material";

export const SignIn = () => {
  const [activeTab, setActiveTab] = useState("registration");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValidLogin, setIsFormValidLogin] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setPhone("");
    setEmail("");
    setPassword("");
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    checkFormValidity();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    checkFormValidity();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    checkFormValidity();
    checkFormValidityLogin();
  };

  const checkFormValidity = () => {
    if (phone.trim() !== "" && email.trim() !== "" && password.trim() !== "") {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };
  const checkFormValidityLogin = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      setIsFormValidLogin(true);
    } else {
      setIsFormValidLogin(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCreateAccount = () => {};

  const handleLogin = () => {};

  return (
    <>
      <h2 className="text-xl font-bold  mt-[2rem] text-center text-[2.2rem]">
        ReWea
      </h2>
      <div className="bg-gray-100  flex justify-center ">
        <div className="bg-[#f3f3f3] p-8 rounded-xl shadow-lg mt-[2rem]  w-[31rem] h-[37rem]">
          <div className="mb-[2.5rem] flex  justify-between">
            <ul className="flex gap-8">
              <li
                className={`text-gray-800 cursor-pointer relative ${
                  activeTab === "registration" ? "active-tab" : ""
                }`}
                onClick={() => handleTabClick("registration")}
              >
                Регистрация
              </li>
              <li
                className={`cursor-pointer relative ${
                  activeTab === "login" ? "active-tab" : ""
                }`}
                onClick={() => handleTabClick("login")}
              >
                Вход
              </li>
            </ul>
            <Exit className="w-[1.4rem] h-[1.4rem] cursor-pointer" />
          </div>
          <form>
            {activeTab === "registration" && (
              <>
                <div class="relative ">
                  <input
                    type="number"
                    id="phone"
                    class="border-[1px] border-[grey] w-[25rem] h-[3.5rem] rounded-lg px-2.5 pb-1.5 pt-4  text-sm  mb-[1.5rem]  "
                    placeholder="+996777777777"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                  <label
                    for="phone"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Phone
                  </label>
                </div>
                <div class="relative ">
                  <input
                    type="email"
                    id="email"
                    class="border-[1px] border-[grey] w-[25rem] h-[3.5rem] rounded-lg px-2.5 pb-1.5 pt-4  text-sm  mb-[1.5rem]  "
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <label
                    for="email"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Email
                  </label>
                </div>
                <div class="relative ">
                  <input
                    type="password"
                    id="password"
                    class="border-[1px] border-[grey] w-[25rem] mb-[1.5rem] h-[3.5rem] rounded-lg px-2.5 pb-1.5 pt-4  text-sm    "
                    placeholder="*******"
                    value={password}
                    onChange={handlePasswordChange}
                    InputProps={{
                      endAdornment: (
                        <IconButton onClick={toggleShowPassword}>
                          {showPassword ? <ShowIcon /> : <HideIcon />}
                        </IconButton>
                      ),
                    }}
                  />
                  <label
                    for="password"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Password
                  </label>
                </div>
                <div>
                  <button
                    className={`w-[25.875rem] h-[3.5rem] rounded-[0.75rem] font-bold mb-[1rem] ${
                      isFormValid
                        ? "bg-[#000000] text-white cursor-pointer"
                        : "bg-[#cdcdcd] text-gray-500 cursor-not-allowed"
                    }`}
                    onClick={isFormValid ? handleCreateAccount : null}
                  >
                    Создать аккаунт
                  </button>
                </div>
                <div className="w-full flex gap-4">
                  <input type="checkbox" />
                  <p>Подписаться на рассылку</p>
                </div>
              </>
            )}

            {activeTab === "login" && (
              <>
                <div class="relative ">
                  <input
                    type="email"
                    id="loginEmail"
                    class="border-[1px] border-[grey] w-[25rem] h-[3.5rem] rounded-lg px-2.5 pb-1.5 pt-4  text-sm  mb-[1.5rem]  "
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <label
                    for="loginEmail"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Email
                  </label>
                </div>
                <div class="relative ">
                  <input
                    type="password"
                    id="loginPassword"
                    class="border-[1px] border-[grey] w-[25rem] mb-[1.5rem] h-[3.5rem] rounded-lg px-2.5 pb-1.5 pt-4  text-sm    "
                    placeholder="*******"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <label
                    for="loginPassword"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Password
                  </label>
                </div>
                <div>
                  <button
                    className={`w-[25.875rem] h-[3.5rem] rounded-[0.75rem] font-bold mb-[1rem] ${
                      isFormValidLogin
                        ? "bg-[#000000] text-white cursor-pointer"
                        : "bg-[#cdcdcd] text-gray-500 cursor-not-allowed"
                    }`}
                    onClick={isFormValidLogin ? handleLogin : null}
                  >
                    Войти
                  </button>
                </div>
              </>
            )}

            <p className="text-center text-[0.8rem] text-[grey] mt-[3rem]">
              By continuing I agree with the{" "}
              <a href="#" className="text-[#2a56b6] ">
                Terms & Conditions,
              </a>
            </p>
            <p className="text-[0.8rem] text-[#2a56b6] text-center">
              <a href="#">Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

function PanelTopCloseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <path d="m9 16 3-3 3 3" />
    </svg>
  );
}
