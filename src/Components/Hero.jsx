import React from 'react'
import SupperaCanvas from './canvas/Suppera'

function Hero() {
  return (
   <>
    <div className='relative h-screen w-full'>
      <SupperaCanvas car='lamborghini_aventador' />
    </div> 
    <div className='relative h-screen w-full'>
      <SupperaCanvas car='camaro_ls-dctm' />
    </div>
    <div className='relative h-screen w-full'>
      <SupperaCanvas car='lamborghini_centenario_roadster_sdc' />
    </div>
    <div className='relative h-screen w-full'>
      <SupperaCanvas car='Super' />
    </div>
   </>
      
  )
}

export default Hero