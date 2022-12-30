import React from 'react'
import Image from '../Image'

export default function NewsCard(props: {title: string, date: string}) {
  return (
    <div className='drop-shadow-xl bg-[#232323] text-white flex flex-col'>
      <Image src='https://www.formula1.com/content/dam/fom-website/races/2023/race-listing/Bahrain%20Testing.jpg.transform/6col/image.jpg' placeholderImg='https://via.placeholder.com/400x200.png?text=This+Will+Be+Shown+Before+Load' alt='' className='drop-shadow-2xl' />
      <h1 className='text-xl font-medium text-start p-5'>{props.title}</h1>
      <h3 className='float-left p-5 font-thin text-md text-gray-300 text-base'>{props.date}</h3>
    </div>
  )
}

// rafc