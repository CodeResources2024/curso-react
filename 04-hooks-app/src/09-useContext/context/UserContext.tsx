import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

type AuthStatus = 'checking' | 'authenticated' | 'no-authenticated';

interface UserContextProps {
    //state
    authStatus: AuthStatus;
    user: User | null;
    isAuthenticated: boolean,
    //methods
    login: (userId: number) => boolean;
    logout: () => void;
}


export const UserContext = createContext({} as UserContextProps);


export const UserContexProvider = ({ children }: PropsWithChildren) => {

    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);



    const handdleLogin = (userId: number) => {
        console.log({ userId })
        const user = users.find(user => user.id === userId);
        if (!user) {
            console.log(`no existe un usuario con el ID: ${userId}`);
            setUser(null);
            setAuthStatus('no-authenticated');
            return false;
        }

        setUser(user);
        setAuthStatus('authenticated');
        localStorage.setItem('userId', userId.toString());

        return true;
    }
    const handdleLogout = () => {
        console.log('Saliendo')
        setUser(null);
        setAuthStatus('no-authenticated');
        localStorage.removeItem('userId');
    }

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            handdleLogin(+storedUserId);
            return;
        } else {
            handdleLogout();
        }
    }, [])


    return (
        <UserContext value={{
            authStatus: authStatus,

            isAuthenticated: authStatus === 'authenticated',

            user: user,
            login: handdleLogin,
            logout: handdleLogout,

        }}
        >
            {children}
        </UserContext >
    )
}
