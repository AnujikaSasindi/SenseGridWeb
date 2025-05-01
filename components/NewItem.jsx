import Image from 'next/image'
import React from 'react'

function NewItem() {
  return (
    <div className='absolute ml-75 -bottom-30 flex w-3/5 h-auto py-[-10] rounded-lg px-10 bg-gradient-to-r from-[#09122C] to-[#000] border border-gray-400'>
        <div className='w-78 h-40 rounded-lg bg-gradient-to-r from-[#3e5151] to-[#decba4] my-10 overflow-y-hidden'>
            <img src="./assets/product1.png"  alt='' className='w-15 px-5 sm:w-auto' />
        </div>
        <div className='justify-right pl-20 m-auto'>
            <div className='items-center'>
                <button className='flex items-center font-medium text-bold py-0 px-1 sm:px-6 text-[#00faff] bg-[#141E30] rounded-3xl hover:bg-gray-200'>
                    LATEST
                </button>
            </div>
            <div>
                <h1 className='text-white text-4xl font-bold'>Pre-order your Product now</h1>
                <p className='text-white pt-5 text-base'>Embed intelligence into anything, anywhere with Particle's 5G-connected, AI-accelerated single-board computer.</p>
            </div>
        </div>
    </div>
  )
}

export default NewItem