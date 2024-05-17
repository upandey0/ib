
const AutoInvoice = () => {
  return (
    
    <div className="bg-white rounded-lg shadow-lg p-6 bg-[#CFECF7] m-2">
      <h2 className="text-2xl font-bold mb-4 ">Auto Invoice</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=" bg-gray-400 text-black rounded-lg p-6 hover:bg-red-200">
          <div className="text-xl bold">
            <h2>InstaMojo</h2>
          </div>
          <h3 className="text-lg font-bold mb-2">Connect Instamojo</h3>
          <p className="mb-4">Auto-record Instamojo payments receipts as sales and send WhatsApp and email to customers automatically</p>
          <a href="#" className="inline-block bg-white text-indigo-600 rounded-md px-4 py-2 hover:bg-indigo-700 hover:text-white transition-colors">
            Watch Tutorial Video
          </a>
          <a href="#" className="inline-block bg-white text-indigo-600 rounded-md px-4 py-2 mt-2 hover:bg-indigo-700 hover:text-white transition-colors">
            Connect Now
          </a>
        </div>
        <div className="bg-gray-400 text-black rounded-lg p-6 hover:bg-red-200">
        <div className="text-xl bold">
            <h2>RazorPay</h2>
          </div>
          <h3 className="text-lg font-bold mb-2">Connect Razorpay</h3>
          <p className="mb-4">Auto-record Razorpay payments receipts as sales and send WhatsApp and email to customers automatically</p>
          <a href="#" className="inline-block bg-white text-orange-600 rounded-md px-4 py-2 hover:bg-orange-700 hover:text-white transition-colors">
            Watch Tutorial Video
          </a>
          <a href="#" className="inline-block bg-white text-orange-600 rounded-md px-4 py-2 mt-2 hover:bg-orange-700 hover:text-white transition-colors">
            Connect Now
          </a>
        </div>
        <div className="bg-gray-400 text-black rounded-lg p-6 hover:bg-red-200">
        <div className="text-xl bold">
            <h2>Stripe</h2>
          </div>
          <h3 className="text-lg font-bold mb-2">Connect Stripe</h3>
          <p className="mb-4">Auto-record Stripe payments receipts as sales and send WhatsApp and email to customers automatically</p>
          <a href="#" className="inline-block bg-white text-blue-600 rounded-md px-4 py-2 hover:bg-blue-700 hover:text-white transition-colors">
            Watch Tutorial Video
          </a>
          <a href="#" className="inline-block bg-white text-blue-600 rounded-md px-4 py-2 mt-2 hover:bg-blue-700 hover:text-white transition-colors">
            Connect Now
          </a>
        </div>
      </div>
    </div>
  
  );
};

export default AutoInvoice;