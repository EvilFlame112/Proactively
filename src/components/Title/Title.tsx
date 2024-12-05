import React from 'react'
import Banner from '../banner1/Banner'
import { images } from '../banner1/data';
import { imagesb } from '../banner1/data2'
import Search from '../search/Search';

const Title = () => {
    const containerStyle = {
    };
    const imgStyle = {
        zIndex: -1,
    };
    const searchStyle = {
        zIndex: 1,
    };

  return (
    <div className='container' style={containerStyle}>
        <div className='side-banner' style={imgStyle}>
            <Banner images={images} speed={20000} imagesb={imagesb}/>
        </div>
        <div className='searchbox' style={searchStyle}>
            <Search />
        </div>
    </div>
  )
}

export default Title