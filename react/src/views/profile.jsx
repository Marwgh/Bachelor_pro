import { useStateContext } from "../context/contextProvider";


export default function Profile() {
  const {user, setUser} = useStateContext()

  

  return (
    <div>
      <h1>
        Name : {user.name}
      </h1>
      <p>
        Email : {user.email}
      </p>
      {user.company !== "no answers" &&
        <p>
          {user.company}
        </p>
      }
      {user.phone !== "no answers" &&
        <p>
          {user.phone}
        </p>
      }
      {user.job !== "no answers" &&
        <p>
          {user.job}
        </p>
      }
    </div>
  )
}