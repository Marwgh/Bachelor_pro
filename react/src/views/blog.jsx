import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/contextProvider";
import { Link } from "react-router-dom";
import ContactForm from "./item/contactForm.jsx";


export default function Blog() {
  const { user,token,setNotification } = useStateContext()
  const [loading,setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [blogPost , setBlogPost] = useState({
    post_id: null,
    user_id:  '',
    post_title: '',
    post_text:'',
    post_image: '' ,
})
  const [tagsNpost,setTagsNpost] = useState([])
  const [tags, setTags] = useState([])
  const [newPostTags, setNewPostTags] = useState([])
  const [postsPage, setpostsPage] = useState(0);
  const [posts,setPosts] = useState([]);
  const [tempPostId, setTempPostId] = useState("");
  const length = posts.length;
  

  const onDelete = (p) => {
    if (!window.confirm(`Delete post ${p.post_title}?`)){
      return
    }

    axiosClient.delete(`/blogPost/${p.post_id}`).catch(err => {
      const response = err.response;
      if (response && response.status === 422) {
        setErrors(response.data.errors)
      }
    })
  }
  
  const onSubmit = ev => {
    ev.preventDefault()
    if (!blogPost.post_image || blogPost.post_image.length < 2) {
      blogPost.post_image = "no answers"
    }
    setLoading(true)
    axiosClient.post(`/blogPost`, blogPost )
        .then(() => {
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        }).then(()=>{
          axiosClient.get(`/getPost`,  blogPost)
          .then(({data}) => {
            setTempPostId(data.post_id)
          }).catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
              setErrors(response.data.errors)
            }
          })}).then(()=>{
            axiosClient.get('getPosts').then(({data})=>{      
              setPosts(sliceIntoChunks(data,6))
            }).catch(err => {
              const response = err.response;
              if (response && response.status === 422) {
                setErrors(response.data.errors)
        
              }
            })
          })

          
          

  }

  useEffect(()=> {
    if (tempPostId) {
      newPostTags.forEach(postTag => {
      
    
        const tagPostRelation = {
          'tag_id':postTag.tag_id,
          'post_id':tempPostId,
        }
        console.log(tagPostRelation)
        axiosClient.post("/TagsNPosts",tagPostRelation).then(() => {
  
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
  
          }
        }).then(()=>{
          axiosClient.get('/seeTagsNPosts').then(({data})=>{
            setTagsNpost(data)
            setLoading(false)
          })
        })
      
    })
  
    }
  if(newPostTags.length == 0){
    setLoading(false)
  }
  }, [tempPostId])


  useEffect(() => {
    setLoading(true)
    axiosClient.get('/getPosts').then(({data})=>{      
      setPosts(sliceIntoChunks(data,6))
      setLoading(false)
    }).catch(err => {
      const response = err.response;
      if (response && response.status === 422) {
        setErrors(response.data.errors)
        setLoading(false)

      }
    })
    axiosClient.get('/seeTags').then(({data})=>{
      setTags(data)
      console.log(tags)
    })
    axiosClient.get('/seeTagsNPosts').then(({data})=>{
      setTagsNpost(data)
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

  const addTagToPost = (tag_id , event) => {
    console.log( event.target)
    console.log(newPostTags.some(t => t.tag_id === tag_id))
    
    if (newPostTags.some(t => t.tag_id === tag_id) == false) {
      setNewPostTags([...newPostTags , ...[ {'tag_id': tag_id,}]])
        event.target.style.color="white"

    } else if (newPostTags.some(t => t.tag_id === tag_id) == true) {
      setNewPostTags(newPostTags.filter(t => t.tag_id !== tag_id))
      event.target.style.color="black"

    } 
      
    
    
    
  }
  
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
           
            <form onSubmit={onSubmit}>
            <div>
              {errors &&
                <div className="errorMessage">
                  {Object.keys(errors).map(key => (
                  <p key={"error"+key}>{errors[key][0]}</p>
                  ))}
                </div>
              }
            </div>
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
              <div className="tagHolder">
                {tags.map((t,index)=>(
                  <div onClick={ev => addTagToPost(t.id , ev)} className="tag button" key={"tagNF"+index}>
                    {t.tag_text}
                  </div>
                ))}
                
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
            <div className="page" key={"pageN"+pageIndex+"postsPage"}>
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
                <div className="postTagsHolder">
                  {tagsNpost &&
                    <>
                    {tagsNpost.map(TNP => (
                      <>
                      
                      {TNP.post_id == p.post_id &&
                        <>
                        
                        {tags.map((tagP,tagPIndex)=>(
                          <>
                          {tagP.id == TNP.tag_id &&
                          
                          <div key={"tagPostBlog"+tagPIndex} className="postTags slideButtons">
                            
                            {tagP.tag_text}
                            
                          </div>
                          }
                          </>
                        ))}
                        </>
                        }
                      </>
                    ))
                      
                        
                      
                      
                    
                    }
                    </>
                  }
                </div>
                <Link className="readPost" to="#">Read Post</Link>
                {user.email == "admin@admin.com" &&
                <Link  onClick={ev => onDelete(p)} >Delete</Link>
                }
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
        <div className="slideButtons" onClick={()=> prevSlide()  }>Previous</div>
        <div className="slideButtons" onClick={()=>nextSlide()  }>Next</div>
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