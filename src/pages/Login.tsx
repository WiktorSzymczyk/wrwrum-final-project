import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { useAuthContext, DataType } from "../context/AuthContext"
import axios, { AxiosError } from "axios"
import { toast } from "react-toastify"

import React, {useState} from "react"

interface FormData {
    email: string 
    password: string 
}

const Login = () => {

    const navigate = useNavigate()

    const { isAuthenticated, setToken } = useAuthContext() as DataType


    const [input, setInput] = useState<FormData> ({
        email: "" ,
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


        try {
            const { data: {token} } = await axios.post(`${process.env.REACT_APP_BACKEND_LOGIN}`, input)
            // console.log(data)
            localStorage.setItem('token', token) // YOU ARE STORING THE TOKEN AS AN OBJECT 
            setToken(token)

            
            // console.log(token)
        } catch(error: unknown) {
           if(error instanceof AxiosError){
                toast.error(error.response?.data.error)
                return
            }
            if( error instanceof Error){
               toast.error(error.message)
                return
            }

        }
    }
    
if (isAuthenticated) return <Navigate to='/' />
else
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


