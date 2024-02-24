import { useState } from 'react'

export default function SignUpForm (props){
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value })
    }
    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            props.signUp(credentials)
        }}>
            <input type='text' name="name" onChange={handleChange} value={credentials.name} />
            <input type='email' name="email" onChange={handleChange} value={credentials.email} />
            <input type='password' name="password" onChange={handleChange} value={credentials.password} />
            <input type="submit" value="Submit" />
        </form>
    )
   } 