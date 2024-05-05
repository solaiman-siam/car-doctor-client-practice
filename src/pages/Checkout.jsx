import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthContextComponent";

function Checkout() {
  const { service_id, title, price, _id, img } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleServiceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const name = form.name.value;
    const date = form.date.value;

    const orderDetails = {
      customerName: name,
      email: email,
      service_id: _id,
      service: title,
      price,
      date,
      img,
      status: "pending",
    };
    console.log(orderDetails);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("order confirmed successfully");
        }
      });
  };

  return (
    <div>
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
        <div className="mt-10 text-center font-bold">Contact Us</div>
        <div className="mt-3 text-center text-4xl font-bold">
          Services Name: {title}
        </div>
        <form onSubmit={handleServiceOrder} className="p-8">
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Full name *"
            />
            <input
              type="date"
              name="date"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Choose Your Date *"
            />
          </div>
          <div className="my-6 flex gap-4">
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Email *"
            />
            <input
              type="number"
              name="dueAmount"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Due Amount *"
              defaultValue={("$", price)}
            />
          </div>

          <div className="text-center">
            <input
              className="cursor-pointer btn btn-block rounded-lg bg-blue-700  text-sm font-semibold text-white"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
