import React, { useContext } from 'react';

import { CategoryContext } from '../../App';


const Header = (props) => {
    const [category,setCategory] = useContext(CategoryContext);
   // const {setCount} = props;
   
    return (
        <div>
            {/* <p>This is header: {props.count}</p>
            <button onClick={()=>props.setCount(props.count+1)}>Increament</button> */}
                
                <h2>This is header: {category}</h2>
                <button onClick={()=>setCategory('Laptop')}>Laptop</button>
                <button onClick={()=>setCategory('Mobile')}>Mobile</button>
                <button onClick={()=>setCategory('Camera')}>Camera</button>
            
            
            
        </div>
    );
};

export default Header;