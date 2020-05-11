import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div
    style={{
      background: 'pink',
      paddingTop: '10px',
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/list">List</Link>
      </li>
 
    </ul>
  </div>
)

export default Menu
