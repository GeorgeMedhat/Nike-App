import React from 'react'
import { star } from '../assets/icons'

function PopularProductCard(props) {
  return (
    <div className='flex flex-1 flex-col w-fu;; max-sm:w-full'>
        <img
            src={props.imgURL}
            alt='product'
            className='w-[280px] h-[280] hover:shadow-lg hover:shadow-[#ff5040] rounded-3xl '
        />
        <div className='mt-8 flex justify-start gap-2.5'>
            <img
                src={star}
                alt="rating"
                width={24}
                height={24}
            />
            <p className='font-montserrat text-xl leading-normal text-slate-gray' >4.5</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{props.name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-[#ff5040] leading-normal'>{props.price}</p>
    </div>
  )
}

export default PopularProductCard