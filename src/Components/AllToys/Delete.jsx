import React from 'react';

const Delete = ({Toys,handleDelete,index}) => {
    const {_id}=Toys;

    return (
        <tr className='text-black'>
        <th>{index+1}</th> 
       
      <td>{Toys.name}</td> 
      <td>{Toys.subCategory}</td> 
      <td><img className='w-[60px] rounded-full' src={Toys.pictureUrl} alt="" /></td> 
      <td>{Toys.price}</td> 
      <td>{Toys.quantity}</td>
      <td>
      <button className="btn btn-outline btn-sm w-[60px] bg-lime-400">Update</button>
        </td>
      <td>
      <button  onClick={()=>handleDelete(_id)} className="btn btn-outline btn-sm w-[60px] bg-lime-400">Delete</button>
        </td>
      </tr>
    );
};

export default Delete;