import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      {/* <p>Copyright ⓒ {year}</p> */}
      <div>
        <p>Copyright &copy; {year}. All rights reserved</p>
      </div>
      <div class='bottom-footer'>
        <a href='https://www.github.com/adavSuraj' class='social-icons'>
          <GitHubIcon />
        </a>
        <a href='mailto:surajr.adav@gmail.com' class='social-icons'>
          <MailOutlineIcon />
        </a>
        <a href='https://www.linkedin.com/in/suraj-adav' class='social-icons'>
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
