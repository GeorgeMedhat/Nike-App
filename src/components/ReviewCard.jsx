import React from 'react'
import { star } from '../assets/icons'

function ReviewCard(props) {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img
            src={props.img}
            alt={props.customerName}
            width={120}
            height={120}
            className='object-cover rounded-full'
        />
        <p className='mt-6 max-w-sm text-center info-text' >{props.feedback}</p>
        <div className='mt-3 flex justify-center gap-2.5 '>
            <img
                src={star}
                alt=''
                width={24}
                height={24}
                className='object-contain m-0'
            />
            <p className='text-xl font-montserrat text-slate-gray font-semibold'>{props.rating}</p>
        </div>
        <h3 className='mt-1 font-palanquin text-3xl text-center font-semibold'>{props.customerName}</h3>
    </div>

  )
}

export default ReviewCard