import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext, useState, useRef, useEffect } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from '../../redux/apiCalls/authApiCall';


const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Ajouter la fonction de déconnexion ici
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button type="button" className="sidebar-toggler" onClick={toggleSidebar}>
          <img src={iconsImgs.menu} alt="Menu" />
        </button>
        <h3 className="content-top-title">Home</h3>
      </div>

      <div className="content-top-btns">
        <button type="button" className="search-btn content-top-btn">
          <img src={iconsImgs.search} alt="Search" />
        </button>
        <button className="notification-btn content-top-btn">
          <img src={iconsImgs.bell} alt="Notifications" />
          <span className="notification-btn-dot"></span>
        </button>

        {/* Dropdown Trigger */}
        <div className="user-dropdown" ref={dropdownRef}>
          <button className="dropdown-toggle content-top-btn" onClick={toggleDropdown}>
            <img src={iconsImgs.user} alt="User" />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="dropdown-menu dropdown-menu-right show">
              <a className="dropdown-item">{user?.email}</a>
              <Link to="/account" className="dropdown-item">Account</Link>
              <Link to="/settings" className="dropdown-item">Settings</Link>
              <span onClick={handleLogout} className="dropdown-item" style={{ cursor: 'pointer' }}>Logout</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentTop;
