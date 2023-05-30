import { useStateContext } from "../context/contextProvider";
import axiosClient from "../axios-client.js";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";


export default function Quizz() {
  const { token ,setNotification} = useStateContext()
  const [loading,setLoading] = useState(false);
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    job:'',
    company: '' ,
    phone: '' ,
    password: '',
    password_confirmation: ''
  })
  const [quizzAnswer,setQuizzAnswer] = useState({
    id:null,
    quizz_name:'baseQuizz',
    user_id:'',
    user_paragraph:'',
    team_desciption:'',
    income:'',
    recruitment_type:'',
  })

  if (token) {
    useEffect(() => {
      setLoading(true)
      axiosClient.get('/user').then(({data})=>{
        setUser(data)
        setQuizzAnswer({...quizzAnswer, user_id: data.id})
        setLoading(false)
      }).catch(() => {
          setLoading(false)
        })
    }, [])
    
  }
  // console.log(quizzAnswer);

  const onSubmit = ev => {
    ev.preventDefault()
    // debugger
    // setQuizzAnswer({... quizzAnswer, user_id : user.id})
    
    console.log(user)
    axiosClient.post(`/quizz`, quizzAnswer )
        .then(() => {

          setNotification('Quizz sent')
          navigate('/home')
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        }).then(()=> {
          if (user.id) {
            axiosClient.put(`/users/${user.id}`, user)
              .then(() => {
                console.log(user)
                setNotification('User was successfully updated')
              })
              .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                  setErrors(response.data.errors)
                }
              })
          } 
          else {
            axiosClient.post('/user', user)
              .then(() => {
                setNotification('User was successfully created')
              })
              .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                  setErrors(response.data.errors)
                }
              })
          }
          
        })
    
    
  }

  useEffect(() => {
    if (user.email && user.name && user.phone) {
      setUser({...user, user_points: (quizzAnswer.user_paragraph.length)*1.5})
    }else{
    setUser({...user, user_points: quizzAnswer.user_paragraph.length})
    }

  },[user.name,user.email,user.phone,quizzAnswer.user_paragraph])
    
  

  function pointCalulatorSecond () {
    console.log("yes")
    console.log(user)
    
  }

  return (
    <div>
      {loading &&
      <div>
        <p>Loading ...</p>
      </div>

      }
      {errors &&
          <div className="alert">
            {Object.keys(errors).map(key => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        }
      
        {user.user_points}
      {!loading && 
      <form onSubmit={onSubmit}>
      <fieldset onChange={ev => setQuizzAnswer({...quizzAnswer, user_paragraph: ev.target.value})}>
        <p>1. When it comes to hiring high quality employees, what's the <strong>single biggest challenge</strong> you've been struggling with ?</p>
        <p>(please be as detailed and specific as possible)</p> 
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </fieldset>
      <fieldset onChange={ev => setQuizzAnswer({...quizzAnswer, team_desciption: ev.target.value})}>
        <p>whichof these best describe your team of employees at the moment ?</p>
        <div>
          <label htmlFor="">We are a small organization with a few team memebers performing multiple roles</label>
          <input type="radio" name="size" value={"small organization"} />
        </div>
        <div>
          <label htmlFor="">We have a large team with designated roles for each team member</label>
          <input type="radio" name="size" value={"large team"} />
        </div>
        <div>
          <label htmlFor="">Our team is distributed across the globe and we connect via online meetings/chats</label>
          <input type="radio" name="size" value={"distributed across the globe"} />
        </div>
        <div>
          <label htmlFor="">I am a solopreneur looking to expand my team</label>
          <input type="radio" name="size" value={"solopreneur"} />
        </div>

      </fieldset>
      <fieldset onChange={ev => setQuizzAnswer({...quizzAnswer, income: ev.target.value})}>
        <p></p>
        <div>
          <input type="radio" name="revenue" value={"Less than $50,000"} />
          <label htmlFor="">Less than $50,000</label>
        </div>
        <div>
          <input type="radio" name="revenue" value={"$50,000 - $500,000"} />
          <label htmlFor="">$50,000 - $500,000</label>
        </div>
        <div>
          <input type="radio" name="revenue" value={"$500,000 - $1,000,000"} />
          <label htmlFor="">$500,000 - $1,000,000</label>
        </div>
        <div>
          <input type="radio" name="revenue" value={"$1,000,000 - $5,000,000"} />
          <label htmlFor="">$1,000,000 - $5,000,000</label>
        </div>
        <div>
          <input type="radio" name="revenue" value={"Greater than $5,000,000"} />
          <label htmlFor="">Greater than $5,000,000</label>
        </div>
      </fieldset>
      <fieldset onChange={ev => setQuizzAnswer({...quizzAnswer, recruitment_type: ev.target.value})}>
      <p><strong>Last question:</strong>if we were to create a paid program on one of the following topic (and to choose just one) wich of the following are you
      <strong>most intrested in</strong>, and would've signed up for if allready available ?
      </p>
        <div>
          <input type="radio" name="recruitType" value={"Facebook"} />
          <label htmlFor="">How To Recruit A-Players Using Facebook</label>
        </div>
        <div>
          <input type="radio" name="recruitType" value={"LinkedIn"} />
          <label htmlFor="">LinkedIn Recruting Made Easy</label>
        </div>
        <div>
          <input type="radio" name="recruitType" value={"Craigslist"} />
          <label htmlFor="">Craigslist Hiring Secrests</label>
        </div>
        <div>
          <input type="radio" name="recruitType" value={"Ultimate Guide"} />
          <label htmlFor="">The Ultimate Guide To Working With Head Hunters</label>
        </div>
        <div>
          <input type="radio" name="recruitType" value={"none of the above"} />
          <label htmlFor="">Honestly, none of the above topic really intrests me enough to consider singing up for a program.</label>
        </div>
      </fieldset>
      {token &&
      <fieldset>
        <p><strong>Last step:</strong> Whats your best contact information so I can make sure you're notified about the A-player Tips when it's made available?</p>
        <div>
          {user.name}
        <label htmlFor="">Name</label>
        <input placeholder={user.name}  onChange={ev => setUser({...user, name: ev.target.value})} />
        </div>
        <div>
        <label htmlFor="">Email</label>
        <input placeholder={user.email}  onChange={ev => setUser({...user, email: ev.target.value})}  />
        </div>
        <p></p>
        <div>
        <label htmlFor="">Phone</label>
        <input type="tel"  onChange={ev => setUser({...user, phone: ev.target.value})}/>
        </div>
        <div>
        <label htmlFor="">Company</label>
        <input type="text" onChange={ev => setUser({...user, company: ev.target.value})}/>
        </div>
        <div>
        <label htmlFor="">Job</label>
        <input type="text" onChange={ev => setUser({...user, job: ev.target.value})} />
        </div>
        <button type="submit" >Submit</button>

        
      </fieldset>
      }
      {!token &&
        <fieldset>
        <p><strong>Last step:</strong> Whats your best contact information so I can make sure you're notified about the A-player Tips when it's made available?</p>
        <div>
        <label htmlFor="">Name</label>
        <input type="text" />
        </div>
        <div>
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" />
        </div>
        <p></p>
        <div>
        <label htmlFor="">Phone</label>
        <input type="tel" />
        </div>
        <div>
        <label htmlFor="">Company</label>
        <input type="text" />
        </div>
        <div>
        <label htmlFor="">Job</label>
        <input type="text" />
        </div>
        <button type="submit">Submit</button>
      </fieldset>
      }
    </form>

      }
    </div>
  )
}