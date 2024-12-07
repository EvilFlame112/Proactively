import styles from './Banner.module.css'
interface BannerPorps {
    images: {
        src: string;
        name: string;
    }[];
    speed: number;
}
interface BannerPorpsb {
    speed: number;
    imagesb: {
        src: string;
        name: string;
    }[];
}

export function ImageSection({ images, speed }: BannerPorps) {
    const imagesStyle = {
        animation: `swipeb ${speed}ms linear infinite`,
      };

    return (
        <div className={styles['images']} style={imagesStyle}>
            {images.map(({ src, name }) => (
                <div className={styles['image']}>
                    <img src={src} alt={name} />
                </div>
            ))}
        </div>
    );
}

export function ImageSectionb({ imagesb, speed }: BannerPorpsb) {
    const imagesStyle = {
        animation: `swipe ${speed}ms linear infinite`,
      };

    return (
        <div className={styles['images']} style={imagesStyle}>
            {imagesb.map(({ src, name }) => (
                <div className={styles['image']}>
                    <img src={src} alt={name} />
                </div>
            ))}
        </div>
    );
}

export default function Banner({ images, speed, imagesb }: BannerPorps&BannerPorpsb) {
    return (
        <div className='title-section'>
            <div className='banner-wrapper'>
                <div className='wrapper'>
                    <ImageSection images={images} speed={speed}/>
                    <ImageSectionb imagesb={imagesb} speed={speed}/>
                </div>
            </div>
            <div className='title-text'>
                <div className='fl'>Book an appointment with</div>
                <div className='lm'>lifestyle medicine</div>
                <div className='ll'>experts</div>
                <div className='subtext'>Optimize your lifestyle and reverse chronic diseases</div>
            </div>
        </div>
    );
}