import React from 'react';

const Footer = (props) => {
  const networks = [
    {
      "name": "linkedin",
      "url": "https://www.linkedin.com/in/john-edwards-15b638bb/",
      "className": "fa fa-linkedin"
    },
    {
      "name": "github",
      "url": "https://github.com/jodoedjr",
      "className": "fa fa-github"
    }
  ]

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {networks.map(network => {
              return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })}
          </ul>

        </div>
        {/* <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div> */}
      </div>
    </footer>
  );
}

export default Footer;
