import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const Navigation = () => {
  const [navContent] = useState({
    logo: 'Bookstore CMS',
    links: ['BOOKS', 'CATEGORIES'],
    avatarInfo: {
      user: 'Godwin',
      imagelink: '',
    },
  });

  return (
    <div className="nav appwidth" data-testid="nav-a">
      <div className="nav-links">
        <div className="nav-title">{navContent.logo}</div>
        {navContent.links.map((link, index) => (
          <Link to={`/${link.toLowerCase()}`} key={link} className="nav-link" data-testid={`nav-${index + 1}`}>{link}</Link>
        ))}
      </div>
      <Avatar
        alt={navContent.avatarInfo.user}
        src={navContent.imagelink}
        sx={{ width: 28, height: 28 }}
      />
    </div>
  );
};

export default Navigation;
