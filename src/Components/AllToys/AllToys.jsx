import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [AllToys, setAllToys] = useState([]);
    // const [AllId, setAllId] = useState([]);
    // const { _id } = AllToys;
    
    const [SearchName, setSearchName] = useState("");
    

    useEffect(() => {
        fetch(' https://y-ebon-pi.vercel.app/AllToys')
            .then(res => res.json())

            .then(data => setAllToys(data));
    }, [])
      console.log(AllToys);




      const handleSearch = () => {
        fetch(`https://y-ebon-pi.vercel.app/getToyName/${SearchName}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setAllToys(data);
          });
      };
   
    return (
        <div>
           <Helmet>
           <title>Animal-Toy-planet | AllToys</title>
         </Helmet>
            <div>

            </div>
            <h1 className="text-center p-4  text-4xl font-bold">ALL Toys</h1>
        <div className="search-box p-2 text-center">
          <h4 className='text-center mb-4 text-3xl'>Search By Toy Name</h4>
          <input
            onChange={(e) => setSearchName(e.target.value)}
            type="text"
            className="p-1  border-r-emerald-400  bg-purple-200"
          />{" "}
          <button onClick={handleSearch} className="all-btn ">Search</button>
        </div>
            <div className='m-[40px]'>
            <div className="overflow-x-auto ">
        <table className="table table-compact w-full">
          <thead>
            <tr className="text-lime-700">
              <th>SL</th> 
              <th> SellerName</th> 
              <th>Toy Name</th> 
              <th>Sub-category</th> 
              <th>Price</th> 
              <th>Available Quantity</th>
              <th>Button</th>
            </tr>
          </thead> 
          <tbody>
             {AllToys?.map((Toys, index) => (
              <tr className='text-black'>
                <th>{index+1}</th> 
              <td>{Toys.sellerName}</td> 
              <td>{Toys.name}</td> 
              
              <td>{Toys.subCategory}</td> 
              <td>{Toys.price}</td> 
              <td>{Toys.quantity}</td>
              <td> <Link to={`/modal/${Toys._id}`}><button htmlFor="my-modal-6" className="btn btn-outline btn-sm w-[60px] bg-lime-400">Details</button></Link> </td>
            
               
              </tr>
            ))}
          </tbody> 
          
        </table>
      </div>
            </div>
        </div>
    );
};

export default AllToys;