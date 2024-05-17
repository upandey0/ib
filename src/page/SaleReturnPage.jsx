import SalesLayout from "@/Layout/SalesLayout"
import NoDataFound from "@/components/NoDataFound"
import invoice from '@/assets/invoice-screen.png'
const SaleReturnPage = () => {
  return (
    <>
        <SalesLayout header = {"Credit Note"}>
            <NoDataFound source={invoice}/>
        </SalesLayout>
    </>
  )
}

export default SaleReturnPage
