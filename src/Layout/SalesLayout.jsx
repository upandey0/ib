import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import InvoiceList from "@/components/InvoiceList";
import Dropdown from "@/components/DateRange";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const TextInput = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className={`w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          isExpanded ? 'rounded-t-md' : 'rounded-md'
        }`}
        onClick={toggleExpand}
      />
      {isExpanded && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-b-md shadow-lg">
          <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 bg-blue-300">
            Customer
          </button>
        </div>
      )}
    </div>
  );
};

const SalesLayout = ({header,children}) => {
  const location = useLocation()
  const options = [
    'TODAY',
    'YESTERDAY',
    'LAST 7 DAYS',
    'LAST 30 DAYS',
    'LAST MONTH',
    'THIS MONTH',
  ];

const paymentStatusOptions = ['Paid', 'Unpaid'];
const rederInputText = location.pathname === '/invoices' || location.pathname === '/quotations'
const renderPaymentStatus = location.pathname === '/invoices'
    
  return (
    <div className="flex h-screen">
    <div className="bg-gray-200">
         <Sidebar />
       </div>
       <div className="flex-1 flex flex-col">
         <Navbar />
         <div className="flex-1 flex flex-col">  
           <InvoiceList header = {header}>
              <Dropdown options={options} label={"Select Date Range"}/>
              {
                rederInputText && <TextInput/>
              }
              {
                renderPaymentStatus && <Dropdown options={paymentStatusOptions} label={"Select Payment Status"}/>
              }
            </InvoiceList>
           <div className="mx-4 my-2"> 
             {children}
           </div>
         </div>
       </div>
     </div>
  )
}

export default SalesLayout
