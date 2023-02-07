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
               <li>
                  <DashboardIcon />
                  <span>Dashboard</span>
               </li>
               <li>
                  <GroupIcon />
                  <span>Users</span>
               </li>
               <li>
                  <StoreIcon />
                  <span>Products</span>
               </li>
               <li>
                  <CreditCardIcon />
                  <span>Orders</span>
               </li>
               <li>
                  <LocalShippingIcon />
                  <span>Delivery</span>
               </li>
               <li>
                  <InsertChartIcon />
                  <span>Stats</span>
               </li>
               <li>
                  <NotificationsIcon />
                  <span>Notifications</span>
               </li>
               <li>
                  <MonitorHeartIcon />
                  <span>System Helth</span>
               </li>
               <li>
                  <PsychologyIcon />
                  <span>Logs</span>
               </li>
               <li>
                  <SettingsIcon />
                  <span>Settings</span>
               </li>
               <li>
                  <AccountCircleIcon />
                  <span>Profile</span>
               </li>
               <li>
                  <LogoutIcon />
                  <span>Log Out</span>
               </li>
            </ul>
         </div>
         <div className="bottom">Color Options</div>
      </div>
   );
};

export default Sidebar;
