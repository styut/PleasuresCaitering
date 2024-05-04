
import React, { useState } from 'react';
import '../style/gallery.css';
import {img} from '../data/gallary.js'

export const Gallery=()=> {


  const forPayment = (e, price, index) => {
    const quantity = parseInt(e.target.value);
    const updatedImageSources = imageSources.map((image) => {
      if (image.index === index) {
        return {
          ...image,
          totalPrice: quantity * price,
        };
      }
      return image;
    });
   
    setImageSources(updatedImageSources);
  };

  const [imageSources, setImageSources] = useState(
    img
 );

  const imageStyle = {
    maxWidth: '200px',
    maxHeight: '200px',
  };

  return (
    <div id="p">
      {imageSources.map((imageSource, index) => (
        <div  name="mealPrice" key={index}>
          <div  name="itemsImage">
            <br></br>
          <h2>{imageSource.nameMeal}</h2>
          <b><div>price:{imageSource.price}</div></b>
          <input placeholder={"Enter number of diners"} type='number' min={0} onChange={(e) => forPayment(e, imageSource.price, index)}></input>
          <b><div>Total payable</div></b>
          <b><div>{imageSource.totalPrice}</div></b>
          </div>
          <img  className='img' src={imageSource.src} alt={imageSource.alt} style={imageStyle} />
        </div>
      ))}
    </div>
  );
}