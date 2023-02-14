import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featuredCharts/Featured";
import Chart from "../../components/chart/Chart";
import List from "../../components/list/List";

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
               <Chart title="Last 6 month (Revenue)" aspect={2.5 / 1} />
            </div>
            <div className="list-container">
               <div className="list-title">Latest transactions</div>
               <List />
            </div>
         </div>
      </div>
   );
};

export default Home;
