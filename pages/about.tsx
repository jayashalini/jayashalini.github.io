import React from 'react';
import Link from 'next/link';
import Main from '../layouts/Main';
import Emoji from '../components/Emoji';

const About = () => (
  <Main
    title="About"
    description="Learn about Shalinni Sivakumar"
  >
    <article className="post about" id="about">
		<header> 
			<div className="title">
				<h2 data-testid="heading"><Link href="/about"><Emoji symbol="🤖" label="robo"/>About Me</Link></h2>
			</div>
		</header>
		<div className="about">
			<h3><Emoji symbol="ℹ️" label="info"/>Intro</h3>
			<div>
				<p>
					to-fill-short-desc.<br></br><br></br>
				</p>
			</div>
			<h3><Emoji symbol="🕰" label="clock"/>Some quick history</h3>
			<div>
				<ul>
					<li>to-fill-history-1</li>
					<li>to-fill-history-2</li>
				</ul>
			</div>
			<h3><Emoji symbol="👨‍💻" label="tech"/>I like</h3>
			<div>
				<ul>
					<li><Link href='https://www.google.com'>to-fill-liking-1</Link></li>
					<li><Link href='https://www.google.com'>to-fill-liking-2</Link></li>
				</ul>
			</div>
		</div>
    </article>
  </Main>
);

export default About;