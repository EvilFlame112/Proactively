import Banner from '../banner1/Banner'
import { images } from '../banner1/data';
import { imagesb } from '../banner1/data2'
import Search from '../search/Search';
import Colorele from '../colourelements/Colorele';
import Barele from '../colourelements/Barele';

const Title = () => {
    const containerStyle = {
        display: "flex"
    };
    const imgStyle = {
        zIndex: -1,
    };
    const searchStyle = {
        zIndex: 1,
    };
    const colorEle = {
        zIndex: -2,
    }
    const barEle = {
        zIndex: 1,
    }


  return (
    <div className='container' style={containerStyle}>
        <div className="colorEle" style={colorEle}>
            <Colorele />
        </div>
        <div className='side-banner' style={imgStyle}>
            <Banner images={images} speed={20000} imagesb={imagesb}/>
        </div>
        <div className='searchbox' style={searchStyle}>
            <Search />
        </div>
        <div className='bar-separator' style={barEle}>
            <Barele />
        </div>
    </div>
  )
}

export default Title