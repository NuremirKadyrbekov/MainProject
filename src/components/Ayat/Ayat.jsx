import React, { useState } from "react";
import { User } from "./User";
import { Form } from "./Form";
import { fetchResults } from "./fetchResults";
import css from "./style.module.css";
import { Link } from "react-router-dom";

export function Ayat() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onSearchChange(event) {
    setQuery(event.target.value);
  }

  async function onSearchSubmit(event) {
    event.preventDefault();
    const results = await fetchResults(query);
    setResults(results);
  }

  return (
    <div className={css.ayat}>
      <main className={css.main}>
        <h2>GitHub User Search</h2>
        <Form
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          value={query}
        />
        <h3>Results</h3>
        <div id="results">
          <div>
            {results.map((user) => (
              <User
                key={user.login}
                avatar={user.avatar_url}
                url={user.html_url}
                username={user.login}
              />
            ))}
          </div>
        </div>
      </main>
      <Link to="/">
        <button className={css.back}>Закрыть</button>
      </Link>
    </div>
  );
}
