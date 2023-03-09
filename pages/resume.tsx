import Link from 'next/link';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
import Recommendations from '../components/Resume/Recommendations';

// import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';
import recommendations from '../data/resume/recommendations';

const sections = [
  'Experience',
  'Education',
  'Skills',
  'Recommendations',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Shalinni Sivakumar's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link href="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Experience data={positions} />
      <Education data={degrees} />
      <Skills skills={skills} categories={categories} />
      {/* <Courses data={courses} /> */}
      <Recommendations data={recommendations} />
    </article>
  </Main>
);

export default Resume;