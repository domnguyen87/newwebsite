import React, { useState, useRef } from 'react';
import { testimonials } from '../data/testimonials.ts';
import './TestimonialCarousel.css';

const TestimonialCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 3) % testimonials.length;
            scrollToIndex(newIndex);
            return newIndex;
        });
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? testimonials.length - 3 : prevIndex - 3;
            scrollToIndex(newIndex);
            return newIndex;
        });
    };

    const scrollToIndex = (index: number) => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.scrollWidth / testimonials.length * index;
            carouselRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth', // This enables smooth scrolling
            });
        }
    };

    const displayedTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

    return (
        <div className="carousel" ref={carouselRef}>
            <div className="testimonial-list">
                {displayedTestimonials.map(({ id, name, position, company, message, image }) => (
                    <div key={id} className="testimonial">
                        <div className="testimonial-image">
                            <img src={image} alt={name} />
                        </div>
                        <div className="testimonial-content">
                            <p className="testimonial-message">"{message}"</p>
                            <p className="testimonial-name">- {name}</p>
                            <p className="testimonial-position">
                                {position} at {company}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-button prev" onClick={prevTestimonial}>
                &#10094;
            </button>
            <button className="carousel-button next" onClick={nextTestimonial}>
                &#10095;
            </button>
        </div>
    )
}

export default TestimonialCarousel;

