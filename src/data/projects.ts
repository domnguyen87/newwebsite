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
        title: "E-commerce Website",
        description: "A full-featured e-commerce website built with React and Node.js.",
        tags: ["React", "Node.js", "E-commerce"],
        image: "/images/ecommerce.png"
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills.",
        tags: ["React", "TypeScript", "CSS"],
        image: "/images/portfolio.png"
    },
    {
        id: 3,
        title: "Mobile App",
        description: "A cross-platform mobile app developed using React Native.",
        tags: ["React Native", "Mobile", "JavaScript"],
        image: "/images/mobile-app.png"
    }
    // Add more projects as needed
];
