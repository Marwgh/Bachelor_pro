
import PropTypes from 'prop-types';

export default function TeamMember(props) {
  const image = props.image
  const quote= props.quote
  const job= props.job
  const name= props.name
  return(
    <div id="teamMember">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{job}</p>
        <q>{quote}</q>
      </div>
    </div>
  )
}


TeamMember.propTypes = {
  image: PropTypes.string,
  quote: PropTypes.string,
  job: PropTypes.string,
  name: PropTypes.string,
};
