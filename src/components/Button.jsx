import React from 'react'

function Button(props) {
  if(!props.t){
    return (
      <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none 
      bg-[#ff5040] rounded-full text-white border-none hover:bg-[#a70e00]">
          {props.label}
          {props.withIcon&&<img 
          src = {props.icon} 
          alt={props.label}
          className="ml-2 rounded-full w-5 h-5"
          />}
      </button>
    )
  }
  else {
    return (
      <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none 
      bg-transparent rounded-full text-slate-gray  hover:bg-slate-gray hover:text-white
      text-bold border border-slate-gray ">
          {props.label}
          {props.withIcon&&<img 
          src = {props.icon} 
          alt={props.label}
          className="ml-2 rounded-full w-5 h-5"
          />}
      </button>
    )
  }
}

export default Button