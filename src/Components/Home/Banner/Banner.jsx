import React from 'react';
import img1 from '../../../assets/6b.jpg'
import img2 from '../../../assets/3B.jpg'
import img3 from '../../../assets/2F.jpg'
import img4 from '../../../assets/j1.jpg'
import img5 from '../../../assets/5b.jpg'
import img6 from '../../../assets/sc14581.jpg'

const Banner = () => {
  return (
    <div>
        <div className="carousel w-full">
<div id="item1" className="carousel-item w-full">
<img src={img1} className="w-full h-[600px]" />
</div> 
<div id="item2" className="carousel-item w-full">
<img src={img2} className="w-full h-[600px]" />
</div> 
<div id="item3" className="carousel-item w-full">
<img src={img3} className="w-full h-[600px]" />
</div> 
<div id="item4" className="carousel-item w-full">
<img src={img4} className="w-full h-[600px]" />
</div>
<div id="item4" className="carousel-item w-full">
<img src={img5} className="w-full h-[600px]" />
</div>
<div id="item4" className="carousel-item w-full">
<img src={img6} className="w-full h-[600px]" />
</div>
</div> 
<div className="flex justify-center w-full  h-[5px] py-2 gap-2">
<a href="#item1" className="btn  bg-lime-400 text-black">1</a> 
<a href="#item2" className="btn h-[10px] bg-lime-400 text-black">2</a> 
<a href="#item3" className="btn h-[10px] bg-lime-400 text-black">3</a> 
<a href="#item4" className="btn h-[10px] bg-lime-400 text-black">4</a>
<a href="#item4" className="btn h-[10px] bg-lime-400 text-black">5</a>
<a href="#item4" className="btn h-[10px] bg-lime-400 text-black">6</a>
</div>
    </div>
);
};

export default Banner;