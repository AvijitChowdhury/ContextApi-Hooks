import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { CategoryContext } from '../../App';
import CatagoryDetail from './../CatagoryDetail/CatagoryDetail';

const allProducts = [{name:'lenovo',category:'laptop'},{name:'asus',category:'laptop'},
{name:'dell',category:'laptop'},{name:'iphone',category:'mobile'},{name:'nokie',category:'mobile'},
{name:'huawei',category:'mobile'},{name:'sony',category:'camera'},{name:'nikkon',category:'camera'},
{name:'pixel',category:'camera'}];

const Catagories = (props) => {
   // const {category} = props;
   const [category] = useContext(CategoryContext);
   const [products,setProducts] = useState([]);
   useEffect(()=>{
       const matchParents = allProducts.filter(pd=>pd.category.toLowerCase()===category.toLowerCase());
       setProducts(matchParents);
   },[category]);
    return (
        <div>
            <h3>Select your Category : {category}</h3>
            {
                products.map(pd=><CatagoryDetail product={pd}></CatagoryDetail>)    
            }
            
        </div>
    );
};

export default Catagories;