import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
const Home = () => {
   return (
      <div className="home">
         <Sidebar />
         <div className="container">
            <Navbar />
            <div className="widgets_container">
               <Widget />
               <Widget />
               <Widget />
               <Widget />
            </div>
         </div>
      </div>
   );
};

export default Home;
