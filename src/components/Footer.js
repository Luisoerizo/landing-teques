import React from "react";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <>
      <section className="bg-gray-100 py-10 border-t-2" id="footer">
        <div className=" container mx-auto md:flex md:justify-around "> {/* w-2/3 md:w-1/2 */}
          <div className="m-5 md:mx-0 md:w-1/3">
            <h4 className="text-base text-gray-700 capitalize font-semibold mb-2">
              Nosotros
            </h4>
            <p>
              Commodo ullamco ea quis sit culpa adipisicing incididunt quis
              cupidatat consequat dolor quis nostrud tempor. Labore duis esse
              magna consequat voluptate nulla exercitation nostrud ea do tempor
              mollit. Nulla magna laboris amet ea ut consectetur nostrud
              adipisicing cillum nisi est cillum dolore commodo. Sit aute quis
              ex aliquip eu non irure.
            </p>
          </div>
          <div className="m-5 md:mx-0">
            <h4 className="text-base text-gray-700 capitalize font-semibold mb-2">
              Contacto
            </h4>
            <span className="text-gray-600 capitalize font-semibold">
              Dirección:
            </span>
            <p className="mb-1">Tequesquitengo, Morelos. 62840</p>
            <span className="text-gray-600 capitalize font-semibold">
              Teléfono:
            </span>
            <p className="mb-1">7341161248</p>
            <span className="text-gray-600 capitalize font-semibold">
              Email:
            </span>
            <p className="mb-1">example@example.com</p>
          </div>

          <div className="m-5 md:mx-0">
            <h4 className="text-base text-gray-700 capitalize font-semibold mb-2">
              Redes Sociales
            </h4>
            <div className="flex items-center">
              <i className="fab fa-facebook text-blue-600 text-2xl"></i>
              <p className="mx-2">Lanchas Teques</p>
            </div>
            <div className="flex items-center">
              <i className="fab fa-twitter text-blue-500 text-2xl"></i>
              <p className="mx-2">@LanchasTeques</p>
            </div>
            <div className="flex items-center">
              <i className="fab fa-instagram text-pink-600 text-2xl"></i>
              <p className="mx-2">Lanchas Teques</p>
            </div>
          </div>

          <div className="m-5 md:mx-0">
            <h4 className="text-base text-gray-700 capitalize font-semibold mb-2">
              Links
            </h4>
            <Link
              className="block mb-2 cursor-pointer"
              to="home"
              smooth={true}
              duration={500}
            >
              Inicio
            </Link>
            <Link
              className="block mb-2 cursor-pointer"
              to="about"
              smooth={true}
              duration={500}
            >
              Nosotros
            </Link>
            <Link
              className="block mb-2 cursor-pointer"
              to="services"
              smooth={true}
              duration={500}
            >
              Servicios
            </Link>
            <Link
              className="block mb-2 cursor-pointer"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
