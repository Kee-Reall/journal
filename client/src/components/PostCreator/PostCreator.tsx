import React, {FormEvent, useState} from "react";
import axios from "axios";
import {serverURI} from "../../Helpers/Variables";
import { IPut } from "../../interfaces/PutInterface";

const PostCreator = () => {

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
    }

    const [author,setAuthor] = useState<string>('')
    const [header,setHeader] = useState<string>('')
    const [content,setContent] = useState<string>('')

    console.log(content)

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