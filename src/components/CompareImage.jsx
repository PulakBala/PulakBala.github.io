import React from 'react';
import ReactCompareImage from 'react-compare-image';
// import image1 from "../assets/images/413-removebg-preview.png"
// import image2 from "../assets/images/412.jpg";
import image1 from "../assets/images/photo-1680984580142-37e1ad42ea83.avif"
import image2 from "../assets/images/photo-1681130497030-2e2ff8bb552c.avif"
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