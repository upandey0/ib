import Dashboard from "./page/Dashboard"
import {Routes, Route} from 'react-router-dom'
import InvoicePage from "./page/InvoicePage"
import QuotationPage from "./page/QuotationPage"
import SaleReturnPage from "./page/SaleReturnPage"
import DeliveryChallanPage from "./page/DeliveryChallanPage"
import ExpensesPage from "./page/ExpensesPage"
import OtherProfile from "./Layout/OtherProfile"
import ProfilePage from "./page/ProfilePage"
import PaymentLayout from "./Layout/PaymentLayout"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Dashboard/>}/>
        <Route path="/invoices" element = {<InvoicePage/>}/>
        <Route path="/quotations" element = {<QuotationPage/>}/>
        <Route path="/sale-returns" element = {<SaleReturnPage/>}/>
        <Route path="/delivery-challans" element = {<DeliveryChallanPage/>}/>
        <Route path="/expense" element = {<ExpensesPage/>}/>
        <Route path="/other-profile" element = {<OtherProfile/>} />
        <Route path="/profile" element = {<ProfilePage/>}/>
        <Route path="/payments-in" element = {<PaymentLayout/>} />
      </Routes>
    </>
    
  )
}

export default App
