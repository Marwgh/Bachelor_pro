export default function UserInforModale(props) {

    const id = props.userId;
    const setShowModal = props.setShowModal;
    console.log(id)
  return(
    <div>
      testets
      {id}
      <button onClick={ev => setShowModal(false)}>Close</button>
    </div>
    )
  
}

