import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthContextComponent";
import Table from "./Table";
import axios from "axios";

function Bookings() {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((data) => setBookings(data.data));
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");

          const remaining = bookings.filter((element) => element._id !== id);
          setBookings(remaining);
        }
      });
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = bookings.filter((element) => element._id !== id);
        const updated = bookings.find((element) => element._id === id);
        console.log(updated);
        updated.status = "confirm";
        const newBookings = [updated, ...remaining];
        setBookings(newBookings);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Services</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <Table
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></Table>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bookings;
