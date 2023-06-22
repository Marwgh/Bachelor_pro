import PropTypes from 'prop-types';

export default function UserInforModale(props) {
  const quizzs = props.quizzs
  const email = props.userEmail
  const setShowModal = props.setShowModal
  let quizzCounter = 0
  return(
  <div id='userInforModale'>
    <div>
    <p>
      
    </p>
    {quizzs.map((q,index) =>{
      
      if (q.user_email === email) {
        quizzCounter += 1     
        
        return <div key={"key"+q.quizz_name}>
        <p><strong>Quizz taken: {quizzCounter}</strong> </p>
        <p><strong>Quizz name</strong> : {q.quizz_name}</p>
        <p><strong>User text answer</strong> : {q.user_paragraph}</p>
        <p><strong>team descrition</strong> : {q.team_desciption}</p>
        <p><strong>Iconme range</strong> : {q.income}</p>
        <p><strong>Favorite recruitment type</strong> : {q.recruitment_type}</p>
      </div>
      }
      if (quizzCounter == 0 && index == (quizzs.length-1  ) ) {
        return <p key={"noQuizz"}>
          <strong>No quizz taken</strong>
          </p>

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
