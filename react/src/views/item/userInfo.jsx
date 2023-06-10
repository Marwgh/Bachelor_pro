import PropTypes from 'prop-types';

export default function UserInforModale(props) {
  const quizzs = props.quizzs
  const email = props.userEmail
  const setShowModal = props.setShowModal
  let quizzCounter = 0
  return(
  <div>
    <p>
      Quizz taken : {quizzCounter}
    </p>
    {quizzs.map((q) =>{
      
      if (q.user_email === email) {
        quizzCounter += 1
        return <div key={"key"}>
        <p>{q.quizz_name}</p>
        <p>{q.user_paragraph}</p>
        <p>{q.team_desciption}</p>
        <p>{q.income}</p>
        <p>{q.recruitment_type}</p>
        <p>{q.created_at}</p>
        <p>{q.updated_at}</p>
      </div>
      }
    })
    }
    
    <button onClick={ev => setShowModal(false)}>Close</button>

    
  </div>
  )
  
}

UserInforModale.propTypes = {
  userEmail: PropTypes.string,
  quizzs: PropTypes.array,
  setShowModal: PropTypes.func,
};
