import React from 'react';
import { useForm } from 'react-hook-form';

const AddAToy = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      // Perform further actions with the submitted data
    };
    return (
        <div class>
            <div>
                 <h2 className="text-center font-bold text-black text-5xl m-6 p-6">Add A Toy</h2>
            </div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="pictureUrl" className="block  mb-1">Picture URL of the toy:</label>
          <input type="text" id="pictureUrl" {...register('pictureUrl')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
        </div>

        <div>
          <label htmlFor="name" className="block  mb-1">Name:</label>
          <input type="text" id="name" {...register('name')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
        </div>

        <div>
          <label htmlFor="sellerName" className="block  mb-1">Seller name (if available):</label>
          <input type="text" id="sellerName" {...register('sellerName')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
        </div>

        <div>
          <label htmlFor="sellerEmail" className="block  mb-1">Seller email:</label>
          <input type="email" id="sellerEmail" {...register('sellerEmail')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
        </div>

        <div>
          <label htmlFor="subCategory" className="block  mb-1">Sub-category:</label>
          <select id="subCategory" {...register('subCategory')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500">
            <option value="Math Toys">Amphibians</option>
            <option value="Language Toys">TeddyBear</option>
            <option value="Science Toys">Reptiles</option>
          </select>
        </div>

        <div>
          <label htmlFor="price" className="block  mb-1">Price:</label>
          <input type="number" id="price" {...register('price')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
        </div>

        <div>
          <label htmlFor="rating" className="block  mb-1">Rating:</label>
          <input type="number" id="rating" {...register('rating')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
        </div>

        <div>
          <label htmlFor="quantity" className="block  mb-1">Available quantity:</label>
          <input type="number" id="quantity" {...register('quantity')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="description" className="block  mb-1">Detail description:</label>
        <textarea id="description" {...register('description')} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500" />
      </div>

      <button type="submit" className="mt-4 px-4 py-2 bg-lime-500 text-white rounded hover:bg-lime-600">Submit</button>
    </form>

      </div>
        </div>
    );
};

export default AddAToy;