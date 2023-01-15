import "../assets/styles/signup_login/signupSignin.scss"


const Signup = () => {
  return (
    <div className='signup-container '>
        <div className="max-w-md w-full mx-auto">
            <div className='modalMedium max-w-md w-full mx-auto'>
                <h1 className="mb-11"> Signup</h1>
                    <form>
                        <div className="input-field-container">
                            <div className="body">
                                <input type="text"  placeholder="E-mail Address"></input>
                            </div>
                            <div className="body">
                                <input type="password" placeholder="Password"></input>
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
