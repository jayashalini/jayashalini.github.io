import Link from 'next/link';

import Main from '../layouts/Main';

import Cell from '../components/Travel/Cell';
import data from '../data/articlepreview';

const Travel = () => (
  <Main
    title="Travel"
    description="Learn about Shalinni Sivakumar's Travel."
    fullPage= {true}
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link href="/projects">Travel</Link></h2>
          <p>My travel and dining experiences.</p>
        </div>
      </header>
      <div className='previews'>
        {data.map((project) => (
          <Cell
            key={project.title}
            title={project.title}
            projectLink={project.articlelink}
            image={project.image}
            date={project.date}
            desc={project.desc}
          />
        ))}
      </div>
    </article>
  </Main>
);

export default Travel;
