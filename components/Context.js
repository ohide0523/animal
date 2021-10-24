import React,{createContext,useState} from 'react'


export const AuthContext = createContext();


const AuthProvider = ({children}) => {
const [like,setLike] = useState({count:0,liked:false})
const [currentUser, setCurrentUser] = useState(null);
  //ログイン状態だけの判断
  const [login, setLogin] = useState(false);


    return (
        <AuthContext.Provider value={{like,setLike,login, setLogin,currentUser, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
