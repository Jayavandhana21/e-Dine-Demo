
export default function TopupWallet() {
    const payment = [
        {
           id : 1,
           Payment : "Omise",
           amount : "20.66 SGD",
           requestDate : "20-12-27 14:46:26 PM",
           paymentStatus : "Completed"
        },
        {
            id : 2,
           Payment : "Omise",
           amount : "20.66 SGD",
           requestDate : "20-12-27 14:46:26 PM",
           paymentStatus : "Completed" 
        },
        {
            id : 3,
            Payment : "Omise",
            amount : "20.66 SGD",
            requestDate : "20-12-27 14:46:26 PM",
            paymentStatus : "Completed"
        },
        {
            id : 4,
            Payment : "Omise",
            amount : "20.66 SGD",
            requestDate : "20-12-27 14:46:26 PM",
            paymentStatus : "Completed"
        }
    ]
  return (
    <div className="p-4">
      <p className="font-bold">Top Up Wallet</p>
      <div className="grid grid-cols-6 mt-3 gap-3 ">
        <button className="col-span-2 bg-blue-600 p-4 flex justify-center rounded-md text-white">SGD1</button>
        <button className="col-span-2 bg-blue-600 p-4 flex justify-center rounded-md text-white">SGD25</button>
        <button className="col-span-2 bg-blue-600 p-4 flex justify-center rounded-md text-white">SGD50</button>
        <button className="col-span-2 bg-blue-600 p-4 flex justify-center rounded-md text-white">SGD100</button>
        <button className="col-span-2 bg-blue-600 p-4 flex justify-center rounded-md text-white">SGD150</button>
        <button className="col-span-2 bg-blue-600 p-4 flex justify-center rounded-md text-white">Add</button>
      </div>
      <p className="font-bold mt-3">Top Up Method</p>
      <div className="grid grid-cols-12 gap-3 mt-3">
        <span className="col-span-4 bg-blue-600 rounded text-white flex justify-center p-4">Omise</span>
        <span className="col-span-4 bg-slate-100 rounded text-black flex justify-center flex-wrap items-center text-center">Online Payment</span>
        <span className="col-span-4 bg-slate-100 rounded text-black flex justify-center p-4">Cash</span>
       </div>
      <div className="border-b-[#E7E9EC] border-b-2 border-solid pb-6 "/>
      <p className="font-bold mt-3">Payments</p>
   
    {
        payment.map((status) => (
            <div className="bg-slate-100 rounded mt-2 py-2" >
              <div className="flex font-semibold ml-3 ">
                <p>Payment : </p>
                <p className="text-blue-600 ml-1">{status.Payment}</p>
              </div>
                <p className="font-semibold ml-3 ">Amount : {status.amount}</p>
                <p className="font-semibold ml-3 ">Request Date : {status.requestDate}</p>
                <p className="font-semibold ml-3 ">Payment Status : {status.paymentStatus}</p>
            </div>
        ))
    }
     </div>

  )
}