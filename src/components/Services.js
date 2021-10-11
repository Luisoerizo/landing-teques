import React from "react";
import { Carousel } from "react-carousel-minimal";

export const Services = () => {
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Panchito",
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  return (
    <>
      <section className="bg-gray-700 py-20" id="services">
        <div className="container mx-auto w-2/3 lg:w-1/2">
          <h2 className="text-white text-3xl text-center font-light mb-10">
            Todo para tu diversión
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between w-full">
            <div className="lg:w-1/4">
              <p className="text-white font-light text-center my-10 lg:text-2xl">
                Culpa cupidatat commodo cillum cillum id sint. Commodo qui nulla irure veniam est ipsum ea cillum consectetur. Officia nostrud labore proident dolor aliquip fugiat ut ut. Elit magna ipsum consectetur ut quis proident occaecat veniam Lorem. Labore velit qui enim eiusmod. Exercitation excepteur tempor velit anim non laboris magna ipsum excepteur amet.
              </p>
            </div>
            <div className="lg:w-2/3 Carousel">
              <div>
                <div style={{ textAlign: "center" }}>
                  <div>
                    <Carousel
                      data={data}
                      time={2000}
                      width="850px"
                      height="500px"
                      captionStyle={captionStyle}
                      radius="10px"
                      captionPosition="bottom"
                      automatic={true}
                      pauseIconColor="white"
                      pauseIconSize="40px"
                      slideBackgroundColor="darkgrey"
                      slideImageFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
