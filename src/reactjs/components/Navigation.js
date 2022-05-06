import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [navContent] = useState({
    logo: 'Bookstore CMS',
    links: ['BOOKS', 'CATEGORIES'],
    avatar: 'AVATAR',
  });

  return (
    <div className="nav appwidth" data-testid="nav-a">
      <div className="nav-links">
        <div className="nav-title">{navContent.logo}</div>
        {navContent.links.map((link, index) => (
          <Link to={`/${link.toLowerCase()}`} key={link} className="nav-link" data-testid={`nav-${index + 1}`}>{link}</Link>
        ))}
      </div>
      <div>{navContent.avatar}</div>
    </div>
  );
};

export default Navigation;
