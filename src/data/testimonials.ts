export interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    message: string;
    image: string; // URL to the person's image (optional)
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'John Doe',
        position: 'Software Engineer',
        company: 'Tech Corp',
        message: 'This is the best service I have ever used. Highly recommended!',
        image: 'https://example.com/images/john.jpg',
    },
    {
        id: 2,
        name: 'Jane Smith',
        position: 'Project Manager',
        company: 'Business Solutions',
        message: 'Great experience! The team was professional and delivered on time.',
        image: 'https://example.com/images/jane.jpg',
    },
    {
        id: 3,
        name: 'Jen John',
        position: 'Project Manager',
        company: 'Business Solutions',
        message: 'Great experience! The team was professional and delivered on time.',
        image: 'https://example.com/images/jane.jpg',
    },
    {
        id: 4,
        name: 'David Do',
        position: 'Project Manager',
        company: 'Business Solutions',
        message: 'Great experience! The team was professional and delivered on time.',
        image: 'https://example.com/images/jane.jpg',
    },
    {
        id: 5,
        name: 'Eric Lenny',
        position: 'Project Manager',
        company: 'Business Solutions',
        message: 'Great experience! The team was professional and delivered on time.',
        image: 'https://example.com/images/jane.jpg',
    },
    {
        id: 6,
        name: 'Bob Smith',
        position: 'Project Manager',
        company: 'Business Solutions',
        message: 'Great experience! The team was professional and delivered on time.',
        image: 'https://example.com/images/jane.jpg',
    }
    // Add more testimonials as needed
];
