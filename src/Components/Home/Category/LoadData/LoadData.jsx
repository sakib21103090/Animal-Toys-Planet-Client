import React from 'react';



const LoadData = ({Toy}) => {
  const { picture, name, price, rating } =Toy;
    return (
        
      <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Name:{name}</h1>
        <p className="py-6 font-bold">Price: {price}</p>
        <p>Rating:{rating}</p>
        <div>
        <button htmlFor="my-modal-6" className="btn btn-outline btn-sm mt-6 bg-lime-400">Details</button>
        </div>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <img className='w-[400px]' src={picture} alt="" />
        </div>
      </div>
    </div>
     
       
    );
};

export default LoadData;