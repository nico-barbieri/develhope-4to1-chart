import { internalCache } from "./internalCache.mjs";
import { isLogged , login } from "./session.mjs";

const $form = document.querySelector("#login-form");
const $formInputs = document.querySelectorAll(".form-input");

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

 const setFormListeners = () => {
   $formInputs.forEach($input => {
      $input.addEventListener("input", event =>{
         const {name, value} = event.target;

         state.form[name] = value;

      })
   })

   $form.addEventListener("submit", async event => {
      event.preventDefault();

      const token = await login(state.form.email, state.form.password);

      if(!token){
         return;
      } 
      internalCache.set("token", token);
      
   })
 }

 const checkSession = () => {
   if(isLogged()){
      
   }else{
      setFormListeners();
   }
 }

 const init = () => {
   checkSession();
}

 init();