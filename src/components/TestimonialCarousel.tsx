import React, { useState } from 'react';
import { testimonials } from '../data/testimonials.ts'
import './TestimonialCarousel.css'; // We'll create this CSS file next

const TestimonialCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const { name, position, company, message, image } = testimonials[currentIndex];

    return (
        <div className="carousel">
            <div className="testimonial">
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
            <button className="carousel-button prev" onClick={prevTestimonial}>
                &#10094;
            </button>
            <button className="carousel-button next" onClick={nextTestimonial}>
                &#10095;
            </button>
        </div>
    );
};

export default TestimonialCarousel;
