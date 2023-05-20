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
      
    );
};

export default MyToy;