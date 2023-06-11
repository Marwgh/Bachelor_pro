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
    user_id:  '',
    post_title: '',
    post_text:'',
    post_image: '' ,
  })
  const [postsPage, setpostsPage] = useState(0);
  const [posts,setPosts] = useState([]);
  const onSubmit = ev => {
    ev.preventDefault()
    onFileUpload()
    if (!blogPost.post_image || blogPost.post_image.length < 2) {
      blogPost.post_image = "no answers"
    }

    axiosClient.post(`/blogPost`, blogPost )
        .then(() => {
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        }).then(()=>{
          axiosClient.get('getPosts').then(({data})=>{      
            setPosts(sliceIntoChunks(data,6))
            setLoading(false)
          }).catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
              setErrors(response.data.errors)
              setLoading(false)
      
            }
          })
        })

  }
  const length = posts.length;
  useEffect(() => {
    setLoading(true)
    axiosClient.get('getPosts').then(({data})=>{      
      setPosts(sliceIntoChunks(data,6))
      setLoading(false)
    }).catch(err => {
      const response = err.response;
      if (response && response.status === 422) {
        setErrors(response.data.errors)
        setLoading(false)

      }
    })
    
  }, [])

  useEffect(()=> {
    setBlogPost({...blogPost, user_id:user.id})
  }, [user])
  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
  }
  
  const nextSlide = () => {
    setpostsPage(postsPage === length - 1 ? 0 : postsPage + 1);
  };
  const prevSlide = () => {
    setpostsPage(postsPage === 0 ? length - 1 : postsPage - 1);
  };


    const onFileUpload = () => {

    
    // console.log(blogPost.post_image);
    // file.mv("images" ,  blogPost.post_image)
    // fetch('uploads/' + encodeURIComponent(blogPost.post_image), {method:'PUT',body:blogPost.post_image});
};
  


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
      {token &&
        <section className="postingSection">
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
                <label htmlFor="">Description</label>
                <textarea name="" id="" cols="30" rows="10" onChange={ev => setBlogPost({...blogPost, post_text: ev.target.value})}></textarea>
              </div>
              <div>
                <label htmlFor="fileInput">Select file</label>
                <p>{blogPost.post_image}</p>
                <input onChange={ev => setBlogPost({...blogPost, post_image: ev.target.files[0].name})} type="file" accept="image/png, image/jpeg" name="" id="fileInput" />
              </div>
              <button className="button">Post</button>
            </form>
        </section>
      }
      
      <section className="blogsList">
        <h2>All Posts</h2>
        {posts && !loading &&
        <div>
          {posts.map((post,pageIndex)=>(
            <>
            {pageIndex === postsPage &&
            <div className="page" key={"pageN"+pageIndex}>
            <h4>Page : {pageIndex}</h4>

            {post.map((p,postIndex)=>(
                <div key={"postN"+postIndex}>
                {p.post_image == "no answers" &&
                  <img src="images/postFiller.png" alt="" />
                }
                {p.post_image !== "no answers" &&
                  <img src={"images/"+p.post_image} alt="" />
                }
                <h3>{p.post_title}</h3>
                <p>{p.post_text}</p>
                {/*tags */}
                <Link to="#">Read Post</Link>
              </div>
              ))
            }
            </div>
            }
            </>
          ))}
        </div>
        }
        {!loading &&
      <div className="slideBtnHolder">
        <div className="slideButtons" onClick={()=>nextSlide()  }>Next</div>
        <div className="slideButtons" onClick={()=> prevSlide()  }>Previous</div>
      </div>
      }
        {loading && 
          <div>
            Loading ...
          </div>
        }
      </section>


      
      <ContactForm/>
      
    </main>
  )
}