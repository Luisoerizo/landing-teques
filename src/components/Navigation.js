import React from "react";
import { Link } from "react-scroll";

export const Navigation = () => {
  return (
    <nav className="w-full fixed bg-black bg-opacity-20 md:bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-sm rounded-sm z-10">
      <div className="container flex items-center justify-center p-5 mx-auto capitalize  ">
        <Link
          activeClass="active"
          className="text-white mx-1.5 sm:mx-6 cursor-pointer p-1"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          Inicio
        </Link>
        <Link
          activeClass="active"
          className="text-white mx-1.5 sm:mx-6 cursor-pointer p-1"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          Nosotros
        </Link>

        <Link
          activeClass="active"
          className="text-white mx-1.5 sm:mx-6 cursor-pointer p-1"
          to="services"
          spy={true}
          smooth={true}
          duration={500}
        >
          Servicios
        </Link>

        <Link
          activeClass="active"
          className="text-white mx-1.5 sm:mx-6 cursor-pointer p-1"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
};
