import React from 'react';
import img1 from '../../../assets/6b.jpg'
import img2 from '../../../assets/3B.jpg'
import img3 from '../../../assets/2F.jpg'
import img4 from '../../../assets/j1.jpg'
import img5 from '../../../assets/5b.jpg'
import img6 from '../../../assets/sc14581.jpg'

const Banner = () => {
    return (
        <div className="carousel  md:h-[800px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
             <div className='text-white space-y-7  pl-12 w-1/2'>
             <h3 className=' text-6xl font-bold text-lime-300' >Pet Pals</h3>
              <p className="text-2xl text-white"> Bring home the joy of having pets with adorable pet-themed toys. <br /> Example Toys: Plush cats, dogs, hamsters, and rabbits; pet care playsets, pet carrier sets, and pet grooming kits </p>
             </div>
      
      
          </div>
          <div className="absolute flex justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide4" className="btn btn-circle  bg-red-600 mr-4">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2}  className="w-full rounded-xl" />
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
             <div className='text-white space-y-7  pl-12 w-1/2'>
             <h3 className=' text-6xl font-bold text-lime-300' >Woodland Creatures </h3>
             <p className="text-2xl text-white">Explore the enchanting world of woodland animals. <br /> Example Toys: Plush foxes, bears, squirrels, and rabbits; forest playsets with trees, logs, and animal figurines. </p>
             </div>
      
      
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle bg-red-600  mr-4">❮</a> 
            <a href="#slide3" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3}  className="w-full rounded-lg" />
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
             <div className='text-white space-y-7  pl-12 w-1/2'>
             <h3 className=' text-6xl font-bold text-lime-300' >Aquatic Adventures </h3>
             <p className="text-2xl text-white"> Dive into underwater fun with aquatic animal toys. <br /> Example Toys: Dolphin plushies, shark figures, underwater playsets with coral reefs and marine animals, bath toys. </p>
             </div>
      
      
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle  bg-red-600  mr-4">❮</a> 
            <a href="#slide4" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4}  className="w-full rounded-lg" />
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
             <div className='text-white space-y-7  pl-12 w-1/2'>
             <h3 className=' text-6xl font-bold text-lime-300' >Jungle Explorers </h3>
             <p className="text-2xl text-white">Venture into the wild with jungle animal toys. <br /> Example Toys: Plush lions, elephants, monkeys, and tigers; jungle playsets with trees, vines, and animal figurines. </p>
             </div>
      
      
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle bg-red-600  mr-4">❮</a> 
            <a href="#slide5" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5}  className="w-full rounded-lg" />
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
             <div className='text-white space-y-7  pl-12 w-1/2'>
             <h3 className=' text-6xl font-bold text-lime-300' >Feathered Flyers </h3>
             <p className="text-2xl text-white">Soar through the skies with bird-themed toys <br /> Example Toys:  Plush owls, eagles, parrots, and penguins; birdhouse kits, flying bird toys, educational bird identification sets.</p>
             </div>
      
      
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle bg-red-600  mr-4">❮</a> 
            <a href="#slide6" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6}  className="w-full rounded-lg" />
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
             <div className='text-white space-y-7  pl-12 w-1/2'>
             <h3 className=' text-6xl font-bold text-lime-300' >Roaming Safari </h3>
             <p className="text-2xl text-white">Explore the enchanting world of woodland animals. <br /> Example Toys: Plush foxes, bears, squirrels, and rabbits; forest playsets with trees, logs, and animal figurines. </p>
             </div>
      
          </div>
          <div className="absolute flex justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide4" className="btn btn-circle bg-red-600 mr-4">❮</a> 
            <a href="#slide1" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div>
      </div>
      
    );
};

export default Banner;