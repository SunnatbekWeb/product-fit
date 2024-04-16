import React from "react";
import Logo from "../../assets/images/Logo.svg";
import TelegramIcon from "../../assets/images/telegram-icon.svg";
import MailIcon from "../../assets/images/mail-icon.svg";
import PhoneIcon from "../../assets/images/phone-icon.svg";
import noteIcon from "../../assets/images/note-icon.png";

const Footer = () => {
  return (
    <footer className="py-20">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="">
          <img
            src={Logo.src}
            className="w-[335px] h-[55px]"
            alt="Header logo"
          />
        </a>
        <div className="flex flex-col gap-y-10">
          <a href="#" className="text-[#1E959B] font-bold text-base">
            Мобильные приложения
          </a>
          <a href="#" className="text-[#1E959B] font-bold text-base">
            Главная страница
          </a>
        </div>
        <div className="flex flex-col gap-y-7">
          <p className="text-[#1E959B] font-bold text-base">Связаться с нами</p>
          <a href="tel:+7 800 301-79-27" className="flex items-center">
            <img
              src={PhoneIcon.src}
              className="w-[46px] h-[36px]"
              alt="Phone icon"
            />
            <span className="text-xl font-bold text-[#1E959B]">
              +7 800 301-79-27
            </span>
          </a>
        </div>
        <div className="flex items-center gap-x-10">
          <a href="#">
            <img
              src={TelegramIcon.src}
              className="w-[60px] h-[60px]"
              alt="Telegram icon"
            />
          </a>
          <a href="#">
            <img
              src={MailIcon.src}
              className="w-[60px] h-[60px]"
              alt="Mail icon"
            />
          </a>
        </div>
        <div className="flex items-center gap-x-10">
          <img
            src={noteIcon.src}
            className="w-[60px] h-[60px]"
            alt="Telegram icon"
          />
          <p className="text-xs w-[250px]">
            Индивидуальный предприниматель Степанов Георгий Константинович
            Адрес: г. Обнинск, ул. Белкинская. 19, 136 ОГРНИП 318402700019269
            ИНН 402571298900 Банк МОСКОВСКИЙ ФИЛИАЛ АО КБ "МОДУЛЬБАНК" БИК
            044525092 К/c 30101810645250000092 Счет 40802810970010085488
          </p>
        </div>
      </div>
      <p className="text-[#3C3C3C80] text-base text-center py-10">
        Copyright © 2021 ProductFit
      </p>
    </footer>
  );
};

export default Footer;
