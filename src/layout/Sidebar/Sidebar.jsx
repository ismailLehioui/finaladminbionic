import { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";
import { SidebarContext } from '../../context/sidebarContext';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);


  const { user } = useSelector((state) => state.auth);




  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">

        {/* Dropdown Menu */}
          <span  className="nav-link text-body font-weight-bold px-0" style={{ cursor: 'pointer' }}>
            <i className="fa fa-user me-sm-1"></i>
            <div className="info-img img-fit-cover">
              <img src={user?.profilePhoto.url} alt="profile" />
            </div>
            <a className="dropdown-item">{user?.name}</a>
          </span>

         

      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <NavLink
                to={navigationLink.path} // Use the path here for routing
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
