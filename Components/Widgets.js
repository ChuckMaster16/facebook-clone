import React from 'react'
import { DotsHorizontalIcon, VideoCameraIcon} from '@heroicons/react/solid'
import {SearchIcon} from '@heroicons/react/outline'
import Contact from './Contact'

const contacts= [
  {src: "https://res.cloudinary.com/chuckmaster/image/upload/v1665446415/facebook%20clone%20files/jeff-bezos_ouv8yv.jpg" ,name:"Jeff Bezoz"},
  {src: "https://res.cloudinary.com/chuckmaster/image/upload/v1665445729/facebook%20clone%20files/elon_khj0fz.jpg" ,name:"Elon Musk"},
  {src: "https://res.cloudinary.com/chuckmaster/image/upload/v1665446415/facebook%20clone%20files/bill_plrekx.jpg" ,name:"Bill Gates"},
  {src: "https://res.cloudinary.com/chuckmaster/image/upload/v1665445550/facebook%20clone%20files/Mark_z_ljjwe7.jpg" ,name:"Mark Zuckerberg"},
  {src: "https://res.cloudinary.com/chuckmaster/image/upload/v1665446415/facebook%20clone%20files/trump_tau3wm.jpg" ,name:"Donald Trump"},
  {src: "https://res.cloudinary.com/chuckmaster/image/upload/v1665534965/facebook%20clone%20files/44_barack_obama_hj6wdq.webp" ,name:"Barack Obama"},
  {src: "https://res.cloudinary.com/chuckmaster/image/upload/v1665534965/facebook%20clone%20files/Julia_Koch_x8rowk.jpg" ,name:"Julia Koch"},
];
function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
          <h2 className="text-xl">Contacts</h2>
          <div className="flex space-x-2">
          <VideoCameraIcon className="h-6"/>
          <SearchIcon className="h-6"/>
          <DotsHorizontalIcon className="h-6"/>
        </div>
      </div>
      {contacts.map((contact)=>(
        <Contact key={contact.src} src={contact.src} name={contact.name}/>
      ))}
    </div>
  )
}

export default Widgets;
