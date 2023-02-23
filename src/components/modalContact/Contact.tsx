import React, { useContext, useEffect } from "react";
import { DadosContext } from "../../context/ContextApp";
import CloseIcon from "@mui/icons-material/Close";
import { AiFillGithub, AiFillInstagram, AiOutlineLink } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const { modalOpen, setModalOpen } = useContext(DadosContext);

  const handleCloseModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div
      className={`w-full h-screen fixed top-0 left-0 bg-bg-dark bg-opacity-90 text-white z-50    ${
        modalOpen ? "show" : "hidden"
      }`}
    >
      <CloseIcon
        className=" cursor-pointer absolute top-0 right-0 m-10 hover:animate-pulse"
        fontSize="large"
        onClick={() => {
          handleCloseModal();
        }}
      />
      <div className="container w-full h-full flex justify-center items-center gap-6 flex-wrap">
        <a className="card-icon" href="https://www.instagram.com/viniciosragazzi_/">
          <AiFillInstagram />
        </a>
        <a className="card-icon" href="https://github.com/viniciosragazzidev">
          <AiFillGithub />
        </a>
        <a className="card-icon" href="https://www.linkedin.com/in/viniciosragazzi/">
          <FaLinkedin />
        </a>
        <a className="card-icon" href="">
          <AiOutlineLink />
        </a>
      </div>
    </div>
  );
}
