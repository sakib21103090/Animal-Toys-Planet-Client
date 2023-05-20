import React from 'react';

const Blog = () => {
    return (
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Questions</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4">
          <div className=" p-6 rounded-lg shadow-md bg-rose-100">
            <h2 className="text-xl font-bold mb-2"> Question 1:What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <p className="text-black mb-4">
            can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code.
            </p>
           
          </div>
  
          <div className=" p-6 rounded-lg shadow-md bg-rose-100">
            <h2 className="text-xl font-bold mb-2">Question 2:Compare SQL and NoSQL databases?</h2>
            <p className="text-black mb-4">
            At a high level, NoSQL and SQL databases have many similarities. In addition to supporting data storage and queries, they both also allow one to retrieve, update, and delete stored data. However, under the surface lie some significant differences that affect NoSQL versus SQL performance, scalability, and flexibility.
            </p>
            
          </div>
  
          <div className="p-6 rounded-lg shadow-md bg-rose-100">
            <h2 className="text-xl font-bold mb-2"> Question 3:What is express js? What is Nest JS?</h2>
            <p className="text-black mb-4">
            Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI
            </p>
            
          </div>
  
          <div className=" p-6 rounded-lg shadow-md bg-rose-100">
            <h2 className="text-xl font-bold mb-2"> Question 4: What is express js? What is Nest JS?</h2>
            <p className="text-black mb-4">
            Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline.
            </p>
            
          </div>
        </div>
      </div>
    );
};

export default Blog;