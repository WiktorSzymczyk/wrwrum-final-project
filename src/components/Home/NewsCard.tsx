import React from 'react'
import Image from '../Image'

interface NewsProps{
  title: string, 
  date: string,
}

export default function NewsCard(props: NewsProps) {
  return (
    <div className='drop-shadow-2xl bg-[#232323] text-white flex flex-col'>
        <Image src='https://www.formula1.com/content/dam/fom-website/races/2023/race-listing/Bahrain%20Testing.jpg.transform/6col/image.jpg' alt='' className='drop-shadow-2xl'/>
        <h1 className='text-xl font-medium text-start p-5'>{props.title}</h1>
        <h3 className='float-left p-5 font-thin text-md text-gray-300 text-base'>{props.date}</h3>
    </div>
  )
}
