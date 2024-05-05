function Table({ booking, handleDelete, handleConfirm }) {
  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(booking._id)}
          className="btn btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="mask mask-squircle w-24 h-24">
          <img src={booking.img} alt="Avatar Tailwind CSS Component" />
        </div>
      </td>
      <td>{booking.service}</td>
      {/* <td>{booking.status}</td> */}
      <th>
        {booking.status === "confirm" ? (
          <span>Confirm</span>
        ) : (
          <button
            onClick={() => handleConfirm(booking._id)}
            className="btn btn-ghost btn-xs"
          >
            {" "}
            {booking.status}
          </button>
        )}
      </th>
    </tr>
  );
}

export default Table;
