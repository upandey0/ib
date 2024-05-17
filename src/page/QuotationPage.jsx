import SalesLayout from "@/Layout/SalesLayout"
import NoDataFound from "@/components/NoDataFound"
import invoice from '@/assets/invoice-screen.png'
const QuotationPage = () => {
  return (
    <SalesLayout header={"Quotation"}>
        <NoDataFound source={invoice}/>
    </SalesLayout>
  )
}

export default QuotationPage
