import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, Calendar as CalendarIcon } from "phosphor-react"
import { useState } from "react"

const PaymentIn = ({ header = "Receipt - Bahi Khata", activity }) => {
    const [date, setDate] = useState("")
    const [focusedInput, setFocusedInput] = useState(null)

    const handleDateSelect = (selectedDate) => {
        setDate(selectedDate.toDateString())
    }

    const handleInputFocus = (e) => {
        setFocusedInput(e.target.name)
    }

    const handleInputBlur = () => {
        setFocusedInput(null)
    }

    return (
        <div className="flex flex-col m-4 p-2">
            <div className="flex text-red-600 m-1">
                <h1 className="font-bold text-xl m-2 p-2">{header}</h1>
            </div>
            <div className="flex m-1">
                <div className="w-[10%] h-[100%] bg-red-100 flex items-center justify-center m-1 rounded-lg hover:bg-gradient-to-r from-red-500 to-yellow-400">
                    <button className="flex">
                        <ArrowUp size={20} />
                        RECEIVED
                    </button>
                </div>
                <div className="w-[10%] h-[100%] bg-red-100 flex items-center justify-center m-1 rounded-lg hover:bg-gradient-to-r from-red-500 to-yellow-400">
                    <button className="flex">
                        <ArrowDown size={20} />
                        PAID
                    </button>
                </div>
            </div>
            <div className="flex items-center m-2">
                <div className="flex flex-col mr-2">
                    <label>Date:</label>
                    <div className="flex">
                        <input
                            type="text"
                            name="date"
                            value={date}
                            readOnly
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            placeholder="Select Date"
                            className={`w-[100%] h-[50px] rounded-md border px-2 py-1 ${focusedInput === "date" ? "outline-red-500" : ""
                                }`}
                        />
                        <Popover>
                            <PopoverTrigger>
                                <Button variant="outline">
                                    <CalendarIcon size={20} />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={handleDateSelect}
                                    className="rounded-md border"
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

            </div>
            <div className="flex flex-col">
                <div className="flex flex-col m-1">
                    <label>Name:</label>
                    <div className="flex items-center">
                    <input
                        type="text"
                        name="name"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        placeholder="Enter Name"
                        className={`w-[26%] h-[50px] rounded-md border px-2 py-1 ${focusedInput === "name" ? "outline-red-500" : ""
                            }`}
                    />
                    <div className="p-1 bg-red-400 m-1 h-[90%] flex items-center">
                        <button>VENDOR</button>
                    </div>
                    <div className="p-1 bg-red-400 m-1 h-[90%] flex items-center">
                        <button>CUSTOMER</button>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col m-1">
                    <label>Mobile Number:</label>
                    <input
                        type="text"
                        name="mobileNumber"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        placeholder="Enter Mobile Number"
                        className={`w-[40%] h-[50px] rounded-md border px-2 py-1 ${focusedInput === "mobileNumber" ? "outline-red-500" : ""
                            }`}
                    />
                </div>
                <div className="flex flex-col m-1">
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        placeholder="Enter Email"
                        className={`w-[40%] h-[50px] rounded-md border px-2 py-1 ${focusedInput === "email" ? "outline-red-500" : ""
                            }`}
                    />
                </div>
                <div className="flex flex-col m-1">
                    <label>Amount:</label>
                    <input
                        type="text"
                        name="amount"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        placeholder="Enter Amount"
                        className={`w-[40%] h-[50px] rounded-md border px-2 py-1 ${focusedInput === "amount" ? "outline-red-500" : ""
                            }`}
                    />
                </div>
                <div className="flex flex-col m-1">
                    <label>Payment Mode:</label>
                    <select
                        name="paymentMode"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        className={`w-[40%] h-[50px] rounded-md border px-2 py-1 ${focusedInput === "paymentMode" ? "outline-red-500" : ""
                            }`}
                    >
                        <option value="">Select Payment Mode</option>
                        <option value="cash">Cash</option>
                        <option value="cheque">Cheque</option>
                        <option value="online">Online</option>
                    </select>
                </div>
                <div className="flex flex-col m-1">
                    <label>Optional:</label>
                    <textarea
                        type="text"
                        name="optional"
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        rows={50}
                        cols={100}
                        placeholder="Enter Optional Information"
                        className={`w-[40%] h-[50px] rounded-md border px-2 py-1 ${focusedInput === "optional" ? "outline-red-500" : ""
                            }`}
                    />
                    <div className='flex m-2 w-[40%] justify-end'>
                        <div className="m-2 p-2 bg-gray-500">
                            <button>Cancel</button>
                        </div>
                        <div className="m-2 p-2 bg-gray-500">
                            <button>Record</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PaymentIn