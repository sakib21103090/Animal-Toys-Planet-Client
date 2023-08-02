import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Providers/AuthProviders';
import { Helmet } from 'react-helmet';
const AddAToy = () => {

    const {user} = useContext(AuthContext);
  console.log(user)

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch("https://y-ebon-pi.vercel.app/AddAToy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
            });
          console.log(data);
     
    };
    return (
        <div className='add-bg text-white'>
           <Helmet>
           <title>Animal-Toy-planet | Add A Toy</title>
         </Helmet>
            <div>
                 <h2 className="text-center font-bold  text-5xl m-6 p-6">Add A Toy</h2>
            </div>
            <div >
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="pictureUrl" className="block  mb-1"> Toy Picture URL:</label>
          <input type="text" id="pictureUrl" {...register('pictureUrl')} className="w-full  bg-transparent px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
        </div>

        <div>
          <label htmlFor="name" className="block  mb-1"> Toy Name:</label>
          <input type="text" id="name" {...register('name')} className="w-full    bg-transparent px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
        </div>

        <div>
          <label htmlFor="sellerName" className="block  mb-1">Seller name (if available):</label>
          <input type="text" id="sellerName" {...register('sellerName')}  defaultValue={user?.displayName} className="w-full    bg-transparent px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
         
        </div>

        <div>
          <label htmlFor="sellerEmail" className="block  mb-1">Seller email:</label>
          <input type="email" id="sellerEmail" {...register('sellerEmail')} defaultValue={user?.email} className="w-full  bg-transparent px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
        </div>

        <div>
          <label htmlFor="subCategory" className="block  mb-1">Sub-category:</label>
          <select id="subCategory" {...register('subCategory')} className="w-full  bg-transparent px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500">
            <option value="Amphibians">Amphibians</option>
            <option value="TeddyBear">TeddyBear</option>
            <option value="Reptiles">Reptiles</option>
          </select>
        </div>

        <div>
          <label htmlFor="price" className="block  mb-1">Price:</label>
          <input type="number" step="0.01" id="price" {...register('price')} className="w-full  bg-transparent px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
        </div>

        <div>
          <label htmlFor="rating" className="block  mb-1">Rating:</label>
          <input type="number" step="0.01"  id="rating" {...register('rating')} className="w-full  bg-transparent px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
        </div>

        <div>
          <label htmlFor="quantity" className="block  mb-1">Available quantity:</label>
          <input type="number" step="0.01" id="quantity" {...register('quantity')} className="w-full  bg-transparent px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="description" className="block  mb-1">Detail description:</label>
        <textarea id="description" {...register('description')} className="w-full  bg-transparent px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
      </div>

      <button type="submit" className="mt-4 mb-2  px-4 py-2 bg-sky-900 text-white rounded hover:bg-sky-400">Submit</button>
    </form>

      </div>
        </div>
    );
};

export default AddAToy;