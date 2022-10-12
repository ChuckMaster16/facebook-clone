import React from 'react'
import Image from 'next/image'
import HeaderIcon from '../Components/HeaderIcon'
import {BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon} from "@heroicons/react/solid";
import {FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/react"


function Header({active}) {
  const { data: session, status } = useSession()
  return (
    <div className="flex items-center sticky top-0 z-50 bg-white lg:px-5 shadow-md">
        <Image
        src="https://res.cloudinary.com/chuckmaster/image/upload/v1664890504/facebook%20clone%20files/facebook.logo_e9gsv9.png"
        width={40} height={40} layout="fixed"/>

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <input className="hidden md:inline-flex flex ml-2 mr-2 bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search Facebook "/>
          <SearchIcon className="h-6 text-blue-400 "/>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <div className="flex items-center space-x-6 md:space-x2">
            <HeaderIcon active Icon={HomeIcon}/>
            <HeaderIcon Icon={FlagIcon}/>
            <HeaderIcon Icon={PlayIcon}/>
            <HeaderIcon Icon={ShoppingCartIcon}/>
            <HeaderIcon Icon={UserGroupIcon}/>

          </div>
      </div>
      <div className="flex items-center sm:space-x-2 justify-end">

      <Image
      onClick={()=> signOut()}
      src={session.user.image}
      className="rounded-full cursor-pointer"
      width="40"
      height="40"
      layout="fixed"
      />


        <p className="font-semibold  whitespace-nowrap pr-3">
        {session.user.name}</p>
        <ViewGridIcon className="icon"/>
        <ChatIcon className="icon"/>
        <BellIcon className="icon"/>
        <ChevronDownIcon className=" icon"/>
      </div>
    </div>
  )
}

export default Header;
