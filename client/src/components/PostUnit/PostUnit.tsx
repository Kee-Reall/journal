import React from "react";
import { IPostUnitProps } from "../../interfaces/PostInterface";
import './PostUnit.scss'


const PostUnit = (props: IPostUnitProps) => {

    const {author, date ,update, content, header} = props

    const [upDate, createDate] = [new Date(update), new Date(date)]
    console.log(update)
    console.log(new Date(update))


    return(
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
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default PostUnit