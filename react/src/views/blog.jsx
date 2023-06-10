import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/contextProvider";
import { Link } from "react-router-dom";
import ContactForm from "./item/contactForm.jsx";



export default function Blog() {
  const { user,token } = useStateContext()
  const [loading,setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [blogPost , setBlogPost] = useState({
    post_id: null,
    user_id: user.id,
    post_title: '',
    post_text:'',
    post_image: '' ,
  })
  const [posts,setPosts] = useState([]);
  const onSubmit = ev => {
    ev.preventDefault()
    if (!blogPost.post_image || blogPost.post_image.length < 2) {
      blogPost.post_image = "no answers"
    }
    console.log(blogPost)
    axiosClient.post(`/blogPost`, blogPost )
        .then(() => {
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })

  }
  useEffect(() => {
    setLoading(true)
    axiosClient.get('getPosts').then(({data})=>{      
      setPosts(data)
      setLoading(false)
    }).catch(err => {
      const response = err.response;
      if (response && response.status === 422) {
        setErrors(response.data.errors)
        setLoading(false)

      }
    })
    
  }, [])

      
  


  return (
    <main id="blogPage">
      <header>
        <h1>Endorfinas Blog </h1>
      </header>
      <section className="signUpCta">
        <p>Subscribe to Endorfinas blog to get regular updates on latest marketing trends and how to stand out from your compotetitors</p>
        <div>
          <input type="text" placeholder="emailexample@email.com" />
          <Link to="#" className="button">Update me on the lastest </Link>
        </div>
      </section>
      
      <section className="blogsList">
        <h2>All Posts</h2>
        {posts && !loading &&
        <div>
          {posts?.map(post=>(
            <div key={post.post_id}>
              {post.post_image == "no answers" &&
                <img src="images/postFiller.png" alt="" />
              }
              <h3>{post.post_title}</h3>
              <p>{post.post_text}</p>
              {/*tags */}
              <Link to="#">Read Post</Link>
            </div>
          ))}
        </div>
        }
        {loading && 
          <div>
            Loading ...
          </div>
        }
      </section>


      {token &&
        <div>
            <div>
              {errors &&
                <div className="alert">
                  {Object.keys(errors).map(key => (
                  <p key={key}>{errors[key][0]}</p>
                  ))}
                </div>
              }
            </div>
            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor="">Title</label>
                <input type="text"  onChange={ev => setBlogPost({...blogPost, post_title: ev.target.value})} />
              </div>
              <div>
                <label htmlFor=""></label>
                <textarea name="" id="" cols="30" rows="10" onChange={ev => setBlogPost({...blogPost, post_text: ev.target.value})}></textarea>
              </div>
              <div>
                <label htmlFor=""></label>
                <input onChange={ev => setBlogPost({...blogPost, post_image: ev.target.value})} type="file" name="" id="" />
              </div>
              <button>Post</button>
            </form>
        </div>
      }
      <ContactForm/>
      
    </main>
  )
}