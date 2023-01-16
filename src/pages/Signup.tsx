import "../assets/styles/signup_login/signupSignin.scss"

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
        <div className="max-w-md w-full mx-auto">
            <div className='modalMedium max-w-md w-full mx-auto'>
                <h1 className="mb-11"> Signup</h1>
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
        </div>

    </div>
  )
}

export default Signup
