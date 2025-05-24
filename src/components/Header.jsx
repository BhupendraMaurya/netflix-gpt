import netFlixLogo from '../assets/Netflix_Logo_PMS.png';
import signOutImg from '../assets/sign_out_img.jpg'; 
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute top-0 left-0 w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img 
        className="w-44"
        src={netFlixLogo}
        alt="Logo"
      />

      {user && (
        <div className="flex items-center gap-3">
          <img
            className="w-8 h-8 rounded-full"
            src={user?.photoURL || signOutImg} // fallback image
            alt="User"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white font-semibold px-4 py-1 rounded hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
