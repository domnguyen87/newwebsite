// projects.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Gain Fitness",
        description: "A dynamic fitness hub showcasing a variety of workouts, classes, and membership offers to help you achieve your fitness goals.",
        tags: ["React", "Node.js", "Ecommerce"],
        image: require('../img/gainfitness.JPG')
    },
    {
        id: 2,
        title: "Foot Doc DPM",
        description: "Professional foot and ankle care services, offering expert diagnosis, treatment, and personalized solutions for all podiatric needs.",
        tags: ["React", "TypeScript", "CSS"],
        image: require('../img/img-1.jpg')
    },
    {
        id: 3,
        title: "Real Estate By Rich",
        description: "Your trusted real estate partner, offering personalized services to help you buy, sell, or invest in properties.",
        tags: ["ReactNative", "Mobile", "JavaScript"],
        image: require('../img/img-2.jpg')
    },
    {
        id: 1,
        title: "My Wireless",
        description: "Your one-stop destination for the latest cell phones, accessories, and repair services at competitive prices.",
        tags: ["React", "Node.js", "Ecommerce"],
        image: require('../img/img-3.jpg')
    },
    {
        id: 2,
        title: "TomVo Auto",
        description: "Reliable automotive repair and maintenance services, ensuring your vehicle stays in top condition with expert care.",
        tags: ["React", "TypeScript", "CSS"],
        image: require('../img/img-4.jpg')
    },
    {
        id: 3,
        title: "Tipsy Nails Spa",
        description: "A luxurious nail and spa retreat offering premium nail care, relaxing treatments, and beauty services in a serene environment.",
        tags: ["ReactNative", "Mobile", "JavaScript"],
        image: require('../img/img-5.jpg')
    }
    // Add more projects as needed
];
