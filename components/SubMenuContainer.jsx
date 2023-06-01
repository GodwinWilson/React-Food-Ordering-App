import { ChevronRightRounded } from '@mui/icons-material'
import React from 'react'

const SubMenuContainer = ({name}) => {
  return (
    <>
        <h3 className='font-bold text-lg'>{name}</h3>
        <div className='flex items-center justify-between space-x-2 px-2'>
          <p className='text-cyan-500 text-xs'>View All</p>
        <i className='bg-cyan-400 rounded-md'><ChevronRightRounded className='text-white'/></i>  
        </div>
        
    </>
  )
}

export default SubMenuContainer