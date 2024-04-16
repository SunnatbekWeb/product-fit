import React from "react";
import Carousel from "../Ui/Carousel";
import CardImage from "../../assets/images/card-image.png";
import blockchainImage from "../../assets/images/blockchain.png";
import pythonImage from "../../assets/images/python.png";
import reactImage from "../../assets/images/react.png";
import chainIcon from "../../assets/images/chain.svg";
import startBgImage from "../../assets/images/start_bg-image.png";
import CardImage1 from "../../assets/images/cardImage1.png";
import CardImage2 from "../../assets/images/cardImage2.png";
import CardImage3 from "../../assets/images/cardImage3.png";
import CardImage4 from "../../assets/images/cardImage4.png";
import CardImage5 from "../../assets/images/cardImage5.png";
import CardImage6 from "../../assets/images/cardImage6.png";
import feedbackImage from "../../assets/images/feedback-image.png";

const MainSection = () => {
  return (
    <main>
      <section id="intro">
        <div className="container mx-auto">
          <Carousel />
        </div>
      </section>
      <section id="openGift" className="py-[120px]">
        <div className="container mx-auto flex gap-x-[70px]">
          <div className="shadow-lg hover:shadow-[#1E959B] duration-300 px-10 pb-5 w-fit pt-[276px] relative rounded-md">
            <img
              src={CardImage.src}
              className="w-[350px] absolute top-[-50px]"
              alt="Card image"
            />
            <div className="flex justify-between items-center py-4 w-[350px]">
              <div className="">
                <span className="text-[#3C3C3C] text-sm">Длительность</span>
                <p className="text-lg text-[#1E959B] font-bold">10 недель</p>
              </div>
              <div className="w-[1px] h-[60px] bg-[#1E959B]"></div>
              <div>
                <span className="text-[#3C3C3C] text-sm">
                  Колличество спринтов
                </span>
                <p className="text-lg text-[#1E959B] font-bold">20 Спринтов</p>
              </div>
            </div>
            <div className="flex items-center gap-x-5">
              <img
                src={blockchainImage.src}
                className="w-[60px]"
                alt="Blockchain image"
              />
              <img
                src={pythonImage.src}
                className="w-[60px]"
                alt="Python image"
              />
              <img
                src={reactImage.src}
                className="w-[60px]"
                alt="React image"
              />
            </div>
            <a
              href="#"
              className="flex items-center w-full justify-center gap-x-5"
            >
              <img src={chainIcon.src} className="w-6" alt="Chain icon" />
              <span className="text-xl text-[#1E959B] font-bold my-5">
                opengift.io
              </span>
            </a>
            <button className="w-full py-[24px] bg-[#F05670] text-white text-md font-bold uppercase rounded">
              УЗНАТЬ СТОИМОСТЬ ПРОЕКТА
            </button>
          </div>
          <div>
            <h2 className="text-5xl text-[#1E959B] font-bold leading-[64px] mb-12">
              OpenGift – это система монетизации OpenSource-проектов на основе
              блокчейна hyperledger fabric.
            </h2>
            <article className="text-lg text-[#3C3C3C]">
              К разработке платформы было привлечено более 5000 разработчиков.
              Ее интегрировали с сетью блокчейнов. Альфа-версия была запущена в
              январе 2018 года. OpenGIft был создан для решения проблем,
              унаследованных от разработки программного обеспечения. Платформа
              позволяет компаниям разделять расходы на программное обеспечение,
              а управление проектами является основной функцией, помогающей в
              сотрудничестве. <br /> <br /> Для монетизации используются
              смарт-контракты, чтобы создать пассивный, периодический потенциал
              дохода. Уникальность проекта в видении на разработку с открытым
              исходным кодом.
            </article>
          </div>
        </div>
      </section>
      <section id="start_projects" className="py-[120px] bg-[#1E959B] relative">
        <div className="container mx-auto">
          <img
            src={startBgImage.src}
            className="w-[800px] absolute top-[-80px] right-0 z-[2]"
            alt="Start section image"
          />
          <h3 className="font-bold text-[48px] text-white">Начнем проект?</h3>
          <p className="text-xl text-white mb-10">
            Усилим Вашу комунду и запустим проект быстрее!
          </p>
          <button className="w-[350px] py-[24px] bg-white text-[#1E959B] text-md font-bold uppercase rounded">
            УЗНАТЬ СТОИМОСТЬ ПРОЕКТА
          </button>
        </div>
      </section>
      <section className="py-[120px]">
        <div className="container mx-auto">
          <h2 className="text-[48px] text-[#1E959B] font-bold text-center uppercase">
            ПРОЕКТЫ командЫ PRODUCTFIT
          </h2>

          <div className="grid grid-cols-3 justify-between row-gap-10">
            <div className="px-5 py-3">
              <div className="w-full h-[300px] flex justify-center items-center">
                <img
                  src={CardImage1.src}
                  className="w-[300px] mx-auto"
                  alt="Card image"
                />
              </div>
              <h5 className="text-xl text-[#1E959B] font-bold text-center my-3">
                Cabify
              </h5>
              <p className="text-base text-[#3C3C3C] text-center">
                Кроссплатформенное приложение под Android и iOS разработано на
                React Native(Python)
              </p>
            </div>
            <div className="px-5 py-3">
              <div className="w-full h-[300px] flex justify-center items-center">
                <img
                  src={CardImage2.src}
                  className="w-[300px] mx-auto"
                  alt="Card image"
                />
              </div>
              <h5 className="text-xl text-[#1E959B] font-bold text-center my-3">
                Ural Airlines
              </h5>
              <p className="text-base text-[#3C3C3C] text-center">
                Все сервисы для пассажиров «Уральских авиалиний» в одном
                приложении на Swift и Java
              </p>
            </div>
            <div className="px-5 py-3">
              <div className="w-full h-[300px] flex justify-center items-center">
                <img
                  src={CardImage3.src}
                  className="w-[300px] mx-auto"
                  alt="Card image"
                />
              </div>
              <h5 className="text-xl text-[#1E959B] font-bold text-center my-3">
                OpenGift
              </h5>
              <p className="text-base text-[#3C3C3C] text-center">
                Система монетизации OpenSource-проектов на основе блокчейна
                hyperledger fabric
              </p>
            </div>
            <div className="px-5 py-3">
              <div className="w-full h-[300px] flex justify-center items-center">
                <img
                  src={CardImage4.src}
                  className="w-[300px] mx-auto"
                  alt="Card image"
                />
              </div>
              <h5 className="text-xl text-[#1E959B] font-bold text-center my-3">
                PlanDi
              </h5>
              <p className="text-base text-[#3C3C3C] text-center">
                Сервис поиска актуальной работы проектировщикам и компаниям
              </p>
            </div>
            <div className="px-5 py-3">
              <div className="w-full h-[300px] flex justify-center items-center">
                <img
                  src={CardImage5.src}
                  className="w-[300px] mx-auto"
                  alt="Card image"
                />
              </div>
              <h5 className="text-xl text-[#1E959B] font-bold text-center my-3">
                Коалиция
              </h5>
              <p className="text-base text-[#3C3C3C] text-center">
                Проект для ведущего в России Центра образования, который
                осуществляет подготовку школьников к сдаче ЕГЭ.
              </p>
            </div>
            <div className="px-5 py-3">
              <div className="w-full h-[300px] flex justify-center items-center">
                <img
                  src={CardImage6.src}
                  className="w-[300px] mx-auto"
                  alt="Card image"
                />
              </div>
              <h5 className="text-xl text-[#1E959B] font-bold text-center my-3">
                Rubetek
              </h5>
              <p className="text-base text-[#3C3C3C] text-center">
                Управление домом IoT и микрофреймворк на языке Python совместно
                с Java и Swift
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center mt-20">
            <button className="w-[350px] py-[24px] border border-[#1E959B] text-[#1E959B] text-md font-bold uppercase rounded">
              Все проекты
            </button>
          </div>
        </div>
      </section>
      <section className="pt-10 pb-20">
        <div className="container mx-auto flex items-center justify-evenly">
          <img
            src={feedbackImage.src}
            className="w-[700px]"
            alt="Feedback section image"
          />
          <div className="max-w-[540px]">
            <h2 className="text-[36px] text-[#1E959B] font-bold">
              Начнем работу над вашим ІТ-проектом через 24 часа
            </h2>
            <p className="text-md text-[#3C3C3C] mt-5 mb-12">
              Проектируем, запускаем и сопровождаем IT-проеты любой сложности
            </p>
            <button className="w-[350px] py-[24px] bg-[#F05670] text-white text-md font-bold uppercase rounded">
              ОСТАВИТЬ ЗАЯВКУ
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
