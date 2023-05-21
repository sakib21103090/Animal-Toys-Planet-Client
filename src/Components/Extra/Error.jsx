import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Error = () => {
    return (
      <div>
         <Helmet>
           <title>Animal-Toy-planet | Error</title>
         </Helmet>
        <div className="flex flex-col items-center justify-center h-screen bg-rose-50">
      <img
        src={`https://i.ibb.co/8BKM3tY/download-1.png`}
        alt="Error"
        className="w-64 h-64 mb-4 animate-pulse"
      />
      <h1 className="text-4xl font-bold mb-2">Oops! Page Not Found</h1>
      <p className="text-gray-600 text-lg mb-4">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="bg-rose-500 text-white px-4 py-2 rounded-md">
        Go Back to Home
      </Link>
    </div> 
      </div>
    );
};

export default Error;