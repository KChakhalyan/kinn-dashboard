import Navbar from "../../components/navbar/Navbar";
import "./stats.scss";
import Sidebar from "../../components/sidebar/Sidebar";
const Stats = () => {
   return (
      <div className="stats">
         <Sidebar />
         <div className="stats-container">
            <Navbar />
            stats
         </div>
      </div>
   );
};
export default Stats;
