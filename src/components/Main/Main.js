import React from 'react';
import './Main.css';
import { NavLink } from 'react-router-dom';

function Main() {

  return (
    <main>
      <ul className="animals-list">
          <li className='animals-list__item'>
            <NavLink
              to='/random-animals/cats'
            className='animals-list__link'>
              Котики
            </NavLink>
          </li>

          <li className='animals-list__item'>
            <NavLink
              to='/random-animals/dogs'
              className='animals-list__link'>
              Песики
            </NavLink>
          </li>

          <li className='animals-list__item'>
            <NavLink
              to='/random-animals/foxes'
              className='animals-list__link'>
              Лисички
            </NavLink>
          </li>

      </ul>
    </main>
  )
}

export default Main;
