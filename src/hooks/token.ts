import { useEffect, useState } from "react";

const TOKEN_KEY = "token";

export function useObterToken() {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        let token = sessionStorage.getItem(TOKEN_KEY);
        if (token) {
            setToken(token);
        }
    }, []);

    return token;
}

export function usePersistirToken() {
    return (token: string) => {
        sessionStorage.setItem(TOKEN_KEY, token);
    }
}

export function useApagarToken() {
    return () => {
        sessionStorage.removeItem(TOKEN_KEY);
    }
}