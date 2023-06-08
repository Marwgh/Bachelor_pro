import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Banner(props) {
  const title = props.title
  const images = props.images
  return (
    <section id='Banner'>
      <img src={images[0]} alt="" />
      <div>
        <img src="../svg/endorFinasIcon.svg" alt="endorFinasIcon" />
        <h2>{title}</h2>
        <Link to="#" className='button'>Take Your Quiz Now </Link>
        <div className="reviewBanner">
          <p>★★★★</p>
          <p>4.7 / 5 Review </p>
        </div>
      </div>
      <img src={images[1]} alt="" />
    </section>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  images: PropTypes.array,
};