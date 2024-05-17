import { BellSimple, Calculator, ChatCircleDots, Keyboard } from "phosphor-react"

const Navbar = () => {
  return (
    <navbar className="flex  w-full h-[10vh] justify-end items-center  bg-[#41436a] text-white">
        <div className="m-3 p-2 flex bg-[#373737] text-white rounded-sm">
            <button className="text-center ">+Create New</button>
        </div>
        <div className="p-2 m-3 flex bg-[#e4d00a] rounded-sm text-white">
            <button className="text-center ">Instant Approval</button>
        </div>
        <div className="p-1 m-2 flex">
            <button className="text-center "><Calculator weight="fill" size={20}/></button>
        </div>
        <div className="p-1 m-2 flex ">
            <button className="text-center "><Keyboard size={20} weight="fill"/></button>
        </div>
        <div className="p-1 m-2 flex">
            <button className="text-center "><BellSimple size={20} weight="fill"/></button>
        </div>
        <div className="p-1 m-2 flex">
            <button className="text-center flex"><h2>Support</h2><ChatCircleDots size={20}/></button>
        </div>
        <div className="p-1 m-2 flex">
            <button className="text-center ">My Account </button>
        </div>
    </navbar>
  )
}

export default Navbar
