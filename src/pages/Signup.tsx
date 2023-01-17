import "../assets/styles/signup_login/signupLogin.scss"
import { Link } from "react-router-dom"


import React, {useState} from "react"

interface FormData {
    firstName: string
    email: string
    password: string
}

const Signup = () => {

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

        console.log(input.firstName, input.email)
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

export default Signup
