import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/contextProvider";


export default function Blog() {
  const { user } = useStateContext()
  
  const [blogPost , setBlogPost] = useState({
    post_id: null,
    user_id: '',
    post_title: '',
    post_text:'',
    post_image: '' ,
  })
  const onSubmit = ev => {
    ev.preventDefault()
    console.log(ev)
  }


  return (
    <div>
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
  )
}