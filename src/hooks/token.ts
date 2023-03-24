const TOKEN_KEY = "token";

export function useObterToken() {
    return sessionStorage.getItem(TOKEN_KEY);
}

export function usePersistirToken() {
    return (token: string) => {
        sessionStorage.setItem(TOKEN_KEY, token);
    }
}

export function useApagarToken() {
    sessionStorage.removeItem(TOKEN_KEY);
}