import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineAudio, AiOutlineSetting } from 'react-icons/ai';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: <AiOutlineSetting />,
    },
    {
      id: 2,
      path: '/particulars',
      text: <AiOutlineAudio className="audioIcon" />,
      class: 'item2',
    },
  ];
  return (
    <nav className="navbar">

      <ul>

        {links.map((link) => (
          <li key={link.id} id={link.class}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>

    </nav>
  );
}
export default Navbar;
