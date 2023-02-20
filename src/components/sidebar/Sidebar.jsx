import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import SettingsIcon from "@mui/icons-material/Settings";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
   const { dispatch } = useContext(DarkModeContext);
   return (
      <div className="sidebar">
         <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
               <span className="logo">KINN</span>
            </Link>
         </div>
         <hr />
         <div className="center">
            <ul>
               <p className="title">Main</p>
               <Link to="/" style={{ textDecoration: "none" }}>
                  <li>
                     <DashboardIcon className="icon" />
                     <span>Dashboard</span>
                  </li>
               </Link>
               <Link to="/users" style={{ textDecoration: "none" }}>
                  <li>
                     <GroupIcon className="icon" />
                     <span>Users</span>
                  </li>
               </Link>
               <Link to="/products" style={{ textDecoration: "none" }}>
                  <li>
                     <StoreIcon className="icon" />
                     <span>Products</span>
                  </li>
               </Link>
               <li>
                  <CreditCardIcon className="icon" />
                  <span>Orders</span>
               </li>
               <li>
                  <LocalShippingIcon className="icon" />
                  <span>Delivery</span>
               </li>
               <p className="title">Lists</p>
               <Link to="/stats" style={{ textDecoration: "none" }}>
                  <li>
                     <InsertChartIcon className="icon" />
                     <span>Stats</span>
                  </li>
               </Link>
               <li>
                  <NotificationsIcon className="icon" />
                  <span>Notifications</span>
               </li>
               <p className="title">Services</p>
               <li>
                  <MonitorHeartIcon className="icon" />
                  <span>System Helth</span>
               </li>
               <li>
                  <PsychologyIcon className="icon" />
                  <span>Logs</span>
               </li>
               <li>
                  <SettingsIcon className="icon" />
                  <span>Settings</span>
               </li>
               <p className="title">User</p>
               <li>
                  <AccountCircleIcon className="icon" />
                  <span>Profile</span>
               </li>
               <li>
                  <LogoutIcon className="icon" />
                  <span>Log Out</span>
               </li>
            </ul>
         </div>
         <div className="bottom">
            <div className="colorOptions" onClick={() => dispatch({ type: "LIGHT" })}></div>
            <div className="colorOptions" onClick={() => dispatch({ type: "DARK" })}></div>
         </div>
      </div>
   );
};

export default Sidebar;
