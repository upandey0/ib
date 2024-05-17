import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import NoDataFound from '@/components/NoDataFound'
import nocustomer from '@/assets/no-customer.png'
const OtherProfile = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-gray-200 sidebar">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className='flex w-[100%] justify-center flex-col items-center h-[80%]'>
          <div className='flex w-[80%] flex-col'>
            <NoDataFound source={nocustomer} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherProfile
