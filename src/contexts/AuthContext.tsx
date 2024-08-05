import { createContext, ReactNode, useState } from "react";


interface UserProps {
    name: string;
    email: string;
    avatarUrl: string;
}

interface AuthContextProviderProps {
    children: ReactNode
}

export interface AuthContextDataProps {
    user: UserProps;
    isUserLoading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
}


export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [isUserLoading, setIsUserLoading] = useState(false)
    const [user, setUser] = useState<UserProps>({} as UserProps)



    async function signIn(email: string, password: string) {
        try {
            setIsUserLoading(true)
            console.log(`email: ${email} password: ${password}`)
            // Simulating a delay to fetch the user data
            // const response = await api.post('/login', {
            //     email: 'thiagooo@gmail.com',
            //     password: '123456'
            // })
            // const accessToken = response.data.accessToken
            // const decodedToken = jwtDecode<{ email: string, name: string }>(accessToken)
            // console.log(decodedToken)
            const user = {
                name: 'Thiago',
                email: 'thiago@gmail.com',
                avatarUrl: ''
            }

            setUser(user)

            // await saveToken(accessToken);

        } catch (error) {
            console.log(JSON.stringify(error))
            throw (error)
        } finally {
            setIsUserLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, isUserLoading, user }}>
            {children}
        </AuthContext.Provider>
    )
}