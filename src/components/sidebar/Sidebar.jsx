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

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="top">
            <span className="logo">KINN</span>
         </div>
         <hr />
         <div className="center">
            <ul>
               <p className="title">Main</p>
               <li>
                  <DashboardIcon className="icon" />
                  <span>Dashboard</span>
               </li>
               <li>
                  <GroupIcon className="icon" />
                  <span>Users</span>
               </li>
               <li>
                  <StoreIcon className="icon" />
                  <span>Products</span>
               </li>
               <li>
                  <CreditCardIcon className="icon" />
                  <span>Orders</span>
               </li>
               <li>
                  <LocalShippingIcon className="icon" />
                  <span>Delivery</span>
               </li>
               <p className="title">Lists</p>
               <li>
                  <InsertChartIcon className="icon" />
                  <span>Stats</span>
               </li>
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
         <div className="bottom">Color Options</div>
      </div>
   );
};

export default Sidebar;
