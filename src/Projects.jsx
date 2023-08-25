// import './fetchProject';

import { useFetchProjects } from './fetchProject';

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  console.log(loading, projects);
  return <div>Projects</div>;
};
export default Projects;
