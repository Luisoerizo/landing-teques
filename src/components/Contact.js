import React from "react";
import Iframe from "react-iframe";

export const Contact = () => {
  return (
    <>
      <section className="bg-gray-100 py-20 px-4" id="contact">
        <div className="container mx-auto w-2/3 md:w-1/2 h-auto">
          <h1 className="font-light text-3xl text-center mb-10">Contáctanos</h1>
          <div className="md:flex md:justify-around">
            <div className="mb-4">
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
            <div className="mb-4">
              <h4 className="text-gray-600 capitalize font-semibold">
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
          </div>

          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30247.939375798647!2d-99.28603569268009!3d18.619410609962117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdd4ec0df888a3%3A0x46bdbc3e3b433871!2sTequesquitengo%2C%20Mor.!5e0!3m2!1ses-419!2smx!4v1633988566152!5m2!1ses-419!2smx"
            id="myId"
            width="100%"
            height="450px"
            className="mx-auto rounded-lg mb-20 md:mb-12"
            display="block"
            position="relative"
            loading="lazy"
          />

          <hr className=" border-b-2 border-black border-opacity-30 rounded-lg" />
        </div>
      </section>
    </>
  );
};
