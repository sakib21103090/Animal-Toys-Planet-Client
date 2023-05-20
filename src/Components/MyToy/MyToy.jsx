import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const MyToy = () => {
    const [MyToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/MyToys/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setMyToys(data);
          });
      }, [user]);
    return (
      <div>
      <div>

      </div>
      <h1 className="text-center p-4  text-4xl font-bold">My Toys</h1>
  
      <div className='m-[40px]'>
      <div className="overflow-x-auto ">
  <table className="table table-compact w-full">
    <thead>
      <tr className="text-lime-700">
        <th>SL</th>  
        <th>Toy Name</th> 
        <th>Sub-category</th> 
        <th>pictureUrl</th> 
        <th>Price</th> 
        <th>Available Quantity</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead> 
    <tbody>
       {MyToys?.map((Toys, index) => (
        <tr className='text-black'>
          <th>{index+1}</th> 
         
        <td>{Toys.name}</td> 
        <td>{Toys.subCategory}</td> 
        <td><img className='w-[60px] rounded-full' src={Toys.pictureUrl} alt="" /></td> 
        <td>{Toys.price}</td> 
        <td>{Toys.quantity}</td>
        <td>
        <button className="btn btn-outline bg-red-400">Update</button>
          </td>
        <td>
        <button className="btn btn-outline bg-red-400">Delete</button>
          </td>
        </tr>
      ))}
      

    </tbody> 
    <tfoot>
      <tr>
      <th>SL</th> 
      <th> SellerName</th> 
        <th>Toy Name</th> 
        <th>Sub-category</th> 
        <th>Price</th> 
        <th>Available Quantity</th>
        <th>Button</th>
      </tr>
    </tfoot>
  </table>
</div>
      </div>
  </div>
    );
};

export default MyToy;