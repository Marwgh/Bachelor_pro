import PropTypes from 'prop-types';


export default function StagesWorks(props) {
  const Title = props.title
  const stage = props.stage
  const number = props.number
  const points = props.points
  return(
    <div id="StagesWorksCard">
          <img src="../svg/formIcon.svg" alt=""/>
          <p className='stage'>{stage}</p>
          <h3>{Title}</h3>
          <ul>
            <li>{points[0]}</li>
            <li>{points[1]}</li>
            <li>{points[2]}</li>
          </ul>
          {number !=="1" &&
          <div className='number'>
            <p>{number}</p>
          </div>
          }
    </div>
  )
}


StagesWorks.propTypes = {
  Image: PropTypes.string,
  title: PropTypes.string,
  points: PropTypes.array,
  stage: PropTypes.string,
  number: PropTypes.string,
};
