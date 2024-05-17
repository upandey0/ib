import SalesLayout from "@/Layout/SalesLayout"
import InvoiceTable from "@/components/InvoiceTable"

const InvoicePage = () => {
    const invoice = [{
        date: JSON.stringify(new Date().getDate()) + JSON.stringify(new Date().getMonth()) + new Date().getFullYear(),
        invoiceNo: "asdj123as",
        customerName: "Test 1",
        amount: 1200,
        status: "paid"
      },
      {
        date: JSON.stringify(new Date().getDate()) + JSON.stringify(new Date().getMonth()) + new Date().getFullYear(),
        invoiceNo: "kjhfk123a",
        customerName: "Test 2",
        amount: 120000,
        status: "paid"
      },
      {
        date: JSON.stringify(new Date().getDate()) + JSON.stringify(new Date().getMonth()) + new Date().getFullYear(),
        invoiceNo: "kjakfh121a",
        customerName: "Test 3",
        amount: 130,
        status: "unpaid"
      },
      {
        date: JSON.stringify(new Date().getDate()) + JSON.stringify(new Date().getMonth()) + new Date().getFullYear(),
        invoiceNo: "hjads123",
        customerName: "Test 4",
        amount: 85,
        status: "unpaid"
      }];
  return (
    <>
        <SalesLayout header={"Invoice"}>
            {<InvoiceTable invoices={invoice}/>}
        </SalesLayout>
    </>
  )
}

export default InvoicePage
