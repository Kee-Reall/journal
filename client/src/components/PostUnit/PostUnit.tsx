import React, {useState} from "react";
import { IPostUnitProps } from "../../interfaces/PostInterface";
import './PostUnit.scss'
import axios from "axios";
import {serverURI} from "../../Helpers/Variables";


const PostUnit = (props: IPostUnitProps) => {

    const {author, date ,update, content, header} = props

    const [upDate, createDate] = [new Date(update), new Date(date)]

    const [isDelete, setIsDelete] = useState<boolean>(false)

     const  DeleteHandler = (): void => {
         axios.delete(serverURI, {
             data:{
                 author,
                 header,
                 content
             }
         })
             .then(({status}) => {
                 if(status === 200) {
                     setIsDelete((prev)=> !prev)
                 }
             })
             .catch(Error => console.log(Error))
     }

    return(
        <>
            {
                ! isDelete && (
                    <div className={'postUnit'}>
                        <div>
                            <h2>{header}</h2>
                            <div>
                                <p>{` last update ${upDate.getDate()} ${upDate.getMonth()} ${upDate.getFullYear()} ${upDate.getHours()}:${upDate.getMinutes()}`}</p>
                                <p>{`author is ${author}`}</p>
                            </div>
                            <pre>
                                {
                                    content
                                }
                            </pre>
                            <p>{`original post was created ${createDate.toDateString()}`}</p>
                        </div>
                        <div className={'btn-block'}>
                            <div>
                                <button>Edit</button>
                            </div>
                            <div>
                                <button onClick={DeleteHandler}>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default PostUnit