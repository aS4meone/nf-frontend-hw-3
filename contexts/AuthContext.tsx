'use client'
import React, {createContext, useState, useContext, useEffect, ReactNode} from 'react';
import {useRouter, usePathname} from 'next/navigation';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            if (pathname !== '/login') {
                router.push('/login');
            }
        }
    }, [pathname, router]);

    const login = (token: string) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        router.push('/');
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
