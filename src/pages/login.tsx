import "../assets/styles/signup_login/signupSignin.scss"

import React, {useState} from "react"

interface FormData {
    email: string
    password: string
}

const Signup = () => {

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

        console.log( input.email)
    }
    

  return (
    <div className='signup-container '>
        <div>
            <div className='modalMedium'>
                <h1 className="mb-11  font-bold"> Signup</h1>
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
                        
                        <button className="medium-button w-full">Signup</button>
                    </form>
            
                
            </div>
        </div>

    </div>
  )
}

export default Signup