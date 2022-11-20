import React from "react";
import { getSearchTitle } from "../../../Redux/actions/index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.css";

export default function SearchBar({ paginaUno }) {
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
    paginaUno();
  }

  return (
    <div className={styles.container}>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          onChange={(e) => handleInputChange(e)}
          value={title}
          type="search"
          id="default-search"
          class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-600 focus:ring-orange-500 focus:border-orange-500"
          placeholder="Buscar..."
          required
        />
        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
