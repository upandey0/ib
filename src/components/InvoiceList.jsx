import { useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';


const InvoiceList = ({header, children}) => {
    

  return (
    <div className="m-3 flex flex-col w-[100%]">
      <div className='my-3 space-y-2'>
        <h2 className="text-red-500 text-xl font-bold"> {header} List</h2>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-4">
            {children}
          {/* <Dropdown options={options} label="Date Range" /> */}
          {/* <TextInput /> */}
          {/* <Dropdown options={paymentStatusOptions} label="Payment Status" /> */}
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-red-400 border border-gray-300 rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            className="px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <MagnifyingGlass size={20} color="#a0aec0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;