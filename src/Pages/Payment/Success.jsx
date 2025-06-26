import { useSearchParams } from "react-router-dom";

function Success() {
  const [search] = useSearchParams();
  const data = search.get("data");
  const info = JSON.parse(atob(data));
  return (
    <div className="shadow-2xl space-y-3.5  shadow-gray-700 w-96 m-auto my-10 p-5">
      <h1 className="text-center text-2xl   underline">Payment is Success</h1>
      <h1>
        Status: <span className="text-orange-500 underline">{info.status}</span>
      </h1>
      <h1>
        Transaction Uuid :
        <span className="text-orange-300 underline">
          {info.transaction_uuid}
        </span>
      </h1>
      <h1>
        Total Amount:
        <span className="text-orange-500 underline">
          Rs.{info.total_amount}
        </span>
      </h1>
    </div>
  );
}

export default Success;
