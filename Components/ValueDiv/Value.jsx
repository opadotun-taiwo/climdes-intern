import React from 'react'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>The value that holds true</h1>

      <div className='grid gap-[5rem] md:gap-[10rem] grid-cols-1 md:grid-cols-3 items-center'>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[0.8rem] bg-[#dedef8] h-[40px] w-[40px] 
            justify-center items-center'>
              <img src='https://png.pngtree.com/png-vector/20220730/ourmid/pngtree-circle-eco-friendly-logo-symbol-png-image_6093131.png' alt='' width={30} height={30} className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Eco-conscious
            </span>

          </div>

          <p className='text-[13px] text-textColor opacity-[0.7] py-[1rem] font-normal'>
            We are concious about the ecosystem and welcome anybody that is passionate about contributing
          </p>

        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[0.8rem] bg-[#dedef8] h-[40px] w-[40px] 
            justify-center items-center'>
              <img src='https://png.pngtree.com/png-vector/20220730/ourmid/pngtree-circle-eco-friendly-logo-symbol-png-image_6093131.png' alt='' width={30} height={30} className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Science Driven
            </span>

          </div>

          <p className='text-[13px] text-textColor opacity-[0.7] py-[1rem] font-normal'>
             Our approached are well documented and backed by science fact. We are intelligent!
          </p>

        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[0.8rem] bg-[#dedef8] h-[40px] w-[40px] 
            justify-center items-center'>
              <img src='https://png.pngtree.com/png-vector/20220730/ourmid/pngtree-circle-eco-friendly-logo-symbol-png-image_6093131.png' alt='' width={30} height={30} className='w-[70%]'/>
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Responsible
            </span>

          </div>

          <p className='text-[13px] text-textColor opacity-[0.7] py-[1rem] font-normal'>
             We pride our self as been responsible in our art, act and science approaches. We also welcome reposnsible students.
          </p>

        </div>

      </div>
    </div>
  )
}

export default Value
