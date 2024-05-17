import Sidebar from "@/components/Sidebar"
import Navbar from "@/components/Navbar"
import PaymentIn from "@/components/PaymentIn"
const PaymentLayout = () => {
  return (
    <div className="flex h-screen">
    <div className="bg-gray-200">
         <Sidebar />
       </div>
       <div className="flex-1 flex flex-col">
         <Navbar />
         <div className="flex-1 flex flex-col">  
           <PaymentIn/>
         </div>
       </div>
     </div>
  )
}

export default PaymentLayout
