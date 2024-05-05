import slide1 from "../../src/assets/images/banner/1.jpg";
import slide2 from "../../src/assets/images/banner/2.jpg";
import slide3 from "../../src/assets/images/banner/3.jpg";
import slide4 from "../../src/assets/images/banner/4.jpg";


function Banner() {
  return (
    <div className="carousel w-full pb-5 pt-5">
      <div id="slide1" className="carousel-item  relative w-full">
        <img src={slide1} className="w-full rounded-xl" />
        <div className="absolute bg-gradient-to-r w-full rounded-xl h-full from-[#000000a9] to-[#ffffff16] flex flex-col pl-20 text-white justify-center  ">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold leading-[70px] w-6/12">
              Affordable Price For Car Servicing
            </h1>
            <p className="w-7/12 pb-10">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn bg-orange-600 border-orange-600 rounded-none text-white font-medium hover:bg-orange-500">
              Discover More
            </button>
            <button className="btn bg-transparent hover:bg-orange-600 text-white hover:text-white rounded-none hover:border-orange-600">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-5 gap-5 left-5 right-10 ">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slide2} className="w-full rounded-xl" />
        <div className="absolute bg-gradient-to-r w-full rounded-xl h-full from-[#000000a9] to-[#ffffff16] flex flex-col pl-20 text-white justify-center  ">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold leading-[70px] w-6/12">
              Affordable Price For Car Servicing
            </h1>
            <p className="w-7/12 pb-10">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn bg-orange-600 border-orange-600 rounded-none text-white font-medium hover:bg-orange-500">
              Discover More
            </button>
            <button className="btn bg-transparent hover:bg-orange-600 text-white hover:text-white rounded-none hover:border-orange-600">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-5 gap-5 left-5 right-10 ">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative rounded-xl w-full">
        <div className="absolute bg-gradient-to-r w-full rounded-xl h-full from-[#000000a9] to-[#ffffff16] flex flex-col pl-20  text-white justify-center  ">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold leading-[70px] w-6/12">
              Affordable Price For Car Servicing
            </h1>
            <p className="w-7/12 pb-10">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn bg-orange-600 border-orange-600 rounded-none text-white font-medium hover:bg-orange-500">
              Discover More
            </button>
            <button className="btn bg-transparent hover:bg-orange-600 text-white hover:text-white rounded-none hover:border-orange-600">
              Latest Project
            </button>
          </div>
        </div>
        <img src={slide3} className="w-full rounded-xl" />
        <div className="absolute flex justify-end bottom-5 gap-5 left-5 right-10 ">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative rounded-xl w-full">
        <div className="absolute bg-gradient-to-r w-full rounded-xl h-full from-[#000000a9] to-[#ffffff16] flex flex-col pl-20 text-white justify-center  ">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold leading-[70px] w-6/12">
              Affordable Price For Car Servicing
            </h1>
            <p className="w-7/12 pb-10">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn bg-orange-600 border-orange-600 rounded-none text-white font-medium hover:bg-orange-500">
              Discover More
            </button>
            <button className="btn bg-transparent hover:bg-orange-600 text-white hover:text-white rounded-none hover:border-orange-600">
              Latest Project
            </button>
          </div>
        </div>
        <img src={slide4} className="w-full rounded-xl" />
        <div className="absolute flex justify-end bottom-5 gap-5 left-5 right-10 ">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
