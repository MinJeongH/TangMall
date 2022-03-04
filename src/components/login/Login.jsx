import React, { useState } from 'react'



function Login() {

    const [InputId, setInputId] = useState('')
    const [InputPw, setInputPw] = useState('')    

    const onClickLogin = () => {
        console.log('click login')
    }

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    return(
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={InputId} onChange={handleInputId} />
                <div>{InputId}</div>
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={InputPw} onChange={handleInputPw} />
                <div>{InputPw}</div>
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login