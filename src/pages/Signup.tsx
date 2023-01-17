import { Link } from "react-router-dom"
import { useAuthContext, DataType } from "../context/AuthContext"
import React, {useState} from "react"
import axios from "axios"


export type FormData = {
    firstName: string
    email: string
    password: string
}

const SignuIndex = () => {
    
    
    const { setToken } = useAuthContext() as DataType
   
    

    const [input, setInput] = useState<FormData> ({
        firstName: "",
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
        // try {
        //     // console.log(input.firstName, input.email)
        //     const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_SIGNUP}`, input)
        //     // console.log(data)
        //     localStorage.setItem('token', data)
        //     setToken(data)
        //     // console.log(setToken(data))
        // } catch(error) {
        //     console.log(error)
        // }
        try {
            const { data: {token} } = await axios.post(`${process.env.REACT_APP_BACKEND_SIGNUP}`, input)
            // console.log(data)
            localStorage.setItem('token', token) // YOU ARE STORING THE TOKEN AS AN OBJECT 
            setToken(token)
            // console.log(token)
        } catch(error) {
            console.log(error)
        }
        
    }
    

  return (
    <div className='signup-container '>
        <div>
            <div className='modalMedium'>
                <div className="signup-body">
                    <h1 className="mb-11  font-bold"> Signup</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-field-container">
                            <div className="body">
                                <input
                                type="text"  
                                value={input.firstName}
                                onChange={handleChange}
                                placeholder="First Name" 
                                name="firstName"
                                />
                            </div>
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
                        <button className="medium-button w-full">Signup</button>
                    
                    </form>
                </div>

                     <hr className="separation-line"/>
                <div className="footer">
                    <h4>Already on Wrwrum?</h4>
                    <Link to="/login" className="text-link"> Log in </Link>
                </div>
            
                
            </div>
        </div>

    </div>
  )
}

export default SignuIndex
