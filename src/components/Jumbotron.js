import React from "react";

export const Jumbotron = () => {
  return (
    <>
      <section
        className="w-full h-screen md:h-96 bg-jumbotron bg-center bg-cover text-center"
        id="home"
      >
        <div className="container w-full h-full px-8 sm:px-0 mx-auto flex flex-col justify-center">
          <h1 className="text-6xl text-gray-100 font-bold mb-8">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-gray-200">
            Integer viverra eget augue et hendrerit. Mauris consectetur, mi et
            molestie vestibulum, nisi tortor pellentesque libero, nec semper
            nibh mauris eu neque.
          </p>
        </div>
      </section>
    </>
  );
};
