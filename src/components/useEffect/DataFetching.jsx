import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataFetching() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});
  
  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>{
        setLoading(false);
        setError("");
        setPost(res.data);
    }).catch(err=>{
        setError("Something went wrong..!");
        setPost({});
        setLoading(false);
    })
  })
  return (
    <div>DataFetching
        {loading? "Loading...": post.title}
        {error? error:""}
    </div>
  )
}

export default DataFetching