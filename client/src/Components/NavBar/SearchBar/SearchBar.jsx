import React from "react";
import { getSearchTitle } from "../../../Redux/actions/index"
import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";

export default function SearchBar() {
   const dispatch = useDispatch();
   const [title, SetTitle] = useState("");

   function handleInputChange(e) {
      e.preventDefault();
      SetTitle(e.target.value);
   }

   function handleSubmit(e) {
      e.preventDefault();
      dispatch(getSearchTitle(title));
      SetTitle("");
   }

   return (
      <div className={style.containSearchBar}>
         <section className={style.mainInput}>
            {console.log(title)}
            {/* <p>Hola MUNDO</p> */}
            <div className={style.mainInputContainer}>
               <input
                  type="text"
                  value={title}
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
