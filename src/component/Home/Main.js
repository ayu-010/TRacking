import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import HighlightText from '../common/HighlightText'
import CTABUTTON from '../common/CTABUTTON'
import Data from "../../data/data";
import Card from "../Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assests/Images/image1.jpg";
import image2 from "../../assests/Images/image2.jpg";
import image4 from "../../assests/Images/image4.png";






import Money from "../../assests/video/Money.mp4"


const Main = () => {
  console.log("data is", Data);
  const [muted, setMuted] = useState(true); 
  
  const toggleMute = () => {
    setMuted(!muted);
  };


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>

<div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 py-2 mt-4 ">
       

        <div className=" mr-10">
        <Slider {...settings}>
            {Data.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
        

<div className=' mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7 '>

<div className=' flex flex-row gap-5 mb-10 mt-[95px] '>
         <div className='text-4xl font-semibold w-[45%] ml-9'>
            Get your saving habit enrich that  you need for   your better financial management <HighlightText text={"Saving that you need"}/>
         </div>

         <div className='flex flex-col gap-10 w-[40%] items-start '> 
     <p className=' text-[22px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex do Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, laborum!</p>
  <CTABUTTON active={true}

     linkto={"/signup"} >Learn MOre
     
     </CTABUTTON>

     </div>

     
</div>
<div>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS264h6JnYe0d4IAwP-77gN4pzxKvCy9sZxXg&s" width={"500px"} height={"400px"} className= "mb-4"></img>
 </div>

  
 <div className='relative'>
  <video
    muted={muted}
    loop
    autoPlay
    className="mb-4"
  >
    <source src={Money} type='video/mp4'></source>
  </video>
  <button onClick={toggleMute} className="absolute bottom-0  -right-4 m-4 px-4 py-2 bg-gray-900 text-white rounded-lg shadow-md">
    {muted ? 'Unmute' : 'Mute'}
  </button>
</div>

<div className=" flex gap-3  mb-24  mt-24 relative ">

  <div className="  w-1/3 h-1/2 ">
    <img src={image1} alt="Image 1"  className="object-contain  transform rotate-6 "/>
  </div>
  <div className="  w-1/3 h-1/2  ">
    <img src={image2} alt="Image 2" className=" object-contain transform -rotate-12  " />
  </div>
  <div className="  w-1/3 h-1/2">
    <img src={image1} className=" object-contain transform rotate-12    "  />
  </div>
  
</div>






{/* <TimelineSection/> */}
{/* <LearningLanguageSection/> */}
</div>
      </div>
     
    </>
  );
};

export default Main;
