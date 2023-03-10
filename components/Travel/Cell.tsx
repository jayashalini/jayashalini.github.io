import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Image from 'next/image';

interface data {
  title: string
  projectLink: string
  image: string
  date: string
  desc: string
}

const Cell: React.FC<data> = (props) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={props.projectLink}>{props.title}</a></h3>
        <time className="published">{dayjs(props.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={props.projectLink} className="image">
        <Image src={props.image} alt={props.title} height={400} width={500}/>
      </a>
      {/* <div className="description">
        <p>{props.desc}</p>
      </div> */}
    </article>
  </div>
);

Cell.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired, // isRequired should be removed ideally.
};

export default Cell;
