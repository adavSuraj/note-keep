import React from 'react';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';

function Header() {
  return (
    <header>
      <h1>
        <CreateRoundedIcon className='padding' />
        Notekeep
      </h1>
    </header>
  );
}

export default Header;
