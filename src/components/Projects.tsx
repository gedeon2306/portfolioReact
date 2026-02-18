import Title from "./Title"

import img1 from '../assets/projects/jihrelDev.jpg';
import img2 from '../assets/projects/todoReact.jpg';
import img3 from '../assets/projects/calculmamoyenne.jpg';
import { Github, Globe } from "lucide-react";


const projects = [
  {
    id: 1,
    title: 'Portfolio interactif',
    description: 'Application web responsive avec animations fluides et design moderne. Gérer votre profile, vos skilles, vos projets avec une sauvegarde en BDD.',
    technologies: ['DJnago', 'CSS3', 'MySQL', 'JavaScript'],
    demoLink: 'https://jihreldev.pythonanywhere.com/',
    repoLink: 'https://github.com/gedeon2306/portfolio',
    image: img1,
  },
  {
    id: 2,
    title: 'TodoReact',
    description: 'Une application de gestion de tâches moderne et responsive construite avec React, utilisant DaisyUI pour le design.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    demoLink: 'https://todo-react-jihreldev.vercel.app/',
    repoLink: 'https://github.com/gedeon2306/todoReact',
    image: img2,
  },
  {
    id: 3,
    title: 'CalculMaMoyenne',
    description: 'Application web, mobile pour calculer efficacement, simplement et rapidement sa moyenne, interface intuitif et épuré.',
    technologies: ['Vue js', 'TypeScript', 'CSS3'],
    demoLink: 'https://calculmamoyenne.vercel.app/',
    repoLink: 'https://github.com/gedeon2306/calculMaMoyenne',
    image: img3,
  },
];

const Projects = () => {
  return (
    <div className="bg-base-300 p-10 mt-10 md:mb-32" id="Projects">
      <Title title="Mes Projets" />
      <div className="grid md:grid-cols-3 gap-4 mt-15">
        {projects.map((project) => (
          <div key={project.id} className="bg-base-100 p-5 h-fit rounded-xl shadow-lg hover:shadow-purple-600">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl h-56 object-cover"
            />
            <div>
              <h1 className="my-2 font-bold">
                {project.title}
              </h1>
              <p className="text-sm">{project.description}</p>

            </div>
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech) => (
                <span className="badge badge-sm bg-purple-600">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex">
              <a className="btn btn-soft bg-purple-600 hover:bg-base-300 w-2/3" href={project.demoLink} target="_blank">
                Visit
                <Globe className="w-4" />
              </a>

              <a className="btn btn-neutral hover:text-purple-600 w-1/3 ml-2" href={project.repoLink} >
                <Github className="w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects