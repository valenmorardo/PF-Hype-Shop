import { useEffect, useState } from "react";

// CREANDO REACT HOOK LOCALSTORAGE
// los hooks que creemos deben comenzar con use, este hook lo creamos para separar la logica denteo de APP pero si quisieramos integrar todo no habria problema
function useLocalStorage(itemName, initialValue) {
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(true);
   const [item, setItem] = useState(initialValue);

   // ESTE USEEFFECT ES PARA SIM]ULAR LA LLAMADA A UNA API
   useEffect(() => {
      setTimeout(() => {
         try {
            // USANDO LOCALSTORAGE(el localstorage solo maneja strings)
            // el localStorage.getItem("nombre del elemento")
            const localStorageItem = localStorage.getItem(itemName);
            // variable que contendra el array de los todos del localstorage
            let parsedItem;

            // si localStorageItem no contiene nada, crearemos un array vacio
            if (!localStorageItem) {
               // con localStorage.setItem("nombre elemento") podremos crear un elemento
               // localStorage.setItem("nombre elemento", JSON.stringify(archivo que queremos mandar al localStorage));
               // con JSON.stringify() convierte json o js en string
               localStorage.setItem(itemName, JSON.stringify(initialValue));
               // le damos el valor a la variable parsedItem con el initialValue que agreguemos
               parsedItem = initialValue;
            } else {
               // con el JSON.parse(string) covierte un string a un objeto json o js y lo que contenga lo renderizaremos en React
               parsedItem = JSON.parse(localStorageItem);
            }

            // cambiamos el item del useState para añadir los elementos que vienen dentro del localStorage
            setItem(parsedItem);
            // cambiamos el loading a false
            setLoading(false);
         } catch (error) {
            setError(error);
         }
      }, 1000);
   });

   // FUNCION PARA FUNCIONAR EL LOCALSTORAGE con las funciones para agregar  quitar TODOs
   const saveItem = (newItem) => {
      try {
         // convertimos el array de objetos en string
         const stringifiedItem = JSON.stringify(newItem);
         // lo añadimos al localStorage con setItem
         localStorage.setItem(itemName, stringifiedItem);
         // cambiamos el estado de React tambien
         setItem(newItem);
      } catch (error) {
         setError(error);
      }
   };

   // retornamos lo que queremos devolver cuando usemos el hook, sitenemos solamente 2 funciones o elementos que queremos retornar usamos un []
   // return [item, saveItem];

   // pero si se quieren retornar mas de 2 se debe usar un { } objeto
   return { item, saveItem, loading };
}

export { useLocalStorage };
