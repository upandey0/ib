import { ChartLineUp, TrendDown, TrendUp } from "phosphor-react";

const DashCalculations = () => {
  return (
    <div className="flex flex-col m-1 w-[90%] h-[80%] bg-red-500 text-white">
      <div className="text-bold m-2">
        <h2 className="text-bold">May 2024 Statistics</h2>
      </div>
      <div className="flex-grow flex flex-wrap justify-between">
        <div className="flex flex-col m-2">
          <h2 className="text-bold flex justify-center">
            <TrendUp />
            <h3 className="ml-3 text-bold">Revenue</h3>
          </h2>
          <h1 className="text-bold text-lg">
            <p>&#8377; 0.00</p>
          </h1>
        </div>
        <div className="bg-red-700 rounded-xl border-2 border-yellow-400 m-2">
          <button className="flex justify-center items-center bg-red-700 text-white py-2 px-4 rounded-full text-lg">
            Last Month &#8377; 0.00
          </button>
        </div>
        <div className="flex flex-col m-2">
          <h2 className="text-bold flex justify-center">
            <TrendDown />
            <h3 className="ml-3 text-bold">Expense</h3>
          </h2>
          <h1 className="text-bold text-lg">
            <p>&#8377; 0.00</p>
          </h1>
        </div>
        <div className="bg-red-700 rounded-xl border-2 border-yellow-400 m-2">
          <button className="flex justify-center items-center bg-red-700 text-white py-2 px-4 rounded-full text-lg">
            Last Month &#8377; 0.00
          </button>
        </div>
        <div className="flex flex-col m-2">
          <h2 className="text-bold flex justify-center">
            <ChartLineUp />
            <h3 className="ml-3 text-bold">Profit & Loss</h3>
          </h2>
          <h1 className="text-bold text-lg">
            <p>&#8377; 0.00</p>
          </h1>
        </div>
        <div className="bg-red-700 rounded-xl border-2 border-yellow-400 m-2">
          <button className="flex justify-center items-center bg-red-700 text-white py-2 px-4 rounded-full text-lg">
            Last Month &#8377; 0.00
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashCalculations;