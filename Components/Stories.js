import React from 'react'
import StoryCard from '../Components/StoryCard'

const stories = [
  {
    name:"Bill Gates",
    src:"https://res.cloudinary.com/chuckmaster/image/upload/v1665445550/facebook%20clone%20files/bill_gates_mc6hs2.jpg",
    profile:"https://res.cloudinary.com/chuckmaster/image/upload/v1665445550/facebook%20clone%20files/bill_gates_mc6hs2.jpg",
},{
  name:" Ellon Musk",
  src:"https://res.cloudinary.com/chuckmaster/image/upload/v1665445729/facebook%20clone%20files/elon_khj0fz.jpg",
  profile:"https://res.cloudinary.com/chuckmaster/image/upload/v1665446415/facebook%20clone%20files/Elon_Musk_h7f6vd.jpg",
},{
  name:"Jeff Bezoz",
  src:"https://res.cloudinary.com/chuckmaster/image/upload/v1665445550/facebook%20clone%20files/Jeff_bez_wl5fue.jpg",
  profile:"https://res.cloudinary.com/chuckmaster/image/upload/v1665446415/facebook%20clone%20files/jeff-bezos_ouv8yv.jpg",
},{
  name:"Donald Trump",
  src:"https://res.cloudinary.com/chuckmaster/image/upload/v1665445550/facebook%20clone%20files/donald_trump_brkyur.webp",
  profile:"https://res.cloudinary.com/chuckmaster/image/upload/v1665446415/facebook%20clone%20files/trump_tau3wm.jpg",
},
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) =>(
        <StoryCard
        key={story.src}
        name={story.name}
        src={story.src}
        profile={story.profile}
        />
      ))}

    </div>
  )
}

export default Stories
