import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Gallery = () => {
    useEffect(() => {
        Aos.init({
          multiple: true,
        });
      }, []);
    return (
        <div>
            <div>
                <h4 className="text-center font-bold text-black text-5xl m-6 p-6">Toy Gallery</h4>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 m-4">
        <div className="aos-item" data-aos="fade-up">
          <img   src={`https://i.ibb.co/DKskJDk/repe1.jpg`} alt="Image" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/DgbLR0W/sing-1.jpg`} alt="Image" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/R9b1bns/td1.jpg`} alt="Image" className="w-[600px] h-[260px]  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/YdQ0m7t/repe2.jpg`} alt="Image" className="w-[600px] h-[260px]  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/ydf3VYb/5.jpg`} alt="Image" className="w-[600px] h-[260px]  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/4YzPcXj/6.jpg`} alt="Image" className="w-[600px] h-[260px]  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/3C6qP8F/7.jpg`} alt="Image" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/WvnV7gH/8.jpg`} alt="Image" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/QdGqgW1/sw2.jpg`} alt="Image" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/tb5TWhP/ti2.jpg`} alt="Image" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/q9y5RHX/tt2.jpg`} alt="Image" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/d238Kqs/ti1.jpg`} alt="Image" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/sCDj5sk/tt1.jpg`} alt="Image" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={` https://i.ibb.co/cN3WYyH/td3.jpg`} alt="Image" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/QdGqgW1/sw2.jpg`} alt="Image" className="w-[600px] h-[260px] rounded" />
        </div>
        {/* Add more images as needed */}
      </div>
        </div>

        
    );
};

export default Gallery;