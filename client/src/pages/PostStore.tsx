import React, {useState, useEffect, Fragment, FormEvent} from "react";
import axios from "axios";
import PostUnit from "../components/PostUnit/PostUnit";
import  { IPostUnitProps } from "../interfaces/PostInterface";
import {serverURI} from "../Helpers/Variables";
import {IPut} from "../interfaces/PutInterface";

const PostStore = () => {

    const initial:string = ''

    const [post,setPost] = useState<Array<IPostUnitProps>>([])
    const [author,setAuthor] = useState<string>(initial)
    const [header,setHeader] = useState<string>(initial)
    const [content,setContent] = useState<string>(initial)
    const [changeIndicator,setChangeIndicator] = useState<boolean>(false)


    const axiosGetConfig: any = {
        "Content-Type" : "application/json"
    }

    useEffect(() => {
        axios.get(serverURI,axiosGetConfig)
            .then( response => setPost(response.data))
            .catch( e => {
                console.log(e)
                setPost([])
            })
    },[changeIndicator])


    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const putObject: IPut = {
            author,
            header,
            content
        }
        axios
            .post(serverURI, putObject)
            .then( res => {
                const { status } = res
                console.log(res)
                if (status === 200) {
                    setChangeIndicator((prev) => !prev)
                }
            })
            .catch(error => console.error(error))
            .finally(() => {
                setAuthor(()=>initial)
                setHeader(()=>initial)
                setContent(()=>initial)
            })
    }

    return(
        <Fragment>
            <h1>Create Form</h1>
            <form onSubmit={ submitHandler }>
                <div className={'inputs'}>
                    <input
                        type={'text'} placeholder={'author'} value={author}
                        onChange={({ target: { value } })=> {
                            setAuthor(() => value )
                        }}
                    />
                    <input
                        type={'text'} placeholder={'Header'} value={header}
                        onChange={({ target: { value } })=> {
                            setHeader(() => value )
                        }}
                    />
                    <textarea
                        rows={4} placeholder={'content'} value={content}
                        onChange={({ target: { value } }) => {
                            setContent(() => value)
                        }}
                    />
                </div>
                <button>create</button>
            </form>
            <h1>post store</h1>
            {
                post.length > 0 ?(
                    post.map( (el:IPostUnitProps) => {
                        const {author, date, update, content, header} = el
                        return(
                            <PostUnit key={author + date.toString()} author={author} date={date} update={update} content={content} header={header}/>
                        )
                    })
                ) : <h1>No posts</h1>
            }
        </Fragment>
    )
}

export default PostStore