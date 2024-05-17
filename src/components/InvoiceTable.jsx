const InvoiceTable = ({ invoices }) => {
  const headerStyle = {
    backgroundColor: '#ff6600',
    color: 'white',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const headerItemStyle = {
    flex: 1,
    textAlign: 'center',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };

  const cellStyle = {
    flex: 1,
    textAlign: 'center',
  };

  return (
    <div>
      <div style={headerStyle}>
        <div style={headerItemStyle}>Date</div>
        <div style={headerItemStyle}>Invoice No.</div>
        <div style={headerItemStyle}>Customer Name</div>
        <div style={headerItemStyle}>Amount</div>
        <div style={headerItemStyle}>Status</div>
      </div>
      {invoices.length === 0 ? (
        <div style={{ padding: '10px', textAlign: 'center' }}>No more data found!</div>
      ) : (
        invoices.map((invoice) => (
          <div key={invoice.id} style={rowStyle}>
            <div style={cellStyle}>{invoice.date}</div>
            <div style={cellStyle}>{invoice.invoiceNo}</div>
            <div style={cellStyle}>{invoice.customerName}</div>
            <div style={cellStyle}>{invoice.amount}</div>
            <div style={cellStyle}>{invoice.status}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default InvoiceTable;