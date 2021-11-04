import React from 'react';
import Catagories from '../Catagories/Catagories';

const Home = (props) => {
    const {category} = props;
    return (
        <div style={{border:'2px solid blue'}}>
            <h1>This is home: {category}</h1>
            <Catagories category={category}></Catagories>
        </div>
    );
};

export default Home;