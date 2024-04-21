import {useEffect, useState} from 'react'
import api from "../../services/api";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const HomeSlider = () => {
    const [sliderProducts, setSliderProducts] = useState([]);

    useEffect(() => {
        api.get(`/products`)
        .then((res) => {
            const topRated = res.data.filter(data => data.rating.rate > 4);
            setSliderProducts(topRated);
        })
        .catch(err => console.log('Error', err));
    }, []);

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <MdArrowForwardIos />,
      prevArrow: <MdArrowBackIos />,
      pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 470,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className='slider-container'>
      <Slider {...settings} >
        {sliderProducts.map(item => (
          <Link to={`/products/${item.id}`} key={item.id} className='slider-item-wrapper'>
            <div className='slider-img-wrapper'>
              <img src={item.image} alt={item.title} />
            </div>
            <p className='view-more'>View more...</p>
          </Link>))}
      </Slider>
    </div>
  )
}

export default HomeSlider;
