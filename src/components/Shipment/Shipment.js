import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category,setCategory] = useContext(CategoryContext);
    return (
        <div>
            <p>This is shipment</p>
            <button onClick={()=>setCategory(category + 1)}>Increament from shipment</button>
        </div>
    );
};

export default Shipment;