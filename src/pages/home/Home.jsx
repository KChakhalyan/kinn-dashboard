import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featuredCharts/Featured";
import Chart from "../../components/chart/Chart";
const Home = () => {
   return (
      <div className="home">
         <Sidebar />
         <div className="container">
            <Navbar />
            <div className="widgets_container">
               <Widget type="users" />
               <Widget type="orders" />
               <Widget type="earnings" />
               <Widget type="balance" />
            </div>
            <div className="charts_container">
               <Featured />
               <Chart />
            </div>
         </div>
      </div>
   );
};

export default Home;
