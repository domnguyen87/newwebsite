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
        image: 'https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 2,
        name: 'Jane Smith',
        position: 'Project Manager',
        company: 'Google',
        message: 'Excel at collaborating with others, making you an indispensable part of our team. I truly value how you consistently offer your help and share your knowledge.',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 3,
        name: 'Jen John',
        position: 'Data Scientist',
        company: 'Microsoft',
        message: 'Positive energy you bring to the office is incredibly motivating for everyone around you. Your enthusiasm for our projects really lifts the teams spirits.',
        image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 4,
        name: 'David Do',
        position: 'DevOps Engineer',
        company: 'Apple',
        message: 'Meticulous attention to detail and commitment to delivering top-notch work are truly commendable. The precision and care you put into each task don’t go unnoticed.',
        image: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 5,
        name: 'Eric Lenny',
        position: 'UX/UI Designer',
        company: 'Amazon',
        message: 'Remarkable ability to meet deadlines while maintaining a high standard of work. Your skill in managing your time effectively is something we all admire.',
        image: 'https://images.pexels.com/photos/4098157/pexels-photo-4098157.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 6,
        name: 'Bob Smith',
        position: 'Cybersecurity Analyst',
        company: 'Tesla',
        message: 'Creative thinking and innovative ideas have greatly impacted the success of our projects. Im always inspired by the new perspectives you introduce.',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
    // Add more testimonials as needed
];
