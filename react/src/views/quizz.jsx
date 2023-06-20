import { useStateContext } from "../context/contextProvider";
import axiosClient from "../axios-client.js";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";


export default function Quizz() {
  const { token ,setNotification, setToken} = useStateContext()
  const [loading,setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [quizzs,setQuizzs] = useState([]);
  const [hasQuizz, setHasQuizz ] = useState(false);
  const navigate = useNavigate();
  const [quizzAnswer,setQuizzAnswer] = useState({
    id:null,
    quizz_name:'baseQuizz',
    user_email:'',
    user_paragraph:'',
    team_desciption:'',
    income:'',
    recruitment_type:'',
  })
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    job:'none',
    company: 'none' ,
    phone: ' none' ,
    password: '',
    password_confirmation: ''
  })
  if (token) {
    useEffect(() => {
      setLoading(true)
      axiosClient.get('/user').then(({data})=>{
        setUser(data)
        setQuizzAnswer({...quizzAnswer, user_email: data.email})
      }).then(()=>{
        axiosClient.get('/quizz').then(({data})=> {
          setQuizzs(data)
          

        })
        
      })
      
    }, [])
  }
  useEffect(()=>{
    quizzs.map((quizz,i ) => {
      i++
      if (quizz.user_email == user.email) {
        setHasQuizz(true)
        setLoading(false)
      }
      if (i === quizzs.length) {
        setLoading(false)
      }
    });

  },[quizzs])

  const onSubmit = ev => {
    ev.preventDefault()
    // debugger
    // setQuizzAnswer({... quizzAnswer, user_id : user.id})
    if (!user.job || user.job.length < 2) {
      user.job = "no answers"
    }
    if  (!user.phone || user.phone.length < 2) {
      user.phone = "no answers"
    }
    if ( !user.company || user.company.length < 2) {
      user.company = "no answers"
    }

    if (user.id) {
      axiosClient.put(`/users/${user.id}`, user)
        .then(() => {
          setNotification('User was successfully updated')
          setQuizzAnswer({...quizzAnswer, user_email: user.email})
          navigate('/home')
        }).catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        }).then(()=> {
          axiosClient.post(`/quizz`, quizzAnswer ).then(() => {
            setNotification('Quizz sent')
          })
          .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
              setErrors(response.data.errors)
            }
          })})
    } else {
      axiosClient.post('/signup', user)
        .then(() => {
          setQuizzAnswer({...quizzAnswer, user_email: user.email})
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        }).then(()=> {
          axiosClient.post(`/quizz`, quizzAnswer ).then(() => {
            setNotification('Quizz sent')
            navigate("/profile")
          }).catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
              setErrors(response.data.errors)
            }
          })
        })
    }
    
    
  }
  const changeStep = step => {
    const stepOne= document.querySelector(".stepOne");
    const stepTwo= document.querySelector(".stepTwo");
    const stepThree= document.querySelector(".stepThree");
    const stepFour= document.querySelector(".stepFour");
    const stepFive= document.querySelector(".stepFive");
    if (stepOne) {
      if (step == 1) {
        stepOne.style.display="none";
        stepTwo.style.display="grid";
      }else if(step == "back1"){
        stepTwo.style.display="none";
        stepOne.style.display="grid";
      } else if(step == 2){
        stepTwo.style.display="none";
        stepThree.style.display="grid";
      }else if(step == "back2"){
        stepThree.style.display="none";
        stepTwo.style.display="grid";
      }else if(step == 3){
        stepThree.style.display="none";
        stepFour.style.display="grid";
      }else if(step == "back3"){
        stepFour.style.display="none";
        stepThree.style.display="grid";
      }else if (step == "back4"){
        stepFive.style.display="none";
        stepFour.style.display="grid";
      }else{
        stepFour.style.display="none";
        stepFive.style.display="grid";
      }
    }
  }

  useEffect(() => {
    if (user.email && user.name && user.phone) {
      setUser({...user, user_points: (quizzAnswer.user_paragraph.length)*1.5})
    }else{
    setUser({...user, user_points: quizzAnswer.user_paragraph.length})
    }

  },[user.name,user.email,user.phone,quizzAnswer.user_paragraph])
    
  
  return (
    <main id="quizzPage">
      <header>
        <h1>Questionnair</h1>
      </header>
      <h2>A few question to find out if we are a perfect match </h2>
      
        <div>
        {loading &&
        <div>
          <p>Loading ...</p>
        </div>
        }
        
      {hasQuizz==false && !loading  &&
      <form onSubmit={onSubmit}>
        {errors &&
          <div className="alert errorMessage">
            {Object.keys(errors).map(key => (
              <p className="errorMessage" key={key}>{errors[key][0]}</p>
            ))}
          </div>
        }
      <fieldset className="stepOne" onChange={ev => setQuizzAnswer({...quizzAnswer, user_paragraph: ev.target.value})}>
        <h3>1/5</h3>
        <p>1. When it comes to hiring high quality employees, what's the <strong>single biggest challenge</strong> you've been struggling with ?</p>
        <p>(please be as detailed and specific as possible)</p> 
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div className="button" onClick={() => {changeStep(1)}}>Next</div>
      </fieldset>
      <fieldset className="stepTwo" onChange={ev => setQuizzAnswer({...quizzAnswer, team_desciption: ev.target.value})}>
        <h3>2/5</h3>
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
        <div>
        <div className="button" onClick={() => {changeStep("back1")}}>Back</div>
        <div className="button" onClick={() => {changeStep(2)}}>Next</div>
        </div>

      </fieldset>
      <fieldset className="stepThree" onChange={ev => setQuizzAnswer({...quizzAnswer, income: ev.target.value})}>
        <h3>3/5</h3>
        <p></p>
        <div>
          <label htmlFor="">Less than $50,000</label>
          <input type="radio" name="revenue" value={"Less than $50,000"} />
        </div>
        <div>
          <label htmlFor="">$50,000 - $500,000</label>
          <input type="radio" name="revenue" value={"$50,000 - $500,000"} />
        </div>
        <div>
          <label htmlFor="">$500,000 - $1,000,000</label>
          <input type="radio" name="revenue" value={"$500,000 - $1,000,000"} />
        </div>
        <div>
          <label htmlFor="">$1,000,000 - $5,000,000</label>
          <input type="radio" name="revenue" value={"$1,000,000 - $5,000,000"} />
        </div>
        <div>
          <label htmlFor="">Greater than $5,000,000</label>
          <input type="radio" name="revenue" value={"Greater than $5,000,000"} />
        </div>
        <div>
        <div className="button" onClick={() => {changeStep("back2")}}>Back</div>
        <div onClick={() => {changeStep(3)}} className="button" >Next</div>
        </div>

      </fieldset>
      <fieldset className="stepFour" onChange={ev => setQuizzAnswer({...quizzAnswer, recruitment_type: ev.target.value})}>
        <h3>4/5</h3>
      <p><strong>Last question:</strong>if we were to create a paid program on one of the following topic (and to choose just one) wich of the following are you
      <strong>most intrested in</strong>, and would've signed up for if allready available ?
      </p>
        <div>
          <label htmlFor="">How To Recruit A-Players Using Facebook</label>
          <input type="radio" name="recruitType" value={"Facebook"} />
        </div>
        <div>
          <label htmlFor="">LinkedIn Recruting Made Easy</label>
          <input type="radio" name="recruitType" value={"LinkedIn"} />
        </div>
        <div>
          <label htmlFor="">Craigslist Hiring Secrests</label>
          <input type="radio" name="recruitType" value={"Craigslist"} />
        </div>
        <div>
          <label htmlFor="">The Ultimate Guide To Working With Head Hunters</label>
          <input type="radio" name="recruitType" value={"Ultimate Guide"} />
        </div>
        <div>
          <label htmlFor="">Honestly, none of the above topic really intrests me enough to consider singing up for a program.</label>
          <input type="radio" name="recruitType" value={"none of the above"} />
        </div>
        <div>
        <div className="button" onClick={() => {changeStep("back3")}}>Back</div>
        <div className="button" onClick={() => {changeStep(4)}}>Next</div>
        </div>

      </fieldset>
      {token &&
      <fieldset className="stepFive">
        <h3>5/5</h3>
        <p><strong>Last step:</strong> Whats your best contact information so I can make sure you're notified about the A-player Tips when it's made available?</p>
        <div>
        <label htmlFor="">Name</label>
        <p>{user.name}</p>
        </div>
        <div>
        <label htmlFor="">Email</label>
        <p>{user.email}</p>
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
        <input type="text" onChange={ev => setUser({...user, job: ev.target.value})}  />
        </div>
        <div>
        <div className="button" onClick={() => {changeStep("back4")}}>Back</div>
        <button type="submit" className="button" >Submit</button>
        </div>

        
      </fieldset>
      }
      {!token &&
        <fieldset className="stepFive">
          <h3>5/5</h3>
        <p><strong>Last step:</strong> Whats your best contact information so I can make sure you're notified about the A-player Tips when it's made available?</p>
        <div>
        <label htmlFor="">Name</label>
        <input type="text"  onChange={ev => setUser({...user, name: ev.target.value})}/>
        </div>
        <div>
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" onChange={ev => {setUser({...user, email: ev.target.value}),setQuizzAnswer({...quizzAnswer, user_email: ev.target.value})}} />
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
        <input type="text" onChange={ev => setUser({...user, job: ev.target.value})}  />
        </div>
        <div>
        <label htmlFor="">Password</label>
        <input type="password" onChange={ev => setUser({...user, password: ev.target.value})} />
        </div>
        <div>
        <label htmlFor="">Password Confirmation</label>
        <input type="password" onChange={ev => setUser({...user, password_confirmation: ev.target.value})} />
        </div>
        <div>
        <div className="button" onClick={() => {changeStep("back4")}}>Back</div>
        <button type="submit" className="button">Submit</button>
        </div>

      </fieldset>
      }
      </form>

      }

      {hasQuizz==true &&
      <div className="quizzDone">
        <h3>You allready have taken the quizz! Thank you for submiting!</h3>
        <p>Our team will contact you shortly!</p>
      </div>

      }
      <div>
        <img src="images/fillerSL.png" alt="" />
      </div>
        </div>
    </main>
  )
}