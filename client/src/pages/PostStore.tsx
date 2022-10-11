import React, { useState,useEffect } from "react";
import axios from "axios";
import PostUnit from "../components/PostUnit/PostUnit";
import { IPostUnitProps } from "../interfaces/PostInterface";

const PostStore = () => {

    const [post,setPost] = useState([])

    const axiosConfig: any = {
        "Content-Type" : "application/json"
    }

    useEffect(() =>{
        axios
            .get('http://localhost:8000/',axiosConfig)
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
                    post.map( (el:IPostUnitProps) => {
                        const {author, date, update, content, header} = el
                        return(
                            <PostUnit author={author} date={date} update={update} content={content} header={header}/>
                        )
                    })
                ) : <h1>No posts</h1>
            }
        </>
    )
}

export default PostStore