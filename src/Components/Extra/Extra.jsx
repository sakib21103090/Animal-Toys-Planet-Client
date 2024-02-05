import React from 'react';

const Extra = () => {
    return (
        <div className='pb-6'>
            <div className='mb-6 mt-6 p-4'><h4 className="text-center font-bold text-black text-5xl mb-2 ">Top Toys Companies</h4>
            <h4 className='text-center text-2xl'>Some information about world top toys companies</h4></div>
            
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 ">
            <div className="card card-bg  w-[400px] h-[500px] shadow-xl text-center mx-auto">
           <figure className="px-10 mt-6">
          <img src={`https://i.ibb.co/7Yf05Mv/c1.jpg`} alt="company picture" className=" rounded-xl w-[400px] " />
           </figure>
           <div className="card-body items-center text-center">
         <h2 className="card-title">ToyCo</h2>
           <p><span className='font-bold'>Address: </span> 123 Main Street, Toyville, USA</p>
           <p>ToyCo is a leading toy manufacturer and retailer, offering a wide range of high-quality toys for children of all ages. With a focus on innovation and creativity. </p>
           
         <div className="card-actions">
      <button className="all-btn">about more</button>
    </div>
  </div>
</div>
<div className="card  w-[400px] h-[500px] card-bg shadow-xl text-center mx-auto">
           <figure className="px-10 pt-10">
          <img src={`https://i.ibb.co/4WSt4Hm/c2.jpg`} alt="company picture" className="rounded-xl w-[400px]" />
           </figure>
           <div className="card-body items-center text-center">
         <h2 className="card-title">LEGO</h2>
           <p><span className='font-bold'>Address: </span>1 LEGO Drive, Bricktown, Denmark</p>
           <p> LEGO is a globally recognized brand that specializes in the production of colorful interlocking plastic bricks and sets. </p>
           
         <div className="card-actions">
      <button className="all-btn">about more</button>
    </div>
  </div>
</div>
            <div className="card   w-[400px] h-[500px] card-bg shadow-xl text-center mx-auto">
           <figure className="px-10 pt-10">
          <img src={`https://i.ibb.co/WnLw2Gn/c3.jpg`} alt="company picture" className="rounded-xl w-[400px]" />
           </figure>
           <div className="card-body items-center text-center">
         <h2 className="card-title">Mattel </h2>
           <p> <span className='font-bold'>Address: </span> 555 Toy Avenue, Playtown, USA</p>
           <p>Mattel is a leading toy company known for iconic brands such as Barbie, Hot Wheels, and Fisher-Price. </p>
           
         <div className="card-actions">
      <button className="all-btn">about more</button>
    </div>
  </div>
</div>
<div className="card  w-[400px] h-[500px] card-bg shadow-xl text-center mx-auto">
           <figure className="px-10 pt-10">
          <img src={`https://i.ibb.co/KWqHVJM/c4.jpg`} alt="company picture" className="rounded-xl w-[400px]" />
           </figure>
           <div className="card-body items-center text-center">
         <h2 className="card-title">Hasbro </h2>
           <p> <span className='font-bold'>Address: </span> 123 Fun Lane, Gameville, USA</p>
           <p>Hasbro is a multinational toy and board game company that delights children and families with popular brands like Monopoly, Nerf, and Transformers. </p>
           
         <div className="card-actions">
      <button className="all-btn">about more</button>
    </div>
  </div>
</div>
<div className="card   w-[400px] h-[500px] card-bg shadow-xl text-center mx-auto">
           <figure className="px-10 pt-10">
          <img src={`https://i.ibb.co/WnLw2Gn/c3.jpg`} alt="company picture" className="rounded-xl w-[400px]" />
           </figure>
           <div className="card-body items-center text-center">
         <h2 className="card-title">Fisher-Price </h2>
           <p> <span className='font-bold'>Address: </span> 555 Toy Avenue, Playtown, USA</p>
           <p>Mattel is a leading toy company known for iconic brands such as Barbie, Hot Wheels, and Fisher-Price. </p>
           
         <div className="card-actions">
      <button className="all-btn">about more</button>
    </div>
  </div>
</div>
<div className="card card-bg  w-[400px] h-[500px]  shadow-xl text-center mx-auto">
           <figure className="px-10 pt-10">
          <img src={`https://i.ibb.co/GkZW5tf/c6.jpg`} alt="company picture" className="rounded-xl w-[400px]" />
           </figure>
           <div className="card-body items-center text-center">
         <h2 className="card-title">MGA Entertainment </h2>
           <p><span className='font-bold'>Address: </span> 456 Playful Avenue, Toyland, USA</p>
           <p>Mattel is a leading toy company known for iconic brands such as Barbie, Hot Wheels, and Fisher-Price.</p>
           
         <div className="card-actions">
      <button className="all-btn">about more</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Extra;