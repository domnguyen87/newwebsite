// ProjectShowcase.tsx
import React, { useState } from 'react';
import { projects, Project } from '../data/projects.ts';
import './ProjectShowcase.css';

const ProjectShowcase: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const uniqueTags = Array.from(new Set(projects.flatMap((project) => project.tags)));

    const filteredProjects = selectedTag
        ? projects.filter((project) => project.tags.includes(selectedTag))
        : projects;

    return (
        <div className="project-showcase">
            <h2>My Projects</h2>
            <div className="filters">
                <button onClick={() => setSelectedTag(null)}>All</button>
                {uniqueTags.map((tag) => (
                    <button key={tag} onClick={() => setSelectedTag(tag)}>
                        {tag}
                    </button>
                ))}
            </div>
            <div className="projects-grid">
                {filteredProjects.map((project: Project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tags">
                            {project.tags.map((tag) => (
                                <span key={tag} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectShowcase;
