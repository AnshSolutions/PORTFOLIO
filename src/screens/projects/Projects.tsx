import { customProjects } from './utils';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-primaryColor">My Projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {customProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
