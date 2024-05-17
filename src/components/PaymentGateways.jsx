import gateway1 from '@/assets/gateway1.png'
import gateway2 from '@/assets/gateway2.png'

const PaymentGateways = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 bg-[#CFECF7] m-2">
      <h2 className="text-2xl font-bold mb-4">Payment Gateways</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="bg-gradient-to-r from-red-500 to-yellow-400 text-white rounded-lg p-6 hover:cursor-pointer flex"
        >
          <div className="flex flex-col">
            <h2 className="font-bold text-lg m-2">Signup Instamojo</h2>
            <div className="flex w-[60%] flex-wrap m-2">
              <p className="">
                Fill up the online form, submit documents and start collecting
                online payments from your customer via Instamojo Payment Gateway
              </p>
            </div>
            <div className="rounded-lg bg-white w-[30%] m-2 text-black text-center text-yellow-500 hover:text-blue-600">
              <button>Sign Up</button>
            </div>
          </div>
          <div className="flex w-full">
            <img src={gateway1} alt="Gateway 1" className="w-full h-auto" />
          </div>
        </div>
        <div
          className="bg-gradient-to-r from-red-500 to-yellow-400 text-white rounded-lg p-6 hover:cursor-pointer flex"
        >
          <div className="flex flex-col">
            <h2 className="font-bold text-lg m-2">Signup Razorpay</h2>
            <div className="flex w-[60%] flex-wrap m-2">
              <p className="">
                Fill up the online form, submit documents and start collecting
                online payments from your customer via Razorpay Payment Gateway
              </p>
            </div>
            <div className="rounded-lg bg-white w-[30%] m-2 text-black text-center text-yellow-500 hover:text-blue-600">
              <button>Sign Up</button>
            </div>
          </div>
          <div className="flex w-full">
            <img src={gateway2} alt="Gateway 1" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentGateways