import React, { useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import LoadData from './LoadData/LoadData';
const Category = () => {
    const [ToysData, setToysData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/Category')
            .then(res => res.json())

            .then(data => (data.map(newData=>setToysData(newData))));
    }, [])
      console.log(ToysData);
      


    return (
           
        <div className='text-center'>
        <div>
           
            <h6  className="text-center font-bold text-black text-5xl m-6 p-6"> Toys Category</h6>
        </div>
       
       
       

         <Tabs>
    <TabList className="text-purple-900 text-3xl  font-bold mb-6">
      <Tab>{ToysData?.Animals?.[0]?.name}</Tab>
      <Tab>{ToysData?.Animals?.[1]?.name}</Tab>
      <Tab>{ToysData?.Animals?.[2]?.name}</Tab>
      
    </TabList>

    <TabPanel>
      <div className="card lg:card-side mx-[30px] bg-base-100 shadow-xl  ">
            {
                   ToysData?.Animals?.[0]?.toys?.map(Toy => <LoadData
                   Toy={Toy}
                   ></LoadData>)
                }
                </div>
    </TabPanel>
    <TabPanel>
    <div className="card lg:card-side mx-auto bg-base-100 shadow-xl ">
            {
                   ToysData?.Animals?.[1]?.toys?.map(Toy => <LoadData
                   Toy={Toy}
                   ></LoadData>)
                }
                </div>
    </TabPanel>
    <TabPanel>
    <div className="card lg:card-side mx-auto bg-base-100 shadow-xl ">
            {
                   ToysData?.Animals?.[2]?.toys?.map(Toy => <LoadData
                   Toy={Toy}
                   ></LoadData>)
                }
                </div>
    </TabPanel>
  </Tabs>
          
         </div>
        
      
    );
};

export default Category;