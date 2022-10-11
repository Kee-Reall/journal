import React from "react";
import { IPostUnitProps } from "../../interfaces/PostInterface";


const PostUnit = (props: IPostUnitProps) => {

    const {author, date ,update, content, header} = props

    const [upDate, createDate] = [new Date(update), new Date(date)]
    console.log(update)
    console.log(new Date(update))


    return(
        <div className={'postUnit'}>
            <h2>{header}</h2>
            <div>
                <p>{`${upDate.getDate()} ${upDate.getMonth()} ${upDate.getFullYear()}`}</p>
                <p>{ author }</p>
            </div>
            <pre>
                {
                    content
                }
            </pre>
            <p>{`original post was created ${createDate.toDateString()}`}</p>
        </div>
    )
}

export default PostUnit