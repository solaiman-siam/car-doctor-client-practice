import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="pb-20">
      <div className="flex flex-col items-center pt-10">
        <h4 className="text-orange-600 font-medium pb-2">Services</h4>
        <h3 className="text-4xl font-bold pb-4">Our Services Area</h3>
        <p className="w-7/12 text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3 pt-8 md:grid-cols-2 grid-cols-1">
        {services.map((service) => (
          <div key={service._id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-left text-left">
              <h2 className="card-title">{service.title}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions flex justify-between">
                <h4 className="text-red-500 font-bold">${service.price}</h4>
                <Link to={`/checkout/${service._id}`}>
                  <GoArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-6  flex justify-center">
        <button className="btn btn-outline btn-error rounded-none hover:text-white">
          More Services
        </button>
      </div>
    </div>
  );
}

export default Services;
