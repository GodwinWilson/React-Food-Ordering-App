import React from 'react'
import Visa from '../assets/VisaLogo.png'
import Chip from '../assets/chip.png'

const Debit = () => {
  return (
    <>
        <div className='relative overflow-hidden w-full h-full'>
            <img src={Visa} alt="" className='absolute w-16 right-4 top-8'/>
            <img src={Chip} alt="" className='absolute w-10 left-4 top-12'/>
            <div className='absolute text-white font-medium left-7 bottom-16' id='cardnum'>0123 4567 8987 419</div>
            <div className='absolute text-white font-medium text-sm bottom-8 left-7'>Godwin Wilson</div>
            <div className='absolute text-white font-medium text-xs bottom-8 right-24'>01/23</div>
            <div className='absolute text-white font-medium text-xs bottom-8 right-11'>12/27</div>
            <div className='ring'></div>
        </div>
    </>
  )
}

export default Debit