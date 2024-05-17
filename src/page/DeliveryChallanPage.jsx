import SalesLayout from "@/Layout/SalesLayout"
import NoDataFound from "@/components/NoDataFound"
import invoice from '@/assets/invoice-screen.png'
const DeliveryChallanPage = () => {
  return (
    <>
        <SalesLayout header={"Delivery Challan"}>
            <NoDataFound source={invoice}/>
        </SalesLayout>
    </>
  )
}

export default DeliveryChallanPage
