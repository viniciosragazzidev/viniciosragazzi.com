import React, { useState, useContext, useEffect } from "react";
import rocket from "../../images/rocket.svg";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript, DiNodejs } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Contact from "../../components/modalContact/Contact";
import { DadosContext } from "../../context/ContextApp";
export default function Home() {
  const { modalOpen, setModalOpen, open, setOpen } = useContext(DadosContext);



  return (
    <div className="w-full min-h-screen flex flex-col gap-20 md:gap-28">
      <Contact />
      <section className="top w-full h-full flex-2 flex  max-md:flex-col  mt-4 pt-4 md:mt-24 md:px-16 px-6 overflow-hidden">
        <div className="primary lg:max-w-[55%] flex flex-col gap-2">
          <span className="text-size2 dark:text-purple-500 text-purple-600 py-1 px-2 font-semibold  max-w-[180px] rounded-full">
            Front-End Developer
          </span>
          <h1 className="title-size  dark:text-primary-dark text-primary-light font-semibold">
            Desenvolvendo experiências incriveis na web
          </h1>
          <p className="text-size dark:text-secondary-dark text-secondary-light font-semibold">
            Build, test, and send transactional emails at scale. Resend provides
            the best developer experience helping you reach users instead of
            spam folders.
          </p>

          <p onClick={()=>{setModalOpen(true)}} className="text-size2 dark:text-secondary-dark text-secondary-light font-semibold mt-6 cursor-pointer hover:opacity-95 transition-all">
            Pressione
            <span  className="p-1 px-2 max-md:px-1 mx-1 dark:text-secondary-light dark:bg-button-secondary-dark text-primary-dark bg-button-primary rounded-md">
              A
            </span>
            ou clique para entrar em contato
          </p>
        </div>
        <div className="secondary w-full flex-1 flex justify-center items-center md:max-h-[20rem] align-middle dark:align-top">
          <img
            src={
              "https://cdn.discordapp.com/attachments/771766413563002920/1076226282070749244/logo-removebg-preview_1.png"
            }
            alt=""
            className="max-w-[240px] max-sm:w-[65%] max-sm:mt-4"
          />
        </div>
      </section>
      <section
        id="skills"
        className="w-full  md:px-28 px-6  pt-14 flex justify-center"
      >
        <div
          className="cards w-full  grid  lg:grid-cols-3 lg:grid-rows-2 lg:gap-8
         md:grid-cols-2 md:grid-rows-3 md:gap-10 sm:grid-cols-2 sm:grid-rows-3 sm:gap-10 
         grid-cols-1 grid-rows-6 gap-8 "
        >
          <div className="card w-full  max-w-lg flex flex-col gap-2">
            <div className="header flex dark:text-primary-dark font-semibold ">
              <span className="flex items-center gap-2 text-lg max-md:text-base">
                <AiFillHtml5 className="text-button-primary dark:text-purple-200 text-lg boxShadow" />
                HTML
              </span>
            </div>
            <div className="text">
              <p className=" dark:text-secondary-dark text-secondary-light font-semibold text-sm max-sm:text-xs max-w-sm ">
                HTML é uma linguagem de marcação para criar conteúdo web,
                incluindo texto, imagens e links.
              </p>
            </div>
          </div>
          <div className="card w-full  max-w-lg flex flex-col gap-2">
            <div className="header flex dark:text-primary-dark font-semibold ">
              <span className="flex items-center gap-2 text-lg max-md:text-base">
                <IoLogoCss3 className="text-button-primary dark:text-purple-200 text-lg boxShadow" />
                CSS
              </span>
            </div>
            <div className="text">
              <p className=" dark:text-secondary-dark text-secondary-light font-semibold text-sm max-sm:text-xs max-w-sm ">
                CSS é uma linguagem que estiliza a aparência e o layout dos
                documentos da web.
              </p>
            </div>
          </div>
          <div className="card w-full  max-w-lg flex flex-col gap-2">
            <div className="header flex dark:text-primary-dark font-semibold ">
              <span className="flex items-center gap-2 text-lg max-md:text-base">
                <DiJavascript className="text-button-primary dark:text-purple-200 text-lg boxShadow" />
                JavaScript
              </span>
            </div>
            <div className="text">
              <p className=" dark:text-secondary-dark text-secondary-light font-semibold text-sm max-sm:text-xs max-w-sm ">
                JavaScript é uma linguagem de programação usada para adicionar
                interatividade a páginas da web.
              </p>
            </div>
          </div>
          <div className="card w-full  max-w-lg flex flex-col gap-2">
            <div className="header flex dark:text-primary-dark font-semibold  ">
              <span className="flex items-center gap-2 text-lg max-md:text-base">
                <SiTypescript className="text-button-primary dark:text-purple-200 text-lg boxShadow" />
                TypeScript
              </span>
            </div>
            <div className="text">
              <p className=" dark:text-secondary-dark text-secondary-light font-semibold text-sm max-sm:text-xs max-w-sm ">
                TypeScript é uma linguagem de programação que adiciona tipagem
                estática ao JavaScript.
              </p>
            </div>
          </div>
          <div className="card w-full  max-w-lg flex flex-col gap-2">
            <div className="header flex dark:text-primary-dark font-semibold ">
              <span className="flex items-center gap-2 text-lg max-md:text-base">
                <RiReactjsLine className="text-button-primary dark:text-purple-200 text-lg boxShadow" />
                ReactJs
              </span>
            </div>
            <div className="text">
              <p className=" dark:text-secondary-dark text-secondary-light font-semibold text-sm max-sm:text-xs max-w-sm ">
                React é uma biblioteca de JavaScript para criar interfaces de
                usuário reutilizáveis e interativas com componentes.
              </p>
            </div>
          </div>
          <div className="card w-full  max-w-lg flex flex-col gap-2">
            <div className="header flex dark:text-primary-dark font-semibold ">
              <span className="flex items-center gap-2 text-lg max-md:text-base">
                <DiNodejs className="text-button-primary dark:text-purple-200 text-lg boxShadow" />
                NodeJs
              </span>
            </div>
            <div className="text">
              <p className=" dark:text-secondary-dark text-secondary-light font-semibold text-sm max-sm:text-xs max-w-sm ">
                Node.js é uma tecnologia que permite executar código JavaScript
                fora do navegador.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className=" md:px-16 px-6  pt-6  relative">
        <header>
          <h2 className="title-size2 font-semibold text-primary-light dark:text-primary-dark ">
            Projetos
          </h2>
          <p className="text-size2 pt-2 max-w-lg text-secondary-light dark:text-secondary-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            recusandae modi totam, dolores nihil.
          </p>
        </header>
        <div
          className={`cards mt-6   relative py-4  md:mb-52 overflow-hidden 
          `}
        >
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              425: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <div className="card w-full">
                <video
                  poster="https://cdn.godly.website/862b33ed-44d2-4a5e-b876-f733e75ac331.jpg?width=360&amp;quality=70"
                  playsInline
                  autoPlay
                  loop
                  className="c-bXaNzB c-bXaNzB-ibZHHTt-css"
                >
                  <source
                    type="video/webm"
                    src="https://video.godly.website/video/upload/w_360/q_70/recordings/fqp4kcvlrh5ub9hctdwk.webm"
                  />
                  <source
                    type="video/mp4"
                    src="https://video.godly.website/video/upload/w_360/q_70/recordings/fqp4kcvlrh5ub9hctdwk.mp4"
                  />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card w-full">
                <video
                  poster="https://cdn.godly.website/ac493e4e-bcec-4a11-ae55-df249d36cc09.jpg?width=360&amp;quality=70"
                  playsInline
                  autoPlay
                  loop
                  className="c-bXaNzB c-bXaNzB-ibZHHTt-css"
                >
                  <source
                    type="video/webm"
                    src="https://video.godly.website/video/upload/w_360/q_70/recordings/d30mhj1bavkfrghjjh5n.webm"
                  />
                  <source
                    type="video/mp4"
                    src="https://video.godly.website/video/upload/w_360/q_70/recordings/d30mhj1bavkfrghjjh5n.mp4"
                  />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card w-full">
                <video
                  poster="https://cdn.godly.website/260f4522-82e2-453b-8335-b93def2770d7.jpg?width=360&amp;quality=70"
                  playsInline
                  autoPlay
                  loop
                  className="c-bXaNzB c-bXaNzB-ibZHHTt-css"
                >
                  <source
                    type="video/webm"
                    src="https://video.godly.website/video/upload/w_360/q_70/recordings/qb5vgzsqpej7juf5gc56.webm"
                  />
                  <source
                    type="video/mp4"
                    src="https://video.godly.website/video/upload/w_360/q_70/recordings/qb5vgzsqpej7juf5gc56.mp4"
                  />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card w-full">
                <video
                  poster="https://cdn.godly.website/862b33ed-44d2-4a5e-b876-f733e75ac331.jpg?width=360&amp;quality=70"
                  playsInline
                  autoPlay
                  loop
                  className="c-bXaNzB c-bXaNzB-ibZHHTt-css"
                >
                  <source
                    type="video/webm"
                    src="https://video.godly.website/video/upload/w_360/q_70/recordings/fqp4kcvlrh5ub9hctdwk.webm"
                  />
                  <source
                    type="video/mp4"
                    src="https://video.godly.website/video/upload/w_360/q_70/recordings/fqp4kcvlrh5ub9hctdwk.mp4"
                  />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card w-full">
                <video
                  poster="https://cdn.godly.website/ac493e4e-bcec-4a11-ae55-df249d36cc09.jpg?width=360&amp;quality=70"
                  playsInline
                  autoPlay
                  loop
                  className="c-bXaNzB c-bXaNzB-ibZHHTt-css"
                >
                  <source
                    type="video/webm"
                    src="https://video.godly.website/video/upload/w_360/q_70/recordings/d30mhj1bavkfrghjjh5n.webm"
                  />
                  <source
                    type="video/mp4"
                    src="https://video.godly.website/video/upload/w_360/q_70/recordings/d30mhj1bavkfrghjjh5n.mp4"
                  />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card w-full">
                <video
                  poster="https://cdn.godly.website/260f4522-82e2-453b-8335-b93def2770d7.jpg?width=360&amp;quality=70"
                  playsInline
                  autoPlay
                  loop
                  className="c-bXaNzB c-bXaNzB-ibZHHTt-css"
                >
                  <source
                    type="video/webm"
                    src="https://video.godly.website/video/upload/w_360/q_70/recordings/qb5vgzsqpej7juf5gc56.webm"
                  />
                  <source
                    type="video/mp4"
                    src="https://video.godly.website/video/upload/w_360/q_70/recordings/qb5vgzsqpej7juf5gc56.mp4"
                  />
                </video>
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </section>
    </div>
  );
}
