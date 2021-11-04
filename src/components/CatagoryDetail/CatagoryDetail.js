import React from 'react';

const CatagoryDetail = (props) => {
    const {name} =props.product;
    return (
        <div>
            <h5>This is Category Detail </h5>
            <h6>Selected Product: {name}</h6>
        </div>
    );
};

export default CatagoryDetail;