import React from 'react'

function ShoeCard(props) {

    const handleClick = ()=>{
        if(props.bigShoeImage!==props.img.bigShoe){
            props.changeBigShoeImage(props.img.bigShoe)
        }
    }

  return (
    <div className={`border-2 rounded-xl
    ${props.bigShoeImage===props.img.bigShoe
    ? 'border-[#ff5040]' :'border-hidden'} cursor-pointer max-sm:flex-1 `}
    onClick={handleClick}
    >
        <div className='flex justify-center items-center bg-card bg-center 
        bg-cover sm:h-40 sm:w-40 rounded-xl max-sm:p-4 hover:shadow-lg'>
            <img
                src={props.img.thumbnail}
                alt='shoe collection'
                width={127}
                height={100}
                className='object-contain'
            />
        </div>
    </div>
  )
}

export default ShoeCard