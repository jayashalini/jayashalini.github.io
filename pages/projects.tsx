import Link from 'next/link';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Shalinni Sivakumar's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link href="/projects">Projects</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          key={project.title}
          title={project.title}
          projectLink={project.projectLink}
          image={project.image}
          date={project.date}
          desc={project.desc}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
