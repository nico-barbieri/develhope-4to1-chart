import { internalCache } from "./internalCache.mjs";
import { isLogged } from "./session.mjs";

/**
 * controllare se l'utente è loggato
 * se non è loggato prendiamo i valori di email e password e facciamo la chiamata di log-in
 * se il server dà esito positivo, renderizziamo il carrello, se dà errore diamo la possibilità di reinserire i dati
 * 
 */

 const state = {
    form: {
        email: "",
        password: "",
    }
 }
 const init = () => {
    console.log(isLogged());
 }

 init();