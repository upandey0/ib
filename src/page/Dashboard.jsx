import Sidebar from "@/components/Sidebar"
import Navbar from "@/components/Navbar"
import FeatureUpdates from "@/components/FeatureUpdates"
import DashGraph from "@/components/DashGraph"
import DashCalculations from "@/components/DashCalculations"
import AutoInvoice from "@/components/AutoInvoice"
import PaymentGateways from "@/components/PaymentGateways"
import CardDash from "@/components/CardDash"

const Dashboard = () => {
    const style = {
        height: '100vh',
        
    }
  return (
    <div className="flex h-screen">
      <div className="bg-gray-200 sidebar" style={style}>
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="m-1 bg-[#cfecf7]">
          <FeatureUpdates />
        </div>
        <div className="flex-1 flex">
          <DashGraph />
          <div className="flex w-[80%]">
            <DashCalculations />
          </div>
        </div>
        <AutoInvoice />
        <PaymentGateways/>
        <CardDash/>
      </div>
    </div>
  )
}

export default Dashboard