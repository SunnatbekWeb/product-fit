import React from "react";
import Logo from "../../assets/images/Logo.svg";
import TelegramIcon from "../../assets/images/telegram-icon.svg";
import MailIcon from "../../assets/images/mail-icon.svg";
import PhoneIcon from "../../assets/images/phone-icon.svg";

const Header = () => {
  return (
    <header className="py-[36px]">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="">
          <img
            src={Logo.src}
            className="w-[335px] h-[55px]"
            alt="Header logo"
          />
        </a>
        <div className="flex items-center gap-x-16">
          <div className="flex items-center gap-x-10">
            <a href="#">
              <img
                src={TelegramIcon.src}
                className="w-[36px] h-[36px]"
                alt="Telegram icon"
              />
            </a>
            <a href="#">
              <img
                src={MailIcon.src}
                className="w-[36px] h-[36px]"
                alt="Mail icon"
              />
            </a>
            <a href="tel:+7 800 301-79-27" className="flex items-center">
              <img
                src={PhoneIcon.src}
                className="w-[46px] h-[36px]"
                alt="Phone icon"
              />
              <span className="text-xl font-bold text-[#1E959B]">+7 800 301-79-27</span>
            </a>
          </div>
          <button className="w-[250px] py-[24px] bg-[#F05670] text-white text-lg font-bold uppercase rounded">
            Начать проект
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
