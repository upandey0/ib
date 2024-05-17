import { ArrowUp, ArrowDown } from "phosphor-react"
const PaymentIn = ({ header = "Receipt - Bahi Khata", activity }) => {
    return (
        <div className="flex flex-col m-2">
            <div className="flex text-red-600 m-1">
                <h1 className="font-bold text-xl m-2 p-2"> {header}</h1>
            </div>
            <div className="flex m-1">
                <div className="w-[10%] h-[100%] bg-red-100 flex items-center justify-center  m-1 rounded-lg hover:bg-gradient-to-r from-red-500 to-yellow-400">
                    <button className="flex"><ArrowUp size={20}/>RECEIVED</button>
                </div>
                <div className="w-[10%] h-[100%] bg-red-100 flex items-center justify-center m-1 rounded-lg hover:bg-gradient-to-r from-red-500 to-yellow-400">
                    <button className="flex"><ArrowDown size={20}/>PAID</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentIn
