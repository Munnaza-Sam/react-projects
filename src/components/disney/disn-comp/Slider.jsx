import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from "../Services/GlobalApi";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";


const image_base_url = "https://image.tmdb.org/t/p/original";

const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    const windowWidth = window.innerWidth;

    useEffect(() => {
        getPopularVideo();
    }, [])

    const getPopularVideo = () => {
        GlobalApi.getPopularVideo().then((response) => {
            // console.log(response.data.results);
            setMovieList(response.data.results);
        }).catch((error) => {
            console.error("Error fetching movies:", error);
        });
    };
    const sliderLeft = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft -= windowWidth - 108;
        }
    };

    const sliderRight = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft += windowWidth - 108;
        }
    };


    return (
        <>
            <HiChevronDoubleLeft className='center_icon left-5 hidden md:block'
                onClick={sliderLeft} />
            <div ref={elementRef}
                className='flex overflow-x-auto scroll-smooth  no-scrollbar w-full px-16 py-4 relative'>
                {movieList.map((item, index) => (
                    <img key={index} src={image_base_url + item.backdrop_path}
                        className='min-w-full h-[350px] object-cover object-left-top
                     mr-5 rounded-md  hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'/>
                ))}
            </div>
            <HiChevronDoubleRight className='center_icon right-5 hidden md:block'
                onClick={sliderRight} />
        </>
    )
}

export default Slider