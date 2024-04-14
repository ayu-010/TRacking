import React from 'react';

import track1 from '../utils/track1.jpg';
import { TypeAnimation } from 'react-type-animation';
import Footer from '../component/Footer';
import NavBar from '../component/NavBar';
import Main from '../component/Home/Main';
const Home = () => {
  return (
    <div className='w-11/12 mx-auto'>
    {/* <NavBar></NavBar> */}
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ml-4 '>
        <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1'>
          <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>
              Hello welcome to "track"  your
             
              <div>
 
    <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      500,
      'DAILY', // initially rendered starting point
      1000,
      'EXPENSES',
      1000,
      'SAVING',
      1000,
      // '',
      // 500,
    ]}
    speed={50}
    style={{ fontSize: '1em', color: '#FF1493' }}
    repeat={Infinity}
   
  />
</div>


            </h1>
            <p className='text-xl'>
            Take control of your finances by tracking your expenses with our intuitive money tracking system.
      Set budgets, categorize transactions, and visualize your spending habits to achieve your financial goals.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-6">MORE</button>
        </div>
        <div className='w-full md:w-1/2 order-1 mt-24 ml-4'>
          <img src={track1} width={"500px"} height={"200px"} alt="Track 1"></img>
        </div>
      </div>
      <Main/>
      {/* <Footer></Footer> */}

    </div>
  );
}

export default Home;
