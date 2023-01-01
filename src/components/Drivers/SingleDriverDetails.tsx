import React from 'react'
import d2023 from '../../datas/2023/drivers.json'
import { Link, useParams } from 'react-router-dom';

export default function SingleDriverDetails() {

    // const params = useParams() as any;
    const params = useParams<{id: any}>()
    
  return (
    <div className='text-center text-white'>
      <>
        {params.id}
        {/* {d2023.driver.map((driver) => {
          return (
          <h1>{driver.name}</h1>)
        })} */}

        <h2>{d2023.driver[params.id].name}</h2>
        <h3>{d2023.driver[params.id].country}</h3>
        <p>{d2023.driver[params.id].dob}</p>
        
        <Link to='/drivers'>Back</Link>
        </>
    </div>
  )
}
