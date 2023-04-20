import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import './sidebar.scss';
import { ReactComponent as Hamburger } from '../../data/svg/Hamburger.svg';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { dispatch } = useContext(DarkModeContext);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="sidebar" style={{ flex: isCollapsed ? 1 : 0 }}>
      <div className="top">
        <div className="logoContainer">
          <Link to="/" style={{ textDecoration: 'none' }} className="link">
            <span className="logo" style={{}}>
              E
            </span>
            <span className="logo" style={{ opacity: isCollapsed ? 1 : 0, fontSize: isCollapsed ? '20px' : '1px' }}>
              COMPANY
            </span>
          </Link>
          <Hamburger onClick={handleCollapse} className="iconSvg" />
        </div>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span style={{ opacity: isCollapsed ? 1 : 0 }}>Users</span>
            </li>
          </Link>

          <p className="title">USER</p>
          <Link to="/forms" style={{ textDecoration: 'none' }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span style={{ opacity: isCollapsed ? 1 : 0 }}>Profile</span>
            </li>
          </Link>

          <li>
            <ExitToAppIcon className="icon" />
            <span style={{ opacity: isCollapsed ? 1 : 0 }}> Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: 'LIGHT' })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: 'DARK' })}></div>
      </div>
    </div>
  );
};

export default Sidebar;
