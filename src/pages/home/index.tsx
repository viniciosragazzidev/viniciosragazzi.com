import React from "react";
import rocket from "../../images/rocket.svg";
export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <section className="top w-full h-full flex-2 flex  max-md:flex-col mt-4 md:mt-24 md:px-16 px-6 overflow-hidden">
        <div className="primary lg:max-w-[55%] flex flex-col gap-2">
          <span className="text-size2 dark:text-purple-500 text-purple-600 py-1 px-2 font-semibold  max-w-[180px] rounded-full">
            {" "}
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
            Pressione{" "}
            <span className="p-1 px-2 max-md:px-1 mx-1 dark:text-secondary-light dark:bg-button-secondary-dark text-primary-dark bg-button-primary rounded-md">
              A
            </span>{" "}
            ou clique para entrar em contato
          </p>
        </div>
        <div className="secondary w-full flex-1 flex justify-center items-center md:max-h-[20rem] ">
          <img
            src={
              "https://linear.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.81b602e3.png&w=640&q=100"
            }
            alt=""
            className="max-w-[240px] max-sm:w-full"
          />
        </div>
      </section>
    </div>
  );
}
