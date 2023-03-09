import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons/faCompass';
import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link href="/" className="logo">
        <Image src='/me-02.jpeg' alt="" width={100} height={150}/>
      </Link>
      <header>
        <h2>Shalinni S</h2>
        <p><FontAwesomeIcon icon={faCompass} size="sm" /> Michigan, USA</p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Shalinni.
      </p>
      <ul className="actions">
        {/* <li>
          {!window.location.pathname.includes('/resume') ? <Link href="/resume" className="button">Learn More</Link> : <Link href="/about" className="button">About Me</Link>}
        </li> */}
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Shalinni Sivakumar.</p>
    </section>
  </section>
);

export default SideBar;
