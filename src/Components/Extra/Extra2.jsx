import React from 'react';

const Extra2 = () => {
    return (

 <div className='m-6'>
    <div><h4 className="text-center font-bold text-black text-5xl m-6 p-6">Top six Toy  brand 2023</h4></div>
    <div>
    <div className="card lg:card-side bg-base-100 shadow-xl">
<figure><div className="h-96 carousel carousel-vertical rounded-box m-6 ">
        <div className="carousel-item h-full ">
          <img className='m-2 rounded w-[600px]' src={`https://i.ibb.co/8Mdy8Mx/b1.jpg`} />
        </div> 
        <div className="carousel-item h-full">
          <img className='m-2 rounded w-[600px]' src={`https://i.ibb.co/NrdD7p4/b2.jpg`} />
        </div> 
        <div className="carousel-item h-full">
          <img className='m-2 rounded w-[600px]' src={`https://i.ibb.co/H2PDJhw/b3.png`} />
        </div> 
        <div className="carousel-item h-full">
          <img className='m-2 rounded w-[600px]' src={`https://i.ibb.co/xSWtt8R/b4.png`} />
        </div> 
        <div className="carousel-item h-full">
          <img className='m-2 rounded w-[600px]' src={`https://i.ibb.co/BN1G9Tb/b5.png`} />
        </div> 
        <div className="carousel-item h-full">
          <img className='m-2 rounded w-[600px]' src={`https://i.ibb.co/47Z6swy/b6.png`} />
        </div> 
        <div className="carousel-item h-full">
          <img className='m-2 rounded w-[600px]' src={`https://i.ibb.co/GkZW5tf/c6.jpg`} />
        </div>
      </div></figure>
<div className="card-body">
  <h2 className="card-title text-6xl font-bold text-red-600">Toy brand </h2>
  <p className='text-5xl text-lime-600'>BRAND FINANCE TOYS 25 2023</p>
  <p className='text-4xl  text-black'>Here are the names of six popular toy brands show the  Vertical carousel.
  <ul className='text-3xl'>
    <li>-LEGO</li>
    <li>-Hasbro</li>
    <li>-Mattel</li>
    <li>-Fisher-Price</li>
    <li>-MGA Entertainment</li>
    <li>-Playmobill</li>
  </ul>
  </p>
  
</div>
</div>
        
    </div>
 </div>
        
    );
};

export default Extra2;