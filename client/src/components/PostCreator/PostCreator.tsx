import React, {FormEvent, useState} from "react";
import axios from "axios";
import {serverURI} from "../../Helpers/Variables";
import { IPut } from "../../interfaces/PutInterface";
import {PostCreatorInterface} from "../../interfaces/PostCreatorInterface";

const PostCreator = ({indicator}:PostCreatorInterface) => {

    const initial:string = ''

    const [author,setAuthor] = useState<string>(initial)
    const [header,setHeader] = useState<string>(initial)
    const [content,setContent] = useState<string>(initial)

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const putObject: IPut = {
            author,
            header,
            content
        }
        console.log(putObject)
        axios
            .post(serverURI, putObject)
            .then(res => console.log(res))
            .catch(error => console.error(error))
            .finally(() => {
                indicator((prev: boolean)=> !prev)
                setAuthor(()=>initial)
                setHeader(()=>initial)
                setContent(()=>initial)
            })
    }

    return(
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
    )
}

export default PostCreator

// this component is useless now