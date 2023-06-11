import PropTypes from 'prop-types';

export default function UserInforModale(props) {
  const quizzs = props.quizzs
  const email = props.userEmail
  const setShowModal = props.setShowModal
  let quizzCounter = 0
  console.log(quizzs)
  return(
  <div id='userInforModale'>
    <div>
    <p>
      <strong>Quizz taken</strong> : {quizzCounter}
    </p>
    {quizzs.map((q) =>{
      
      if (q.user_email === email) {
        quizzCounter += 1
        return <div key={"key"}>
        <p><strong>Quizz name</strong> : {q.quizz_name}</p>
        <p><strong>User text answer</strong> : {q.user_paragraph}</p>
        <p><strong>team descrition</strong> : {q.team_desciption}</p>
        <p><strong>Iconme range</strong> : {q.income}</p>
        <p><strong>Favorite recruitment type</strong> : {q.recruitment_type}</p>
      </div>
      }
    })
    }
    
    <button className='button' onClick={ev => setShowModal(false)}>Close</button>
    </div>

    
  </div>
  )
  
}

UserInforModale.propTypes = {
  userEmail: PropTypes.string,
  quizzs: PropTypes.array,
  setShowModal: PropTypes.func,
};
