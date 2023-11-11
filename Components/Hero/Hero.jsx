import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Search from '../SearchDiv/Search'

const Hero = () => {

    useEffect(() => {
    AOS.init({duration: 2000});
    AOS.refresh();
  }, [])

  return (
    <div className='bg-greyish'>

    <div className="px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="mt-12 lg:mt-0">
            <h1 className="mt-2 mb-16 text-5xl font-bold tracking-normal md:text-4xl xl:text-6xl bg-gradient-to-r from-green-500 to-[#4f7942] text-transparent bg-clip-text">
    Join the movement <br /><span className="text-primary">against climate change</span>
    </h1>

        <a
          className="mb-2 inline-block rounded bg-blueColor px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]
           transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blueColor focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
          data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
        <a
          className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
          data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
      </div>
      <div className="mb-12 lg:mb-0 hidden md:flex">
        <img src="https://www.afro.who.int/sites/default/files/2023-05/SHUTTERSTOCK%20Credit%20-%20Vegetation%20contrast.jpg"
          className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Hero
