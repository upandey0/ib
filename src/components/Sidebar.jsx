import { House, User, TrendDown, TrendUp, Money, Bank, Wallet, File, Storefront, Users, Truck, ArchiveBox, FileText } from "phosphor-react"
import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
const Sidebar = () => {
  const location = useLocation()
  const activeStyle = {
    backgroundColor: "#a2d",
  }
  const [ActiveStyle, setActiveStyle] = useState({})

  const getActiveStyle = (path) => {
    return location.pathname === path ? { backgroundColor: "#a2d" } : {}
  }
  const [showSalesDropdown, setShowSalesDropdown] = useState(false)
  const [showProfileDropdown, setProfileDropdown] = useState(false)

  const isSalesRoute = () => {
    return (
      location.pathname === "/invoices" ||
      location.pathname === "/quotations" ||
      location.pathname === "/sale-returns" ||
      location.pathname === "/payments-in" ||
      location.pathname === "/delivery-challans" ||
      location.pathname === "/profile"
    )
  }
  const isProfileRoute = () => {
    return (
      location.pathname === '/profile' ||
      location.pathname === '/other-profile'
    )
  }
  useEffect(() => {
    if (isSalesRoute()) {
      setShowSalesDropdown(true)
      console.log(location.pathname)
      setActiveStyle(getActiveStyle('/invoices'))

    }
  }, [location.pathname])

  useEffect(() => {
    if (isProfileRoute()) {
      setProfileDropdown(true)
    }
  }, [location.pathname])

  return (
    <div className="flex flex-col w-[13vw]  h-[400vh] items-center bg-[#121] text-white flex-grow">
      <div className="m-4 text-center hover:cursor-pointer">
        <h1 className="text-bold text-xl text-red-500">Invoice Management</h1>
      </div>
      <div className="m-4 text-center flex-wrap">
        {/* In future the company name can come from the API calls */}
        <h1 className="text-bold flex flex-start">
          AANS SERVICES PRIVATE LIMITED
        </h1>
        <div className="flex justify-center items-center text-center m-3">
          <button className="bg-[#a2d] w-full rounded-lg">Switch Profile</button>
        </div>
      </div>
      <div className="flex flex-col  flex-start text-[16px]">
        <NavLink to={'/'} style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className="p-1 mb-1 text-bold  flex items-center hover:cursor-pointer space-between hover:bg-[#a2d]">
            <House size={20} weight="fill" className="mr-2" /><h2 className="ml-2">Dashboard</h2>
          </div>
        </NavLink>


        <div className="p-1 mb-1 text-bold  flex items-center hover:cursor-pointer hover:bg-[#a2d] " onClick={() => setProfileDropdown(!showProfileDropdown)}>
          <User size={20} weight="fill" className="mr-2" /> <h2 className="ml-2">Profile</h2>
        </div>
        {showProfileDropdown &&
          (<div className="ml-8">
            <NavLink to="/profile" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              <div className="p-1 mb-1 text-bold flex items-center hover:cursor-pointer hover:bg-[#a2d]">My Profile</div>
            </NavLink>
            <NavLink to="/other-profile" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              <div className="p-1 mb-1 text-bold flex items-center hover:cursor-pointer hover:bg-[#a2d]">Other Profile</div>
            </NavLink>
          </div>)
        }

        <div className="p-1 mb-1 text-bold  flex items-center hover:cursor-pointer hover:bg-[#a2d]" onClick={() => setShowSalesDropdown(!showSalesDropdown)}> <TrendUp size={20} weight="fill" className="mr-2" /> <h2 className="ml-2">Sales</h2></div>
        {showSalesDropdown && (
          <div className="ml-8">
            <NavLink to="/invoices" style={ActiveStyle}>
              <div className="p-1 mb-1 text-bold flex items-center hover:cursor-pointer hover:bg-[#a2d]">Invoices</div>
            </NavLink>
            <NavLink to="/quotations" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              <div className="p-1 mb-1 text-bold flex items-center hover:cursor-pointer hover:bg-[#a2d]">Quotation</div>
            </NavLink>
            <NavLink to="/sale-returns" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              <div className="p-1 mb-1 text-bold flex items-center hover:cursor-pointer hover:bg-[#a2d]">Sale Return</div>
            </NavLink>
            <NavLink to="/payments-in" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              <div className="p-1 mb-1 text-bold flex items-center hover:cursor-pointer hover:bg-[#a2d]">Payment In</div>
            </NavLink>
            <NavLink to="/delivery-challans" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              <div className="p-1 mb-1 text-bold flex items-center hover:cursor-pointer hover:bg-[#a2d]">Delivery Challan</div>
            </NavLink>
          </div>
        )}

        <NavLink to={'/pruchases'} style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className="p-1 mb-1 text-bold  flex items-center hover:cursor-pointer hover:bg-[#a2d]"> <TrendDown size={20} weight="fill" className="mr-2" /><h2 className="ml-2">Purchases</h2></div>
        </NavLink>

        <NavLink to={'/expense'} style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className="p-1 mb-1 text-bold  flex items-center hover:cursor-pointer hover:bg-[#a2d]"> <Wallet size={20} weight="fill" className="mr-2" /><h2 className="ml-2">Expense</h2></div>
        </NavLink>
        <NavLink to={'/banking'} style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className="p-1 mb-1 text-bold flex items-center hover:cursor-pointer hover:bg-[#a2d]"> <Bank size={20} weight="fill" className="mr-2" /><h2 className="ml-2">Banking</h2></div>
        </NavLink>

        <NavLink to={'/cash'} style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className="p-1 mb-1 text-bold flex items-center hover:cursor-pointer hover:bg-[#a2d]"> <Money size={20} className="mr-2" /><h2 className="ml-2">Cash</h2></div>
        </NavLink>
        <div className="p-1 mb-1 text-bold flex items-center hover:cursor-pointer hover:bg-[#a2d]"> <File size={20} weight="fill" className="mr-2" /><h2 className="ml-2">Documents</h2></div>

        <NavLink to={'/services'} style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className="p-1 mb-1 text-bold flex items-center hover:cursor-pointer hover:bg-[#a2d]"> <Storefront size={20} weight="fill" className="mr-2" /><h2 className="ml-2">Product/Services</h2></div>
        </NavLink>

        <NavLink to={'/customer'} style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className="p-1 mb-1 text-bold flex items-center hover:cursor-pointer hover:bg-[#a2d]"> <Users size={20} weight="fill" className="mr-2" /><h2 className="ml-2">Customer</h2></div>
        </NavLink>

        <NavLink to={'/vendor'} style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className="p-1 mb-1 text-bold flex items-center hover:cursor-pointer hover:bg-[#a2d]"> <Truck size={20} weight="fill" className="mr-2" /><h2 className="ml-2">Vendor</h2></div>
        </NavLink>
        <NavLink to={'/reports'} style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className="p-1 mb-1 text-bold flex items-center hover:cursor-pointer hover:bg-[#a2d]"> <FileText size={20} weight="fill" className="mr-2" /><h2 className="ml-2">Reports</h2></div>
        </NavLink>

        <NavLink to={'/inventory'} style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className="p-1 mb-1 text-bold flex items-center hover:cursor-pointer hover:bg-[#a2d]"> <ArchiveBox size={20} weight="fill" className="mr-2" /><h2 className="ml-2">Inventory</h2></div>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
