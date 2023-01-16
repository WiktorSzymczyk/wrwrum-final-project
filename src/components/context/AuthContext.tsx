import {useState, useEffect, createContext, useContext, ReactNode} from 'react'
import axios from 'axios'


export interface User {
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



  const verifyToken = async () => {
    try{

            const { data } = await axios.post("http://anxious-pink-cowboy-boots.cyclic.app/api/user/auth",
            {},
            { headers: { Authorization: token } }
            );
            setIsAuthenticated(true);
            setUser(data);
        } catch (error) {
            console.error(error);
        }
        
    }

    useEffect(() => {
        token && verifyToken()
    }, [token])



    return (<AuthContext.Provider value={{user, setToken, verifyToken}}>{children}</AuthContext.Provider>);

   
 }

export default AuthProvider;

