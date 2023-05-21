import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import Delete from '../AllToys/Delete';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { Helmet } from 'react-helmet';

const MyToy = () => {
    const [MyToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext);
    
    
    useEffect(() => {
        fetch(`https://y-ebon-pi.vercel.app/MyToys/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setMyToys(data);
          });
      }, [user]);

      const handleDelete = id => {
        console.log(id)
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://y-ebon-pi.vercel.app/MyToys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                      Swal.fire('Hey', 'Delete Done', 'success');
                        const remaining = MyToys.filter(Toys => Toys._id !== id);
                        setMyToys(remaining);
                    }
                })
        }
    }
    return (
      <div>
        
        <Helmet>
        <title>Animal-Toy-planet |My Toy</title>
      </Helmet>
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
                    <Delete
                    Toys={Toys}
                    handleDelete={handleDelete}
                    index={index}
                    ></Delete>
            ))}

    </tbody> 
    <tfoot>
      <tr>
      <th>SL</th>  
        <th>Toy Name</th> 
        <th>Sub-category</th> 
        <th>pictureUrl</th> 
        <th>Price</th> 
        <th>Available Quantity</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </tfoot>
  </table>
</div>
      </div>
  </div>
    );
};

export default MyToy;