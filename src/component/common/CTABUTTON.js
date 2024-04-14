import React from 'react'

const CTAButton = ({value,active}) => {
  return (
    <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold ${
        active? "bg-pink-400  text-black":" bg-gray-500"
    } hover:scale-95 transition-all duration-200`}
    >{value}</div>
  )
}

export default CTAButton