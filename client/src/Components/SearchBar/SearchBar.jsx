import React from "react";
import { getSearchSneaker } from "../../Redux/actions/index"
import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";

export default function SearchBar() {
   const dispatch = useDispatch();
   const [sneaker, SetSneaker] = useState("");

   function handleInputChange(e) {
      e.preventDefault();
      SetSneaker(e.target.value);
   }

   function handleSubmit(e) {
      e.preventDefault();
      dispatch(getSearchSneaker(sneaker));
      SetSneaker("");
   }

   return (
      <div className={style.containSearchBar}>
         <section className={style.mainInput}>
            {console.log(sneaker)}
            {/* <p>Hola MUNDO</p> */}
            <div className={style.mainInputContainer}>
               <input
                  type="text"
                  value={sneaker}
                  placeholder="Search Sneaker"
                  onChange={(e) => handleInputChange(e)}
               />
            </div>
         </section>
         <section className={style.mainButtons}>
            <button
               onClick={(e) => handleSubmit(e)}
               type="submit"
               outline="none"
            >
               Search
            </button>
         </section>
      </div>
   );
}
