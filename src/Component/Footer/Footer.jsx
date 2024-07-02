import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const faceBookUrl = "https://www.facebook.com/tr.marechud/";
  const linkedinUrl = "https://www.linkedin.com/in/rasulia-bary-antor-b9400a261/"

    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <div  className="grid grid-flow-col gap-4">
     <a href={faceBookUrl}>
     <FaFacebook className="size-7"></FaFacebook>
     </a>
     <a>
     <FaInstagram className="size-7"></FaInstagram>
     </a>
     <a href={linkedinUrl}>
      <FaLinkedin className="size-7"></FaLinkedin>
     </a>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2024 - All right reserved by Hero Travels LTD</p>
  </aside>
</footer>
    );
};

export default Footer;