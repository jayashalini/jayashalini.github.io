import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Recommendation from './Recommendations/Recommendation'

// const References = () => (
//   <div className="references">
//     <div className="link-to" id="references" />
//     <div className="title">
//       <Link href="/contact">
//         <h3>References are available upon request</h3>
//       </Link>
//     </div>
//   </div>
// );

const Recommendations = ({ data }) => (
  <div className="references">
    <div className="link-to" id="recommendations" />
    <div className="title">
      <h3>Recommendations</h3>
    </div>
    <Recommendation data={data}/>
    <Link href="/contact">
        <h4>References are available upon request</h4>
    </Link>
  </div>
);

Recommendations.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  })),
};

Recommendations.defaultProps = {
  data: [],
};

export default Recommendations;
