import { internalCache } from "./internalCache.mjs"

export const isLogged = () => {
    const token = internalCache.get("token")
    if (token === null) {
        return false;
    } else {
        return token;
    }
}
