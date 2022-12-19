import { internalCache } from "./internalCache.mjs"

export const isLogged = () => {
    const token = internalCache.get("token")
    if (token === null) {
        return false;
    } else {
        return token;
    }
}

export const login = async (email, password) => {
    //console.log(email, password);
    try{
        const results = await axios({
            url: "http://localhost:3000/users/login",
            method: "POST",
            data: {
              email,
              password,
            }
          });
        
          const {token} = results.data; // -> { user: { ... }, token: ... }

          return token;
          

    }catch(error){
        console.log(error);
        return false;
    }
}
