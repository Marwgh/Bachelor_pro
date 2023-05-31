import PropTypes from 'prop-types';

export default function UserInforModale(props) {
  const quizzs = props.quizzs
  const id = props.userId
  const setShowModal = props.setShowModal
  console.log(props)
  return(
  <div>
    {quizzs.map((q) =>{
      if (q.user_id === id)
      return <div>
        aa
        <p>{q.quizz_name}</p>
        <p>{q.user_paragraph}</p>
        <p>{q.team_desciption}</p>
        <p>{q.income}</p>
        <p>{q.recruitment_type}</p>
        <p>{q.created_at}</p>
        <p>{q.updated_at}</p>

      </div>

    })

    }
    
    <button onClick={ev => setShowModal(false)}>Close</button>
  </div>
  )
  
}

UserInforModale.propTypes = {
  userId: PropTypes.number,
  quizzs: PropTypes.array,
  setShowModal: PropTypes.func,
};
