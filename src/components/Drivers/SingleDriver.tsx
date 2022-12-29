import React from 'react'
import Image from '../Image'

export default function SingleDriver(props: {img: any, Name: String, no: String, team: String, country: String, pob: String, dob: String, points: String, countryImg: any}) {
  return (
    <div>
        <div className="p-10">  
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full" src={props.img} alt="" />
      <div className="px-6 py-4 bg-[#161616]">
        <div className="font-bold text-3xl mb-2 text-white">{props.no}</div>
        <div className='flex justify-center'>
          <Image src={props.countryImg} alt='' className='w-[15%]'/>
          </div>
        <p className="text-gray-300 font-bold text-2xl py-2">
          {props.Name}
        </p>
        <p className="text-gray-300 text-base py-2">
          {props.team}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 bg-[#161616]">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.dob}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.pob}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.points} Points</span>
      </div>
    </div>
  </div>
    </div>
  )
}
