import React, { useState } from 'react';
import { User } from './User';
import { Form } from './Form';
import { fetchResults } from './fetchResults';
import './style.css'

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
    <div className='ayat'>
      <main className='main'>
        <h2>GitHub User Search</h2>
        <Form
           onChange={onSearchChange}
           onSubmit={onSearchSubmit}
           value={query}
        />
        <h3>Results</h3>
        <div id='results'>
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
    </div>
  );
}


