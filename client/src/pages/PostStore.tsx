import React, { useState,useEffect } from "react";
import axios from "axios";

const PostStore = () => {

    const [post,setPost] = useState([])

    useEffect(() =>{
        axios
            .get('http://localhost:8000/')
            //.then(response => console.log(response))
            .then(response => setPost(response.data))
            .catch( e => {
                console.log(e)
                setPost([])
            })
    },[])
    return(
        <>
            <h1>post store</h1>
            {
                post.length > 0 ?(
                    post.map( (el:any) => {
                        return(
                            <div>
                                <span>{el.author}</span>
                                <p>{el.date}</p>
                                <p>{el.update}</p>
                                <span>{ el.content }</span>
                            </div>
                        )
                    })
                ) : <h1>No posts</h1>
            }
        </>
    )
}

export default PostStore