import {FaGithub} from 'react-icons/fa';
import {Project} from './utils';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({project}: ProjectCardProps) => {
  return (
    <div className="relative flex w-full flex-col rounded-lg bg-bgColor p-6 shadow-md">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-primaryColor">{project.name}</h3>
      </div>
      
      <p className="mb-4 text-base text-primaryColor">{project.description}</p>

      <div className="mb-4">
        <p className="mb-2 text-sm font-semibold text-primaryColor">Tech Stack:</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item, key) => (
            <div
              key={key}
              className="group relative flex h-8 w-8 items-center justify-center rounded-sm hover:bg-white"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {project?.git && (
        <div className="mt-auto flex items-center">
          <FaGithub className="mr-2 text-[24px] text-primaryColor" />
          <a
            href={project.git}
            target="_blank"
            rel="noreferrer"
            className="text-themePrimaryColor hover:underline"
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
