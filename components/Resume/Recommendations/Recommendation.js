import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';


const recommendations =({ data }) => (
  <Carousel
  infiniteLoop={true}
  autoPlay={true}
  showArrows={false}
  showThumbs={false}
  showStatus={false}
  interval={6100}
  >
    {data.map((data) => (
      <div key={data.name}>
        <Image src={data.image} alt={data.company} height={50} width={50}/>
        <div className="myCarousel">
          <h3><a href={data.link}>{data.name}</a></h3>
          <h4>{data.position}</h4>
          <p>{data.content}</p>
        </div>
    </div>
    ))}
  </Carousel>
);

export default recommendations;