import React, { createContext, useState } from "react";
import type { User } from "../types/User";

interface AuthState 
{
    user: User | null;
    token: string | null;
}

export const AuthContext = createContext<{
    auth: AuthState;
    setAuth: (auth: AuthState) => void;
}>({
    auth: {user: null, token: null},
    setAuth: () => {}
});

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [auth, setAuth] = useState<AuthState>({
        user: null,
        token: null
    });

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
};

