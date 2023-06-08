import PropTypes from 'prop-types';


export default function StagesPotential(props) {
  const Image = props.Image
  const Title = props.title
  const stage = props.stage
  const text = props.text
  return(
    <div id="StagesPotentialCard">
      <img src={Image} alt={Image}/>
      <p className='stage'>{stage}</p>
      <h3>{Title}</h3>
      <p className='text'>{text}</p>
      <a href="#">Learn More</a>
    </div>
  )
}


StagesPotential.propTypes = {
  Image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  stage: PropTypes.string,
};
