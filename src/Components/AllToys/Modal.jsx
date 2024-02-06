import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Modal = () => {
    const view = useLoaderData();
    
    console.log(view)
    return (

<div className="hero-content  p-20  flex-col lg:flex-row-reverse">
<div className="text-center  lg:text-left">
<h2 className="card-title font-bold text-3xl">{view.name}</h2>
       <div className='text-purple-800 text-2xl '>
       <p> <span className='font-bold text-black'>SellerName:</span>{view.sellerName}</p>
       <p><span className='font-bold text-black'>SellerEmail:</span>{view.sellerEmail}</p>
       <p><span className='font-bold text-black'>SubCategory:</span>{view.subCategory}</p>
       <p><span className='font-bold text-black'>Price:$</span>{view.price}</p>
       <p><span className='font-bold text-black'>Rating:</span>{view.rating}</p>
       <p><span className='font-bold text-black'>Quantity:</span>{view.quantity}</p>
       </div>
       </div>

<div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div className="card-body">
    <img className='w-[400px]' src={view.pictureUrl} alt="" />
  </div>
</div>
</div>
      
    );
};

export default Modal;