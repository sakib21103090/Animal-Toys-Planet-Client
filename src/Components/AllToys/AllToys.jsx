import React, { useEffect, useState } from 'react';

const AllToys = () => {
    const [AllToys, setAllToys] = useState([]);
    // const [AllId, setAllId] = useState([]);
    // const { _id } = AllToys;
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
          <h4 className='text-center mb-4 text-3xl'>Search By Toy Name</h4>
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
              <td><label htmlFor="my-modal-6" className="btn btn-outline btn-sm w-[60px] bg-lime-400">Details</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom  sm:modal-middle">
<div className="modal-box ">
<div className="card card-compact w-96 bg-base-100 shadow-xl">
<figure><img src={Toys.pictureUrl} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">{Toys.name}</h2>
<div className='text-green-800 text-2xl '>
<p>sellerName:{Toys.sellerName}</p>
<p>sellerEmail:{Toys.sellerEmail}</p>
<p>subCategory:{Toys.subCategory}</p>
<p>price:${Toys.price}</p>
<p>rating:{Toys.rating}</p>
<p>quantity:{Toys.quantity}</p>
</div>


</div>
</div>
     <div className="modal-action">
 <label htmlFor="my-modal-6" className="btn btn-outline btn-sm w-[60px] bg-lime-400">Cancel</label>
   </div>
</div>
</div>  </td>
               
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