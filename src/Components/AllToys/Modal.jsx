import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Modal = () => {
    const view = useLoaderData();
    
    console.log(view)
    return (

<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
<h2 className="card-title">{view.name}</h2>
       <div className='text-green-800 text-2xl '>
       <p>sellerName:{view.sellerName}</p>
       <p>sellerEmail:{view.sellerEmail}</p>
       <p>subCategory:{view.subCategory}</p>
       <p>price:${view.price}</p>
       <p>rating:{view.rating}</p>
       <p>quantity:{view.quantity}</p>
       </div>
       </div>

<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div className="card-body">
    <img className='w-[400px]' src={view.pictureUrl} alt="" />
  </div>
</div>
</div>
      
    );
};

export default Modal;