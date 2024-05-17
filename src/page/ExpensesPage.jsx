import SalesLayout from "@/Layout/SalesLayout"
import NoDataFound from "@/components/NoDataFound"
import invoice from '@/assets/no-expense.png'
const ExpensesPage = () => {
  return (
    <>
            <SalesLayout>
                <NoDataFound source={invoice}/>
            </SalesLayout>
    </>
  )
}

export default ExpensesPage
