import React from "react";
import logo from "../../assets/images/logo.webp";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () =>
{
  const year = new Date().getFullYear();

  return (
    <footer>
    <hr/>
      <div
        className="container">
        <div className="footer-cols">
          <ul>
            <li key={1}>
              <Link to="/">
                <img src={logo} className="logo" alt="Logo for for the company SolerChil  " />
              </Link>
            </li>
            <li>Revolutionizing the utilization of solar energy on the African continent </li>
          </ul>

          <ul>
            <li>Company </li>
            <li>
              <Link to="about">About Us</Link>
            </li>

            <li>
              <Link to="/initiatives">Initiatives </Link>
            </li>

            <li>
              <Link to="/contributors">Contributors</Link>
            </li>
          </ul>
          <ul>
            <li>Support</li>
            <li> <Link to="/cookie-policy">Cookies Policy</Link> </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>


              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              {/* Add a google form that can be filled by the people that would love to join the cause oif that is what they wish to do ; */}
              <Link to="/join-us">Join Us</Link>
            </li>
          </ul>
          <ul className="socials">
            <li>Community</li>
            <li>
              <a href="https://github.com/CodeForUganda" target="_blank" rel="noopener noreferrer" >
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/CodeForUganda" target="_blank" rel="noopener noreferrer" >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/CodeForUganda" target="_blank" rel="noopener noreferrer" >
                <FaFacebook />
              </a>
            </li>

          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-bottom footer-center">All the content is released under <br/>the <strong>Creative Commons Attribution Licence</strong> &copy; {year}, CodeForUganda</div>
    </footer>
  );
};

export default Footer;
