import {useState, useEffect, createContext, useContext, ReactNode} from 'react'
import axios from 'axios'


export type User = {
    firstName: string | null
    email: string | null
    password: string | null
}

export type DataType = {
    user: User | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
    verifyToken: () => void;
   
}

interface ContextProps {
    children: ReactNode
}

export const AuthContext = createContext<DataType | null >(null) 

export const useAuthContext = () => useContext(AuthContext);


const AuthProvider = ({children}: ContextProps) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);



  const verifyToken = async (body: any = {}) => {
    try{

            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_AUTH}`,
            {body},
            { headers: { Authorization: token } }
            );
            setIsAuthenticated(true);
            setUser(data);
        } catch (error) {
            console.error(error);
        }
        
    }

    // console.log(token)

    useEffect(() => {
        token && verifyToken()
    }, [token])



    return (<AuthContext.Provider value={{user, setToken, verifyToken}}>{children}</AuthContext.Provider>);

   
 }

export default AuthProvider;

