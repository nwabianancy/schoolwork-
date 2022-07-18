import React from 'react';

import photo from "./../img/koln.jpg";

function CityGuide() {
  return  ( 
       <div className='City-info'>
        <div className='City-info-text'>
            <h1>Cologne, Germany</h1>
            <h2>Population: 1.1 million</h2>
            <p> Cologne is the largest city of German western state of North Rhine-Westphalia (NRW) and the fourth-most populous city of Germany with a population of 1.1 million. It is a 2,000-year-old city spanning the Rhine River in western Germany, is the regions cultural hub. A landmark of High Gothic architecture set amid reconstructed old town, the twin-spired Cologne Cathedral is also known for its gilded medieval reliquary and sweeping river views</p>
        </div>
        <div className='city-info-image'>
            <img src={photo} alt="City"/>
        </div>
    </div>
  );
}


export default CityGuide;
