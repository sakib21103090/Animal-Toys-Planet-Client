import React from 'react';

const Modal = ({Toy}) => {
    console.log(Toy)
    return (
        <div className="modal-box ">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={Toy.pictureUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{Toy.name}</h2>
   <div className='text-green-800 text-2xl '>
   <p>sellerName:{Toy.sellerName}</p>
    <p>sellerEmail:{Toy.sellerEmail}</p>
    <p>subCategory:{Toy.subCategory}</p>
    <p>price:${Toy.price}</p>
    <p>rating:{Toy.rating}</p>
    <p>quantity:{Toy.quantity}</p>
   </div>
   
  
  </div>
</div>
                         <div className="modal-action">
                     <label htmlFor="my-modal-6" className="btn btn-outline btn-sm w-[60px] bg-lime-400">Cancel</label>
                       </div>
        </div>
    );
};

export default Modal;