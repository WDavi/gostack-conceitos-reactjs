import React from 'react';
import './Repository.css';

export default function Repository({repository,deleteFunction}){
  return(
    <li>
      <a href={repository.url}>{repository.title}</a>
      <section>
        <p>Tecnologias: {repository.techs}</p>
        <p>Likes: {repository.likes}</p>
      </section>
      <button onClick={deleteFunction}>Remover</button>
    </li>
  );
};