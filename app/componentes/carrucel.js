"use client"
import React, { useEffect, useState } from 'react';
import '../style/carrucel.css';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        'https://i.pinimg.com/originals/71/7d/3d/717d3d1e61ef49d4c90197482ab9fb03.gif',
        'https://i.pinimg.com/564x/cc/d1/33/ccd13358cdb3a9149c0e8adb9e5eeed5.jpg',
        'https://i.pinimg.com/474x/13/99/30/1399308c95012e3c1086863e4783ef1f.jpg',
        'https://i.pinimg.com/474x/84/10/fe/8410feebfdb2b615b4817df718ee811c.jpg',
        'https://i.pinimg.com/originals/25/a4/08/25a408da741318b2070a1c2177c55957.gif',
        'https://i.pinimg.com/564x/f1/a7/d7/f1a7d796b7a6c3426aaf7e7770fc3fd7.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // Cambia cada 3 segundos

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((url, index) => (
                    <div
                        key={index}
                        className="carousel-slide"
                        style={{ backgroundImage: `url(${url})` }}
                    ></div>
                ))}
            </div>
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
