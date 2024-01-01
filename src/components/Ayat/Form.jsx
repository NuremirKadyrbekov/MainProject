import React from "react";
import css from "./style.module.css";

export function Form({ onSubmit, onChange, value }) {
  return (
    <form className={css.searchForm} onSubmit={onSubmit}>
      <input
        id="search"
        type="text"
        placeholder="Enter username or email"
        onChange={onChange}
        value={value}
      />
      <button type="submit">Search</button>
    </form>
  );
}
