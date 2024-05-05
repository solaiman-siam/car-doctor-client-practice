import banner1 from "../../src/assets/images/about_us/person.jpg";
import banner2 from "../../src/assets/images/about_us/parts.jpg";

function About() {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col gap-32 lg:flex-row">
        <div className="w-1/2 relative  h-full">
          <img src={banner1} className="  rounded-lg shadow-2xl" />
          <div className="absolute -bottom-20 rounded-xl border-[10px] border-white -right-16">
            <img src={banner2} alt="" className=" w-80 " />
          </div>
        </div>

        <div className="lg:w-1/2">
          <h3 className="text-orange-600 pb-4 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field!
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
            <br />
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-orange-600 rounded-none text-white ">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
