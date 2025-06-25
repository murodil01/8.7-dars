import { AlignLeft } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-[600px] bg-no-repeat bg-right bg-cover relative"
      style={{ backgroundImage: 'url("/hero.png")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto pt-[100px] px-4 text-white">
        <h1 className="font-extrabold text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-tight max-w-[90%] sm:max-w-[600px]">
          Построй свою мечту
        </h1>
        <p className="font-medium mt-4 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] max-w-[90%] sm:max-w-[500px]">
          Наш сервис каждый день помогает купить минимум один домокомплект!
        </p>
      </div>

      <div className="relative z-10 mt-[133px] max-w-[1350px] mx-auto pt-[30px] pb-[101px] px-[20px] sm:px-[30px] md:px-[60px] bg-white h-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full md:w-auto">
            <button className="bg-[#8DB338] text-white w-full md:w-[190px] h-[50px] font-[700] text-[16px]">
              Построить
            </button>
            <button className="bg-[#F5F5F6] text-[#49423D] w-full md:w-[190px] h-[50px] font-[500] text-[16px]">
              Купить
            </button>
            <button className="bg-[#F5F5F6] text-[#49423D] w-full md:w-[190px] h-[50px] font-[500] text-[16px]">
              Арендовать
            </button>
          </div>

          <div className="flex items-center gap-x-[10px] mt-4 md:mt-0">
            <AlignLeft className="text-[#8DB338]" />
            <p className="text-[#49423D] text-[14px] font-[500]">
              Расширенный поиск
            </p>
          </div>
        </div>

        <div className="mt-[40px] flex flex-col justify-between lg:flex-row flex-wrap lg:flex-nowrap gap-6">
          <div className="flex flex-col gap-y-3 w-full md:w-[190px]">
            <p className="text-[#49423D] text-[14px] font-[600]">
              Тип строения
            </p>
            <select className="bg-[#F5F5F6] w-full h-[40px] px-4 border-none text-[14px] text-[#49423D] focus:outline-none focus:ring-0">
              <option>Дом</option>
            </select>
          </div>

          <div className="flex flex-col gap-y-3 w-full md:w-[190px]">
            <p className="text-[#49423D] text-[14px] font-[600]">Габариты, м</p>
            <select className="bg-[#F5F5F6] w-full h-[40px] px-4 border-none text-[14px] text-[#49423D] focus:outline-none focus:ring-0">
              <option>10x10</option>
            </select>
          </div>

          <div className="flex flex-col gap-y-3 w-full md:w-[190px]">
            <p className="text-[#49423D] text-[14px] font-[600]">
              Общая площадь, м²
            </p>
            <select className="bg-[#F5F5F6] w-full h-[40px] px-4 border-none text-[14px] text-[#49423D] focus:outline-none focus:ring-0">
              <option>от 100 - до 1000</option>
            </select>
          </div>

          <div className="flex flex-col gap-y-3 w-full md:w-auto">
            <p className="text-[#49423D] text-[14px] font-[600]">
              Стоимость, ₽
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              <select className="bg-[#F5F5F6] w-full md:w-[190px] h-[40px] px-4 border-none text-[14px] text-[#49423D] focus:outline-none focus:ring-0">
                <option>от 100 000 - до 1 000 000</option>
              </select>
              <button className="bg-[#8DB338] text-white w-full md:w-[190px] h-[40px] font-[700] text-[14px]">
                Построить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
