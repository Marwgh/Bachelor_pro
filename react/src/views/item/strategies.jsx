import PropTypes from 'prop-types';


export default function Strategies(props) {
  const Icon = props.Icon
  const text = props.text
  return(
    <div id="StrategiesCard">
      <img src={Icon} alt={Icon}/>
      <p>{text}</p>
    </div>
  )
}


Strategies.propTypes = {
  Icon: PropTypes.string,
  text: PropTypes.string,
};
