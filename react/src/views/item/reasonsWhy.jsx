import PropTypes from 'prop-types';


export default function ReasonsWhy(props) {
  const title = props.title
  const Icon = props.Icon
  const text = props.text
  return(
    <div id="ReasonsWhyCard">
      <img src={Icon} alt={Icon}/>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}


ReasonsWhy.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.string,
  text: PropTypes.string,
};
