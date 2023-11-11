import React from 'react'
import { useEffect } from 'react'
import {AiOutlineSearch } from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Search = () => {

   useEffect(() => {
    AOS.init({duration: 2000});
    AOS.refresh();
  }, [])

  return (
    <div className='searchDiv flex flex-col justify-center items-center gap-10 bg-greyish rounded-b-[6rem] p-[2.9rem]' data-aos="fade-up">
      
      <form action="" className='w-full'>
        <div className='firstDev flex justify-between items-center rounded-[8px] gap-[10px]
         bg-white p-5 shadow-lg shadow-greyish-700'>

          <div className='flex items-center w-[100%]'>
            <AiOutlineSearch className='text-[25px] icon'/>
            <input type='text' className='bg-trasparent text-[#6f6f6f] focus:outline-none w-[100%]' placeholder='Search by internship placement'/>
            
          </div>

          <button className='bg-blueColor h-full py-4 px-5 rounded-[10px] text-white icon hover:bg-[#9cdf8a]'>Search</button>

         </div>
      </form>

      {/* <div className='firstDev flex justify-center items-center rounded-[8px] gap-[10px]
         bg-white p-4 shadow-lg shadow-greyish-700 w-full'>

        <div className='singleSearch flex flex-col item-center gap-2 w-[100%]'>
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>Sort by:</label>

           <select name='' id='relevance' className='bg-white rounded-[10px] px-6 py-4 outline-none w-[100%]'>
            <option value="">Technical</option>
            <option value="">Non-technical</option>
            <span className='text-[#a1a1a1] text-[12px] cursor-pointer'>Clear all</span>
          </select>

          
        </div>

      </div>
      */}
      
    </div>
  )
}

export default Search
