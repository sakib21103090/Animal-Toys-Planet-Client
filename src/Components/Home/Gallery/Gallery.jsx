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
                <h4 className="text-center font-bold text-black text-5xl m-4">Toys  Gallery</h4>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 m-4">
        <div className="aos-item" data-aos="fade-up">
          <img   src={`https://i.ibb.co/0mDjYyX/1.jpg`} alt="Image 1" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/hVQcKdW/2.jpg`} alt="Image 2" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/tYNCkg4/3.jpg`} alt="Image 3" className="w-[600px] h-[260px]  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/jw4bVMF/4.jpg`} alt="Image 3" className="w-[600px] h-[260px]  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/ydf3VYb/5.jpg`} alt="Image 3" className="w-[600px] h-[260px]  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/4YzPcXj/6.jpg`} alt="Image 3" className="w-[600px] h-[260px]  rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/3C6qP8F/7.jpg`} alt="Image 3" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/WvnV7gH/8.jpg`} alt="Image 3" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/8YzcBz6/9.jpg`} alt="Image 3" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/SBBvWjY/11.jpg`} alt="Image 3" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/Hgq1KHP/12.jpg`} alt="Image 3" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/9NMqT1W/13.jpg`} alt="Image 3" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/cJn62DM/14.jpg`} alt="Image 3" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/CvJLsw7/3B-c.jpg`} alt="Image 3" className="w-[600px] h-[260px] rounded" />
        </div>
        <div className="aos-item" data-aos="fade-up">
          <img src={`https://i.ibb.co/BBt0FjW/15.jpg`} alt="Image 3" className="w-[600px] h-[260px] rounded" />
        </div>
        {/* Add more images as needed */}
      </div>
        </div>

        
    );
};

export default Gallery;