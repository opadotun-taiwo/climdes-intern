import React from 'react'

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-[8] grid grid-cols-1 md:grid-cols-5 m-auto justify-center'>
      
      <div className='md:mr-10'>
        <div className='logoDiv'>
          <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
            <strong>Climdes</strong>
          </h1>
        </div>
        <p className='text-white pb-[13px] opacity-[0.7] leading-7'>Making the world a batter place by investing in climate change talents</p>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-medium pb-[1.5rem] text-white'>
            Company
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>About us</li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>Community</li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>More</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-medium pb-[1.5rem] text-white'>
            Resources
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>About us</li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>Community</li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>More</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-medium pb-[1.5rem] text-white'>
            Interns
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>About us</li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>Community</li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>More</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-medium pb-[1.5rem] text-white'>
            Contact
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>About us</li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>Community</li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>More</li>
        </div>
      </div>
      

    </div>
  )
}

export default Footer
