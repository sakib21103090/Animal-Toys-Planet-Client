import React from 'react';



const LoadData = ({Toy}) => {
  const { picture, name, price, rating } =Toy;
    return (

      <div className="max-w-md w-full  mx-auto h-full bg-white shadow-lg rounded-lg overflow-hidden">
<figure><img className="card-Image mt-6 rounded"  src={picture} alt="" /></figure>
<div className="card-body  card-bg">
  <h2 className="card-title text-primary-color text-2xl  ml-32">Name:{name}</h2>
  <p className=' text-primary-color'>Price:{price}</p>
  <p className='text-primary-color '>Rating:${rating}</p>
 
 
  </div>
</div>

 
    
       
    );
};

export default LoadData;