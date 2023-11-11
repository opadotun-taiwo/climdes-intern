import  { useState, useEffect } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Audio } from 'react-loader-spinner';
import { Data } from '../../Data/data';

const Jobs = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'technical', 'non-technical'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating an API call with a delay
        setLoading(true);
        // Replace the setTimeout with your actual data fetching logic
        setTimeout(() => {
          setJobs(Data);
          setLoading(false);
        }, 3000);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);

  const filteredData = jobs.filter((item) => {
    if (filter === 'all') {
      return true;
    } else {
      return item.tag.toLowerCase() === filter.toLowerCase();
    }
  });

  const tagButtons = ['all', 'technical', 'non-technical'].map((tag) => (
    <button
  key={tag}
  onClick={() => setFilter(tag)}
  className={`filterButton ${filter === tag ? 'active' : ''}`}
  style={{
    backgroundColor: filter === tag ? '#4f7942' : '#9cdf8a',
    color: filter === tag ? 'white' : 'black',
    borderRadius: '10px',
    padding: '5px 10px',
    fontSize: '15px',
    // Add media queries for responsiveness
    '@media (maxWidth: 600px)': {
      fontSize: '10px', // Adjust padding for smaller screens
    },
    '@media (maxWidth: 400px)': {
      fontSize: '5px', // Further adjust padding for even smaller screens
    },
  }}
>
  {tag === 'all' ? 'All Jobs' : tag === 'technical' ? 'Technical Jobs' : 'Non-Technical Jobs'}
</button>

  ));

  return (
    <div>
      {loading && 
      <p className='flex justify-center items-center mt-[100px]'>
        <Audio
            height="100"
            width="100"
            color="#4f7942"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
        </p>}
      {error && <p>Error: {error.message}</p>}

      {!loading && !error && (
        <div>
          <div className='filterButtons flex justify-center items-center rounded-b-[20px] gap-[10px]
         bg-white p-5 shadow-lg shadow-greyish-700'>{tagButtons}</div>
          <div className='jobContainer flex gap-10 justify-center items-center flex-wrap py-[100px]' data-aos="slide-up">
            {filteredData.map((item) => (
              <div
                className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyish-400/700 hover:shadow-lg'
                key={item.id}
              >
                <span className='flex justify-center items-center gap-4'>
              <h1 className='text-[16px] font-semibold group-hover:text-white'>{item.position}</h1>
              <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive /> {item.duration}
              </span>
            </span>
            <h6 className='text-[#ccc]'>{item.location}</h6>

            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
              {item.description}
            </p>

            <div className='company flex items-center gap-2'>
              <img src={item.logo} alt='Company logo' width={15} height={15}/>
              <span className='text-[14px] py-[1rem] block group-hover:text-white'>{item.company}</span>
            </div>

            <a href={item.applyLink}><button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px]
             font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-textColor'>Apply now</button></a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;


















