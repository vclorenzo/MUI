import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Profiles = () => {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div>
      {profiles.map((profile) => (
        <NavLink
          key={profile}
          to={`/profiles/${profile}`}
          className={({ isActive }) => {
            return isActive ? 'text-primary-700' : '';
          }}
        >
          {profile}
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
};

export default Profiles;
