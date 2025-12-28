
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="cursor-default bg-white p-6 border border-black shadow-sm hover:shadow-md transition-shadow">
      <div className="relative overflow-hidden aspect-[4/5] bg-zinc-50 border border-zinc-300 mb-10 p-2">
        <img 
          src={project.image} 
          alt={project.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-500">Project / {project.year}</span>
        </div>
        <h3 className="text-3xl font-bold uppercase tracking-tighter leading-none">{project.title}</h3>
        <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">{project.category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
