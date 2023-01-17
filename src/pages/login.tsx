import "../assets/styles/signup_login/signupLogin.scss"
import { Link } from "react-router-dom"
import { useAuthContext, DataType } from "../components/context/AuthContext"
import axios from "axios"

import React, {useState} from "react"

interface FormData {
    email: string
    password: string
}

const Login = () => {

    const { setToken } = useAuthContext() as DataType


    const [input, setInput] = useState<FormData> ({
        email: "",
        password: ""
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    } 


    const handleSubmit = async (e: any) => {
        e.preventDefault()

        // console.log( input.email)
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_LOGIN}`, input)
            // console.log(data)
            localStorage.setItem('token', data)
            setToken(data)
            console.log(data)
        } catch(error) {
            console.log(error)
        }
    }
    

  return (
    <div className='signup-container '>
        <div>
            <div className='modalMedium'>
                <div className="signup-body">
                    <h1 className="mb-11  font-bold"> Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-field-container">
                            <div className="body">
                                <input 
                                type="email"  
                                value={input.email}
                                onChange={handleChange}
                                placeholder="E-mail Address"
                                name="email"/>
                            </div>
                            <div className="body">
                                <input type="password" 
                                value={input.password} 
                                onChange={handleChange}
                                placeholder="Password" name="password"/>
                            </div>
                        </div>
                        
                        <button className="medium-button w-full">Login</button>
                    </form>
                </div>
                <hr className="separation-line"/>
                <div className="footer">
                    <h4>New to Wrwrum?</h4>
                    <Link to="/signup" className="text-link"> Join now </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login
