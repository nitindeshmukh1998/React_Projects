import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="brand-name">
        <img src={Logo} alt="company Logo" className="brand-logo" />
        <h1> Nitin's Food Gallery</h1>
      </div>

      <ul className="nav-tabs">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROFILE</li>
        <li>HISTORY</li>
        <li>WALLET</li>
        <li>CART</li>
      </ul>
    </div>
  );
};

export default Navbar;