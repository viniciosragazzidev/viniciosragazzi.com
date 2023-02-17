import React, { useEffect, useState, useContext } from "react";
import FlashlightOffIcon from "@mui/icons-material/FlashlightOff";
import FlashlightOnIcon from "@mui/icons-material/FlashlightOn";
import CloseIcon from "@mui/icons-material/Close";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { DadosContext } from "../../context/ContextApp";
export default function Navbar() {
  const [modeDark, setModeDark] = useState(true);

  const { open, setOpen } = useContext(DadosContext);

  const handleModeDark = () => {
    setModeDark(!modeDark);
  };

  useEffect(() => {
    if (modeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [modeDark]);

  return (
    <nav className="w-full h-16 md:px-16 px-6 flex items-center max-md:justify-between">
      <a
        href="/"
        className="logo dark:text-primary-dark text-primary-light font-bold tracking-wider text-lg p-2 rounded-full dark:bg-button-primary"
      >
        VR
      </a>
      <div
        className={`menu w-full flex z-50 items-center max-[768px]:justify-center max-[768px]:gap-16 max-[768px]:text-center dark:text-primary-dark
        text-primary-light max-[768px]:fixed max-[768px]:flex-col
         max-[768px]:h-screen  max-[768px]:left-0 max-[768px]:bg-bg-dark max-[768px]:top-[-100vh] transition-transform ${
           open ? "max-md:translate-y-[100vh]" : "max-md:translate-y-0"
         }`}
      >
        <span className="hidden max-md:flex absolute top-0 right-0 m-6 text-primary-dark">
          <CloseIcon
            className=" cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          />
        </span>
        <ul className="flex justify-center md:flex-1 gap-10 text-sm max-[768px]:flex-col max-md:text-primary-dark">
          <li className="hover:scale-95 transition-all">
            <a
              onClick={() => {
                setOpen(false);
              }}
              className="hover:opacity-90  transition-all "
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li className="hover:scale-95 transition-all">
            <a
              onClick={() => {
                setOpen(false);
              }}
              className="hover:opacity-90  transition-all "
              href="/"
            >
              Projects
            </a>
          </li>
          <li className="hover:scale-95 transition-all">
            <a
              onClick={() => {
                setOpen(false);
              }}
              className="hover:opacity-90  transition-all "
              href="/"
            >
              Contact
            </a>
          </li>
        </ul>

        <span
          onClick={() => {
            handleModeDark();
            setOpen(false);
          }}
          className="hover:cursor-pointer hover:opacity-95 hover:scale-90 hover:rotate-45 transition-all max-md:text-primary-dark"
        >
          {modeDark ? <FlashlightOffIcon /> : <FlashlightOnIcon />}
        </span>
      </div>
      <span
        className="md:hidden"
        onClick={() => {
          setOpen(true);
        }}
      >
        <DragHandleIcon className=" dark:text-primary-dark text-primary-light cursor-pointer" />
      </span>
    </nav>
  );
}
