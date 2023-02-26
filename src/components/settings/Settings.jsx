import Navbar from "../../components/navbar/Navbar";
import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
const Settings = () => {
   return (
      <div className="settings">
         <Sidebar />
         <div className="settings-container">
            <Navbar />
            Settings
         </div>
      </div>
   );
};
export default Settings;
