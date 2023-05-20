import React, { useEffect, useState } from 'react';

const AllToys = () => {
    const [AllToys, setAllToys] = useState([]);
    const [SearchName, setSearchName] = useState("");

    useEffect(() => {
        fetch(' http://localhost:5000/AllToys')
            .then(res => res.json())

            .then(data => setAllToys(data));
    }, [])
      console.log(AllToys);

      const handleSearch = () => {
        fetch(`http://localhost:5000/getToyName/${SearchName}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setAllToys(data);
          });
      };
   
    return (
        <div>
            <div>

            </div>
            <h1 className="text-center p-4  text-4xl font-bold">ALL Toys</h1>
        <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearchName(e.target.value)}
            type="text"
            className="p-1  border-r-emerald-400  bg-orange-200"
          />{" "}
          <button onClick={handleSearch} className="btn btn-outline bg-orange-400">Search</button>
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
              <td>
              <button className="btn btn-outline bg-red-400">View Details</button>
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

export default AllToys;