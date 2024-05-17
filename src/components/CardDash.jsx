import Cards from "./Cards"
import { FileText, ClockCounterClockwise, Sparkle } from 'phosphor-react';

const CardDash = () => {
  return (
    <div className="flex m-2 bg-[#CFECF7]">
      <h2 className="font-bold text-xl">Auto Record Purchase & Expenses</h2>
      <div className="m-2 bg-[#dadada] rounded-lg hover:bg-gradient-to-r from-red-500 to-yellow-400 shadow-lg">
        <div className="m-1">
          <Cards icon={<FileText size={32} weight="duotone" color="#ffD300" />} title="Click & Upload Purchase Bill" description="Auto-record all purchase invoices and don't miss GST Input Tax Credit" />
        </div>
      </div>
      <div className="m-2 bg-[#dadada] rounded-lg hover:bg-gradient-to-r from-red-500 to-yellow-400 shadow-lg">
        <div className="m-1">
          <Cards icon={<FileText size={32} weight="duotone" color="#ffD300" />} title="Click & Upload Expense Bill" description="Auto-record all purchase invoices and don't miss GST Input Tax Credit" />
        </div>
      </div>
      <div className="m-2 bg-[#dadada] rounded-lg hover:bg-gradient-to-r from-red-500 to-yellow-400 shadow-lg">
        <div className="m-1">
          <Cards icon={<ClockCounterClockwise size={32} weight="duotone" color="#ffD300" />} title="Fetch GSTR-2B" description="Auto-Fetch all purchases & expenses reported by vendor & suppliers in GST Portal" />
        </div>
      </div>
      <div className="m-2 bg-[#dadada] rounded-lg hover:bg-gradient-to-r from-red-500 to-yellow-400 shadow-lg">
        <div className="m-1">
          <Cards icon={<Sparkle size={32} weight="duotone" color="#ffd300" />} title="Auto-Reconcile Purchase & GSTR-2A" description="Auto-detect difference in your actual purchases ITC and GST ITC reported by vendors & suppliers." />
        </div>
      </div>
    </div>
  )
}

export default CardDash