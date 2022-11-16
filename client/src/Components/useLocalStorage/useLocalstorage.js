import React from "react";

function useLocalStorage(itemName, initialValue) {
   const localStorageItem = localStorage.getItem(itemName);
   let parsedItems;

   //    Comprobamos si hay algo en el localStorage
   if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItems = initialValue;
   } else {
      parsedItems = JSON.parse(localStorageItem);
   }

   const [item, setItems] = React.useState(parsedItems);

   const saveItem = (newItem) => {
      const stringifiedItems = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItems);
      setItems(newItem);
   };

   return [item, saveItem];
}

export default useLocalStorage;
