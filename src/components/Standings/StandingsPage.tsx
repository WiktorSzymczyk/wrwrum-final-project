import React from 'react'
import { useState } from 'react';
import d2022 from '../../datas/2023/driverStandings.json'

export default function StandingsPage() {

  const [drivers, setDrivers] = useState(true)

  return (
    <div className='w-full pt-20'>
        <h1 className='text-white text-2xl font-semibold text-center'>STANDINGS</h1>
        <div className='grid grid-cols-2 text-white font-semibold h-10'>
          <h1 onClick={() => setDrivers(!drivers)} className='hover:cursor-pointer'>DRIVERS</h1>
          <h1 className='hover:cursor-pointer'>CONSTRUCTORS</h1>
        </div>
          <div className='w-full text-center text-white'>

          {
            drivers?<h1 className=''>
              <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                        >
                                            No
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                        >
                                            points
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                  <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                            1
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            Jone Doe
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                            jonne62@gmail.com
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
              {/* MAP FUNCTION FOR DRIVERS */}
            </h1>:<h1>NOTDATA</h1>
          }
          </div>
    </div>
  )
}
