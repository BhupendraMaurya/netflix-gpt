import netFlixLogo from '../assets/Netflix_Logo_PMS.png';
const Header = () =>{
    return (
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <img 
        className="w-45"
        src={netFlixLogo}
            alt="Logo"
        />
    </div>);
};
export default Header;