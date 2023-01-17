import React, {useState, useEffect} from 'react';
import Navbar from '../Components/Shared/Navbar';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/products`)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    // console.log(products)
    return (
        <div>
            <Navbar />


        </div>
    );
};

export default HomePage;