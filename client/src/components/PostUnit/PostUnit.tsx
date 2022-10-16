import React, { useState } from "react";
import { IPostUnitProps } from "../../interfaces/PostInterface";
import './PostUnit.scss'
import axios from "axios";
import { serverURI } from "../../Helpers/Variables";


const PostUnit = (props: IPostUnitProps) => {

    const {author, date ,update,header,content, setChanger} = props

    const [upDate, createDate] = [new Date(update), new Date(date)]

    const [isDelete, setIsDelete] = useState<boolean>(false)
    const [isEditMode,setIsEditMode] = useState<boolean>(false)
    const [headerState , setHeaderState] = useState<string>(header)
    const [contentState, setContentState] = useState<string>(content)

    const [headerView, setHeaderView] = useState<string>(header)
    const [contentView, setContentView] = useState<string>(content)

    const  DeleteHandler = (): void => {
        axios.delete(serverURI, {
            data: {
                author,
                header,
                content
            }
        }).then(({status}) => {
                if(status === 200) {
                    setIsDelete((prev)=> !prev)
                }
        }).catch(Error => console.log(Error))
    }

    const changeHandler = (): void | undefined => {
        if( (header.trim() === headerState.trim()) && (content.trim() === contentState.trim()) ) {
            setIsEditMode(() => false)
            return
        }
        axios.put(serverURI,{
            toFind: {
                author, date, update, header, content
            },
            toPut: {
                header: headerState,
                content: contentState
            }
        }).then(res => {
            if(res.status === 200) {
                setHeaderView(() => headerState)
                setContentView(()=> contentState)
                setIsEditMode(()=> false)
            }
            console.log(res)
        }).catch(error => console.log(error))
    }

    const editHandler = (): void => {
        setIsEditMode((prev) => !prev)
        setHeaderState(()=> header)
        setContentState(()=> content)
    }

    const EditHTML = (
        <div style={{display:'block'}}>
            <input value={headerState} onChange={({target:{value}}) => setHeaderState(() => value) }/>
            <textarea value={contentState} onChange={({target:{value}}) => setContentState(()=> value)}/>
            <button onClick={changeHandler}>Accept changes</button>
        </div>
    )

    const ViewHTML = (
        <>
            <h2>{headerView}</h2>
            <pre>{ contentView }</pre>
        </>
    )

    return(
        <>
            {
                ! isDelete && (
                    <div className={'postUnit'}>
                        <div>
                            { isEditMode ? EditHTML : ViewHTML }
                            <div>
                                <p>{` last update ${upDate.getDate()} ${upDate.getMonth()} ${upDate.getFullYear()} ${upDate.getHours()}:${upDate.getMinutes()}`}</p>
                            </div>
                            <p>{`original post was created ${createDate.toDateString()}`}</p>
                            <p>{`author is ${author}`}</p>
                        </div>
                        <div className={'btn-block'}>
                            <div>
                                <button onClick={editHandler}>Edit</button>
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