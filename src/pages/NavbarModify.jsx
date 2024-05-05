import { Divide as Hamburger } from "hamburger-react";
import { useContext, useState } from "react";
import logo from "../../src/assets/logo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthContextComponent";
function NavbarModify() {
  const { user, signOutUser } = useContext(AuthContext);

  const [isOpen, setOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        alert("signout successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <div className="w-full relative  h-20  ">
        <div className="flex justify-between px-6  h-full items-center ">
          <Link to="/" className="flex justify-center ">
            <img className="w-[75px]" src={logo} alt="" />
          </Link>
          <ul className="lg:flex gap-4 hidden pl-14">
            <NavLink
              to="/"
              className="btn btn-sm  bg-white border-none shadow-none hover:text-[#FF3811]"
            >
              Home
            </NavLink>

            {user?.email ? (
              <>
                <NavLink
                  className="btn btn-sm  bg-white border-none shadow-none hover:text-[#FF3811]"
                  to="/bookings"
                >
                  My Bookings
                </NavLink>

                <button onClick={handleSignOut} className="btn btn-sm ">
                  Log out
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className="btn btn-sm  bg-white border-none shadow-none hover:text-[#FF3811]"
              >
                Login
              </NavLink>
            )}

            <NavLink className="btn btn-sm  bg-white border-none shadow-none hover:text-[#FF3811]">
              List
            </NavLink>
            <NavLink className="btn btn-sm  bg-white border-none shadow-none hover:text-[#FF3811]">
              Blog
            </NavLink>
            <NavLink className="btn btn-sm  bg-white border-none shadow-none hover:text-[#FF3811]">
              Contact
            </NavLink>
          </ul>
          <div className="flex gap gap-2 ">
            <div className="lg:flex hidden items-center gap-4">
              <HiOutlineShoppingBag size={22} />
              <IoSearchOutline size={22} />
              <button className="btn btn-sm text-sm rounded-none hover:border-white hover:bg-[#FF3811] btn-ghost btn-outline border-[#FF3811]">
                Appointment
              </button>
            </div>
            <div className="lg:hidden ">
              <Hamburger toggled={isOpen} toggle={setOpen} size={26} />
            </div>
          </div>
        </div>
        <div
          className={
            isOpen
              ? "bg-orange-100 left-0 top-0 lg:hidden md:hidden absolute transition-all duration-300 pt-10  h-screen  px-20  z-10 "
              : "bg-orange-100  absolute top-0 md:hidden lg:hidden  -left-96 transtion-all duration-300  px-20 pt-10 z-10 h-screen"
          }
        >
          <div>
            <Link to="/" className="">
              <img className="w-24" src={logo} alt="" />
            </Link>
          </div>
          <ul className="flex-col flex space-y-4  pt-10">
            <NavLink
              to="/"
              className="hover:text-[#FF3811] font-semibold hover:link-hover"
            >
              Home
            </NavLink>
            <NavLink className="hover:text-[#FF3811] font-semibold hover:link-hover">
              Login
            </NavLink>
            <NavLink className="hover:text-[#FF3811] font-semibold hover:link-hover">
              List
            </NavLink>
            <NavLink className="hover:text-[#FF3811] font-semibold hover:link-hover">
              Blog
            </NavLink>
            <NavLink className="hover:text-[#FF3811] font-semibold hover:link-hover">
              Contact
            </NavLink>
          </ul>
          <div className="pt-8 flex gap-4">
            <Link
              to="/login"
              className="btn btn-sm text-sm bg-[#FF3811] hover:bg-[#FF3811] text-white font-medium rounded-none"
            >
              Login
            </Link>
            <Link className="btn btn-sm text-sm hover:border-white hover:bg-[#FF3811] btn-ghost btn-outline border-[#FF3811] rounded-none">
              Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarModify;
