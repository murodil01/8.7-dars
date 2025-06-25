import React from "react";

const Service = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-[#49423D] mb-12 text-3xl sm:text-4xl font-bold">
          O сервисе
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[70px]">
          <div className="text-[#49423D] flex flex-col gap-6 py-2 max-w-xl">
            <p className="text-[16px] font-medium leading-7">
              DOMOSBOR — уникальный сервис, который объединяет лучших
              производителей домокомплектов (частные дома, дачи, бани, гаражи,
              навесы, коммерческие постройки), архитекторов, дизайнеров,
              девелоперов, строителей и застройщиков. На нашем официальном сайте
              можно заказать услуги российских и иностранных компаний. Здесь
              всё понятно на интуитивном уровне, благодаря чему несложно
              подобрать для себя подходящее решение и заказать интересующие
              вас услуги.
            </p>

            <p className="text-[16px] font-medium leading-7">
              Сегодня DOMOSBOR — это 30 производителей, 8 технологий деревянного
              домостроения, 1253 проектных предложений в разных ценовых
              сегментах от российских и зарубежных производителей.
              Мы не ограничиваемся одной технологией строительства, а смотрим
              на все существующие методы строительства деревянных домов. Чему
              отдать предпочтение? Решать только вам!
            </p>

            <p className="text-[16px] font-medium leading-7">
              Выбирайте необходимые вам параметры (географическое положение,
              окружающий ландшафт) и сравнивайте приглянувшиеся проекты. С нами
              дом мечты — реальность! Не откладывайте с реализацией своих
              задумок, обращайтесь прямо сейчас!
            </p>

            <button className="bg-[#8DB338] w-[200px] sm:w-[250px] md:w-[300px] h-[40px] font-bold text-[14px] text-white mt-10 rounded hover:bg-[#7aa42e] transition">
              Подробнее
            </button>
          </div>

          <img
            src="/service.png"
            alt="Image"
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[630px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
