import React from 'react';



const LoadData = ({Toy}) => {
  const { picture, name, price, rating } =Toy;
    return (

      <div className="max-w-md w-full ml-2  mx-auto h-full bg-white  rounded-lg overflow-hidden">
<figure><img className="card-Image mt-6 p-4 rounded-xl"  src={picture} alt="" /></figure>
<div className="card-body">
  <h2 className="card-title text-primary-color text-2xl  "> <span className='font-bold'>Name:</span>{name}</h2>
  <div>
    <h3 className='text-red-500 text-left '> <span className='font-bold text-black'>Price:</span>{price}</h3>
  </div>
  
  <div class="rating ">
                                <i class="fa-solid fa-star field"></i>
                                <i class="fa-solid fa-star field"></i>
                                <i class="fa-solid fa-star field"></i>
                                <i class="fa-solid fa-star empty"></i>
                                <i class="fa-solid fa-star empty">  <span className='text-black'>{rating}</span></i>
                               
                            </div>
 
 
  </div>
</div>

 
    
       
    );
};

export default LoadData;