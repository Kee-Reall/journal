import React, {useState, useEffect, FormEvent} from "react";
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
    const [isInputsDisable,setInputsDisable] = useState<boolean>(false)
    const [authorFilter,setAuthorFilter] = useState<string>('')

    const axiosGetConfig: any = {
        "Content-Type" : "application/json"
    }

    useEffect(() => {
        axios.get(serverURI)
            .then( response => setPost(response.data))
            .catch( e => {
                console.log(e)
                setPost([])
            })
    },[changeIndicator])

    const setInputDefaults = ():void => {
        setAuthor(()=>initial)
        setHeader(()=>initial)
        setContent(()=>initial)
        setInputsDisable(()=>false)
    }

    const searchButtonHandler = async ():Promise<void> => {
        setInputsDisable(()=> true)
        axios.get(`${serverURI}?user=${authorFilter}`,axiosGetConfig)
        .then( response => setPost(response.data))
        .catch( e => {
            console.log(e)
        }).finally(()=> setTimeout(() => setInputsDisable( ()=> false ),400))
    }

    const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setInputsDisable(()=> true)
        if(author.trim() === initial || header.trim() === initial || content.trim() === initial) {
            setTimeout(()=>setInputDefaults(),2000)
            return
        }
        const putObject: IPut = { author, header, content }
        axios
            .post(serverURI, putObject)
            .then( res => {
                const { status } = res
                console.log(res)
                if (status === 200) {
                    setChangeIndicator((prev) => !prev)
                }
            })
            .catch(error =>  {
                console.error(error)
            })
            .finally(() => {
                setTimeout(()=>setInputDefaults(),400)
            })
    }

    return(
        <>
            <h1>Create Form</h1>
            <form onSubmit={ submitHandler }>
                <div className={'inputs'}>
                    <input
                        type={'text'} placeholder={'author'} disabled={isInputsDisable} value={author}
                        onChange={({ target: { value } })=> {
                            setAuthor(() => value )
                        }}
                    />
                    <input
                        type={'text'} placeholder={'Header'} disabled={isInputsDisable} value={header}
                        onChange={({ target: { value } })=> {
                            setHeader(() => value )
                        }}
                    />
                    <textarea
                        rows={4} placeholder={'content'} disabled={isInputsDisable} value={content}
                        onChange={({ target: { value } }) => {
                            setContent(() => value)
                        }}
                    />
                </div>
                <button disabled={isInputsDisable}>create</button>
                <p>{isInputsDisable && <span style={{color:"white"}}>form is disabled</span>}</p>
            </form>
            <h1>Author filter</h1>
            <input
                type='text' value={authorFilter} disabled={isInputsDisable}
                onChange={({ target: { value } })=> {
                    setAuthorFilter(() => value )
                }}            
            />
            <button onClick={searchButtonHandler} disabled={isInputsDisable}>search</button>
            <h1>post store</h1>
            {
                post.length > 0 ? (
                    post.map( (el:IPostUnitProps) => {
                        const {author, date, update, content, header} = el
                        return(
                            <PostUnit
                                key={author + date.toString()}
                                author={author}
                                date={date}
                                update={update}
                                setChanger={setChangeIndicator}
                                content={content}
                                header={header}
                            />
                        )
                    })
                ) : <h1>No posts found</h1>
            }
        </>
    )
}

export default PostStore