import React from "react";
import { FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookBoxLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className=" bg-[#1C1C1C] text-[#F5F5F6]">
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="flex flex-col gap-5">
            <img src="/logo.svg" alt="Logo" className="w-[138px] h-[40px]" />
            <ul className="flex flex-col gap-2 text-[12px] font-[400] mt-4">
              <li>OOO «Основа»</li>
              <li>ИНН: 7814791026</li>
              <li>ОГРН: 1217800076240</li>
              <li>Сервис DOMOSBOR</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[#8DB338] text-[16px] font-[600]">Типы строений</h3>
            <ul className="flex flex-col gap-2 text-[16px] font-[400]">
              <li>Дома</li>
              <li>Бани</li>
              <li>Гаражи</li>
              <li>Навесы</li>
              <li>Коммерческие объекты</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[#8DB338] text-[16px] font-[600]">Сервис</h3>
            <ul className="flex flex-col gap-2 text-[16px] font-[400]">
              <li>O сервисе</li>
              <li className="text-[#8DB338]">Галерея</li>
              <li>Блог</li>
              <li>Отзывы</li>
              <li>Услуги</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[#8DB338] text-[16px] font-[600]">Информация</h3>
            <ul className="flex flex-col gap-2 text-[16px] font-[400]">
              <li>Оплата</li>
              <li>Документы</li>
              <li>Контакты</li>
              <li>Сотрудничество</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[#8DB338] text-[16px] font-[600]">Партнеры сервиса</h3>
            <ul className="flex flex-col gap-2 text-[16px] font-[400]">
              <li>Архитекторы</li>
              <li>Дизайнеры</li>
              <li>Заводы</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-20">
          <FaTelegramPlane className="text-[25px] hover:text-[#8DB338] transition" />
          <IoLogoInstagram className="text-[25px] hover:text-[#8DB338] transition" />
          <FaYoutube className="text-[25px] hover:text-[#8DB338] transition" />
          <RiFacebookBoxLine className="text-[25px] hover:text-[#8DB338] transition" />
          <FaTwitter className="text-[25px] hover:text-[#8DB338] transition" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
