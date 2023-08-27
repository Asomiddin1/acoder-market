'use client';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
  
export default class NextJsCarousel extends Component {
    render() {
        return (
            <div className='w-full pt-[100px]'>
              <Carousel>
                  <div>
                 <Image width={700} height={500} src={'https://assets.asaxiy.uz/uploads/banner/desktop/64be33f2a79b5.jpg.webp'} alt='image'/>
                      <p className="legend">Image 1</p>
  
                  </div>
                  <div>
                 <Image width={700} height={500} src={'https://assets.asaxiy.uz/uploads/banner/desktop/64cb6565391d9.jpg.webp'} alt='image'/>

                      <p className="legend">Image 2</p>
  
                  </div>
                  <div>

                 <Image width={700} height={500} src={'https://mediapark.uz/_next/image?url=https%3A%2F%2Fcdn.newmediapark.uz%2Fimages%2Fcdb683ec-21bc-4c08-a040-7716e98c74a8_2.jpg&w=1920&q=75'} alt='image'/>
                     
                      <p className="legend">Image 3</p>
                  </div>
                  
              </Carousel>
            </div>
        );
    }
};