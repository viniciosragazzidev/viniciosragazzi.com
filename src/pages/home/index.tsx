import React from "react";
import rocket from "../../images/rocket.svg";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript, DiNodejs } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-20 md:gap-40">
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

          <p className="text-size2 dark:text-secondary-dark text-secondary-light font-semibold mt-6 cursor-pointer hover:opacity-95 transition-all">
            Pressione
            <span className="p-1 px-2 max-md:px-1 mx-1 dark:text-secondary-light dark:bg-button-secondary-dark text-primary-dark bg-button-primary rounded-md">
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
        className="w-full  md:px-28 px-6  pt-6 flex justify-center"
      >
        <div
          className="cards w-full  grid  lg:grid-cols-3 lg:grid-rows-2 lg:gap-8
         md:grid-cols-2 md:grid-rows-3 md:gap-10 sm:grid-cols-2 sm:grid-rows-3 sm:gap-10 
         grid-cols-1 grid-rows-6 gap-8 "
        >
          <div className="card w-full  max-w-lg flex flex-col gap-2">
            <div className="header flex dark:text-primary-dark font-semibold ">
              <span className="flex items-center gap-2 text-lg max-md:text-base">
                <AiFillHtml5 className="text-button-primary dark:text-purple-200 text-lg boxShadow" />{" "}
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
                <IoLogoCss3 className="text-button-primary dark:text-purple-200 text-lg boxShadow" />{" "}
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
                <DiJavascript className="text-button-primary dark:text-purple-200 text-lg boxShadow" />{" "}
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
                <SiTypescript className="text-button-primary dark:text-purple-200 text-lg boxShadow" />{" "}
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
                <RiReactjsLine className="text-button-primary dark:text-purple-200 text-lg boxShadow" />{" "}
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
                <DiNodejs className="text-button-primary dark:text-purple-200 text-lg boxShadow" />{" "}
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
            Projects
          </h2>
        </header>
        <div className="cards mt-6 relative py-4 h-full md:h-[80vh] md:mb-52 overflow-hidden grid  lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-3 max-[666px]:grid-cols-2 max-[420px]:grid-cols-1 grid-flow-row gap-5">
          <div className="absolute w-full h-36 bottom-0 left-0 shadowQ"></div>
          <div className="card w-full sm:max-w-xs min-h-[320px] max-md:w-[200px] max-[666px]:w-full max-[500px]:min-h-[240px] max-[420px]:w-full   bg-secondary-light rounded-lg overflow-hidden">
            <img
              src="https://framerusercontent.com/images/fVzjwoqp6sALfFbvwVT7EWSl0.png"
              alt=""
            />
          </div>
          <div className="card w-full sm:max-w-xs min-h-[320px] max-md:w-[200px] max-[666px]:w-full max-[500px]:min-h-[240px] max-[420px]:w-full   bg-secondary-light rounded-lg overflow-hidden">
            <img
              src="https://framerusercontent.com/images/4JbEH1fSk3JlM5cLXngKLl1eDwM.jpg"
              alt=""
            />
          </div>
          <div className="card w-full sm:max-w-xs min-h-[320px] max-md:w-[200px] max-[666px]:w-full max-[500px]:min-h-[240px] max-[420px]:w-full   bg-secondary-light rounded-lg overflow-hidden">
            <img
              src="https://framerusercontent.com/images/fVzjwoqp6sALfFbvwVT7EWSl0.png"
              alt=""
            />
          </div>
          <div className="card w-full sm:max-w-xs min-h-[320px] max-md:w-[200px] max-[666px]:w-full max-[500px]:min-h-[240px] max-[420px]:w-full   bg-secondary-light rounded-lg overflow-hidden">
            <img
              src="https://framerusercontent.com/images/4JbEH1fSk3JlM5cLXngKLl1eDwM.jpg"
              alt=""
            />
          </div>
          <div className="card w-full sm:max-w-xs min-h-[320px] max-md:w-[200px] max-[666px]:w-full max-[500px]:min-h-[240px] max-[420px]:w-full   bg-secondary-light rounded-lg overflow-hidden">
            <img
              src="https://framerusercontent.com/images/fVzjwoqp6sALfFbvwVT7EWSl0.png"
              alt=""
            />
          </div>
          <div className="card w-full sm:max-w-xs min-h-[320px] max-md:w-[200px] max-[666px]:w-full max-[500px]:min-h-[240px] max-[420px]:w-full   bg-secondary-light rounded-lg overflow-hidden">
            <img
              src="https://framerusercontent.com/images/4JbEH1fSk3JlM5cLXngKLl1eDwM.jpg"
              alt=""
            />
          </div>
          <div className="card w-full sm:max-w-xs min-h-[320px] max-md:w-[200px] max-[666px]:w-full max-[500px]:min-h-[240px] max-[420px]:w-full   bg-secondary-light rounded-lg overflow-hidden">
            <img
              src="https://framerusercontent.com/images/fVzjwoqp6sALfFbvwVT7EWSl0.png"
              alt=""
            />
          </div>
          <div className="card w-full sm:max-w-xs min-h-[320px] max-md:w-[200px] max-[666px]:w-full max-[500px]:min-h-[240px] max-[420px]:w-full   bg-secondary-light rounded-lg overflow-hidden">
            <img
              src="https://framerusercontent.com/images/4JbEH1fSk3JlM5cLXngKLl1eDwM.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
