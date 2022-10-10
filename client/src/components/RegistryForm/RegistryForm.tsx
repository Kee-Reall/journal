import React, {ChangeEvent, useState} from "react";
import './RegistryForm.scss'

const RegistryForm = () => {

    let [nickName, setNickName] = useState<string>('')
    let [email, setEmail] = useState<string>('')
    let [pasOne, setPasOne] = useState<string>('')
    let [pasTwo, setPasTwo] = useState<string>('')
    let [passError,setPassError] = useState<boolean>(false)

    const submitHandler = (event:any) => {
        event.preventDefault()
        const valider = {
            nickName,
            email,
            password: pasOne === pasTwo ? pasOne : undefined
        }
        if (valider.password === undefined) {
            setPassError(()=> true)
            return
        }else setPassError(() => false)
    }

    const changeHandler = (setValue: Function, event: ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event
        setValue(() => value)
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <span className={'invitation'}>Join The <span className={'action-text'}>Chatty</span> now</span>
            </div>
            <div>
                <input type={'text'} placeholder={'Nickname'} value={nickName} onChange={
                    event => changeHandler(setNickName,event)
                }/>
                <input type={'email'} placeholder={'@'} value={email} onChange={
                    event => changeHandler(setEmail,event)
                }/>
                <input type={'password'} style={{
                    backgroundColor:passError ? "crimson" : "whitesmoke"
                }} placeholder={'password'} value={pasOne} onChange={
                    event => changeHandler(setPasOne,event)
                }/>
                <input type={'password'} style={{
                    backgroundColor:passError ? "crimson" : "whitesmoke"
                }}  placeholder={'confirm password'} value={pasTwo} onChange={
                    event => changeHandler(setPasTwo,event)
                }/>
            </div>
            <div className={'button-div'}>
                <button type={'submit'}>Send</button>
                {
                    passError && <span>Diferent paswords</span>
                }

            </div>
        </form>
    )
}

export default RegistryForm