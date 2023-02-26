import "./settings";
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const Settings = () => {
  return (
    <div className="settings">
         <Sidebar />
         <div className="settings-container">
            <Navbar />
            {/* <LineCharts /> */}
            settings
         </div>
      </div>
  )
}
export default Settings