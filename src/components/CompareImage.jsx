import React from 'react';
import ReactCompareImage from 'react-compare-image';
// import image1 from "../assets/images/413-removebg-preview.png"
// import image2 from "../assets/images/412.jpg";
import image1 from "../assets/images/code.png"
import image2 from "../assets/images/FB_IMG_1639285353299.jpg"
import "./All.css"
const CompareImage = () => {
    return (
        <div className='container'>
           <ReactCompareImage
           leftImage={image1}
           rightImage={image2}
           />
        </div>
    );
};

export default CompareImage;