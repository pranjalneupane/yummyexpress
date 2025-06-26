import React from "react";

function Failure() {
  return (
    <div className="flex  justify-center flex-col  items-center shadow-2xl shadow-gray-400 w-96 m-auto my-10   ">
      <h1 className="text-2xl  my-10  font-bold text-center  items-center text-red-500">
        Payment Failed
      </h1>
      <img
        className="w-40"
        src="https://cdn.printme.online/wp-content/uploads/2020/04/payment_fail_icon.png"
        alt=""
      />
    </div>
  );
}

export default Failure;
