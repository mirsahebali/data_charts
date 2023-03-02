import * as React from 'react';
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import {HiOutlineShoppingBag} from "react-icons/hi"
import {IoSettingsOutline} from "react-icons/io5"
import Link from "next/link";


function Sidebar({ children }: any) {
return (
  <div className='flex'>
    <div className='fixed w-20 h-screen p-4 bg-white border-l-[1px] flex flex-col justify-between'>
<div className='flex flex-col items-center'>
<Link href={`/`}>
  <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
<RxSketchLogo size={20}/>
  </div>
</Link>
<span className="border-b-[1px] border-gray-200 w-full p-2"></span>
<Link href={`/`}>
  <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
    <RxDashboard></RxDashboard>
  </div>
</Link>
<Link href={`/`}>
  <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
    <RxPerson></RxPerson>
  </div>
</Link><Link href={`/`}>
  <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
    <HiOutlineShoppingBag></HiOutlineShoppingBag>
  </div>
</Link><Link href={`/`}>
  <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
    <IoSettingsOutline></IoSettingsOutline>
  </div>
</Link>
</div>
    </div>
    <main className='ml-20 w-full'>{children}</main>
  </div>
  )
}

export default Sidebar;
