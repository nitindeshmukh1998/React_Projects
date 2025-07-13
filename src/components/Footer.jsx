const Footer = () => {
  return (
<footer className="footer-container">
  <div className="footer-content">
  <h2>Nitin's Food Gallery</h2>
  <p>&copy; {new Date().getFullYear()} Nitin's Food Gallery. All rights reserved.</p>
  </div>
  <div className="footer-contacts">
    <p>Contact us:</p>
    <ul>
    <li>Email: nitindeshmukh1998@gmail.com</li>
    <li>Phone: +91-123456789</li>
    <li>Instagram: @aughad_fakir</li>
    </ul>
  
  </div>
</footer>
  )
};
export default Footer;
