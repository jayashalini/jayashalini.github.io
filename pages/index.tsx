import Link from 'next/link';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Shalinni Sivakumar's personal website"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link href="/">Hello</Link></h2>
        </div>
      </header>
      <p> Welcome to my website. <br></br>Please feel free to <Link href="/about">read more about me</Link>, check out my {' '}
        <Link href="/travel">travel experiences</Link>, {' '}
        or <Link href="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
